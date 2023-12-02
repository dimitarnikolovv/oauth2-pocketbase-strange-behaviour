import { pb } from "$lib/pocketbase";
import { serializeNonPOJOs } from "$lib/utils";
import { dev } from "$app/environment";

export const handle = async ({ event, resolve }) => {
  event.locals.pb = pb;
  event.locals.pb.authStore.loadFromCookie(
    event.request.headers.get("cookie") || ""
  );

  try {
    if (event.locals.pb.authStore.isValid) {
      await event.locals.pb
        .collection("users")
        .authRefresh({ expand: "allowedToRate" });
      event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
    }
  } catch (_) {
    event.locals.pb.authStore.clear();
    event.locals.user = undefined;
  }

  const response = await resolve(event);

  response.headers.append(
    "set-cookie",
    event.locals.pb.authStore.exportToCookie({
      secure: dev ? false : true,
      sameSite: "Lax",
      httpOnly: false,
    })
  );

  return response;
};

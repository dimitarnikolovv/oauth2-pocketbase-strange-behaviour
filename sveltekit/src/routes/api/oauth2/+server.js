import { redirect } from "@sveltejs/kit";

export const GET = async ({ locals, url, cookies }) => {
  const redirectURL = `${url.origin}/api/oauth2`;
  const expectedState = cookies.get("state");
  const expectedVerifier = cookies.get("verifier");

  const state = await url.searchParams.get("state");
  const code = await url.searchParams.get("code");

  const authMethods = await locals.pb.collection("users").listAuthMethods();

  const provider = authMethods.authProviders[0];

  if (expectedState !== state) {
    throw redirect(303, "/login");
  }

  try {
    await locals.pb
      .collection("users")
      .authWithOAuth2Code(provider.name, code, expectedVerifier, redirectURL);
  } catch (err) {
    console.log(err);
  }

  throw redirect(303, "/");
};

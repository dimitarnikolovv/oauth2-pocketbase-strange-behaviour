import { error, fail, redirect } from "@sveltejs/kit";

export const actions = {
  // login: async ({ locals, request }) => {
  //   const formData = await request.formData();
  //   const form = await superValidate(formData, loginSchema);
  //   const { data } = form;

  //   const redirects = formData.get("redirects");

  //   if (!form.valid) {
  //     return fail(400, { form });
  //   }

  //   try {
  //     await locals.pb
  //       .collection("users")
  //       .authWithPassword(data.email, data.password);

  //     if (!locals.pb?.authStore?.model?.verified) {
  //       locals.pb.authStore.clear();
  //       return message(
  //         form,
  //         "Трябва да потвърдите имейла си преди да влезете."
  //       );
  //     }
  //   } catch (err) {
  //     if (err.status === 400 && err.message === "Failed to authenticate.") {
  //       return message(form, "Грешен имейл или парола.");
  //     }
  //     console.log(err);
  //     throw error(err.status, err.message);
  //   }
  //   throw redirect(303, redirects);
  // },

  oauth2: async ({ cookies, locals, url }) => {
    const authMethods = await locals.pb.collection("users").listAuthMethods();

    const redirectURL = `${url.origin}/api/oauth2`;
    const googleAuth = authMethods.authProviders[0];
    const authProviderRedirect = `${googleAuth.authUrl}${redirectURL}`;

    const state = googleAuth.state;
    const verifier = googleAuth.codeVerifier;

    cookies.set("state", state);
    cookies.set("verifier", verifier);

    throw redirect(302, authProviderRedirect);
  },
};

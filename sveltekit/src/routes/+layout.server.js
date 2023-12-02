export const load = async ({ locals }) => {
  if (locals.user && locals.pb.authStore.isValid) {
    return {
      user: locals.user,
    };
  }
  return {
    user: undefined,
  };
};

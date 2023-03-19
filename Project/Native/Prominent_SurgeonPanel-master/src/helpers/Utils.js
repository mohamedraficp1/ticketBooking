export const getCurrentUser = () => {
  let user = null;
  try {
    user =
      sessionStorage.getItem("app_user") != null
        ? JSON.parse(sessionStorage.getItem("app_user"))
        : null;
  } catch (error) {
    console.log(">>>>: src/helpers/Utils.js  : getCurrentUser -> error", error);
    user = null;
  }
  return user;
};

export const setCurrentUser = (user) => {
  try {
    if (user) {
      sessionStorage.setItem("app_user", JSON.stringify(user));
    } else {
      sessionStorage.removeItem("app_user");
    }
  } catch (error) {
    console.log(">>>>: src/helpers/Utils.js : setCurrentUser -> error", error);
  }
};

export const removeCurrentUser = () => {
  if (sessionStorage.getItem("app_user") !== null) {
    sessionStorage.removeItem("app_user");
  }
};

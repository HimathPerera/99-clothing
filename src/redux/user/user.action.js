import { CurrentUser } from "./user.types";

export const setCurrentUser = (user) => ({
  type: CurrentUser.SET_CURRENT_USER,
  payload: user,
});

import { createSlice } from "@reduxjs/toolkit";
import { setCookie, getCookie } from "cookies-next";
import jwt from "jsonwebtoken";

const setAuthCookie = (token) => {
  setCookie("jwt", token, {
    maxAge: 30 * 60,
    path: "/",
  });

  return true;
};

const getJwt = () => {
  let getJwt = getCookie("jwt");

  if (getJwt) {
    return jwt.decode(getJwt);
  }
  return null;
};

const clearAuthCookie = () => {
  setCookie("jwt", "", {
    maxAge: -1,
    path: "/",
  });
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: getJwt(),
    isAuthenticated: getJwt() ? true : false,
  },
  reducers: {
    setUser: (state, action) => {
      setAuthCookie(action.payload);
      state.user = getJwt();
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      clearAuthCookie();
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;

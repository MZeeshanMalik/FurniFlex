// import Signup from "./Signup";

import axios from "axios";
// import { useEffect } from "react";

export async function signup(data) {
  const { name, email, password } = data;
  try {
    const res = await axios({
      method: "post",
      url: "http://127.0.0.1:3000/api/v1/users/signup", // Use http instead of https
      data: {
        name,
        email,
        password,
      },
    });
    return res;
  } catch (error) {
    console.error("Error during signup:", error);
    // throw error
    return error;
  }
}

export async function login(data) {
  const { email, password } = data;
  try {
    const res = await axios({
      method: "post",
      url: "http://127.0.0.1:3000/api/v1/users/login", // Use http instead of https
      data: {
        email,
        password,
      },
    });
    return res;
  } catch (error) {
    console.error("Error during signup:", error);
    // throw error
    return error;
  }
}

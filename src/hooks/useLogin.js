import { useState, useEffect } from "react";

export const useLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) {
      setIsLoggedIn(true);
      setLoginData({ username: savedUser, password: "" });
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ username: "", password: "" });
    localStorage.removeItem("loggedInUser");
  };

  return {
    isLoggedIn,
    loginData,
    setLoginData,
    handleLogout,
  };
};

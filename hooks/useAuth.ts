import { useState, useEffect } from "react";

import { authenticate, keycloakInstance } from "../services/auth";

export const useAuth = () => {
  console.warn("[useAuth] setup");
  const [user, setUser] = useState<any>(null);
  const login = keycloakInstance?.login;
  const logout = keycloakInstance?.logout;

  useEffect(() => {
    console.warn("[useAuth] authenticate");

    authenticate()
      .then(({ user }) => {
        setUser(user || null);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return { user, login, logout, keycloakInstance };
};

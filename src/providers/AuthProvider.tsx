"use client";
import { AuthContext } from "@/context/AuthContext";
import { ReactNode, useEffect, useState } from "react";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthorized, setIsAuthorized] = useState(() => {
    return localStorage.getItem("isAuthorized") === "true";
  });

  useEffect(() => {
    if (isAuthorized) {
      localStorage.setItem("isAuthorized", "true");
    } else {
      localStorage.removeItem("isAuthorized");
    }
  }, [isAuthorized]);

  return (
    <AuthContext.Provider
      value={{
        isAuthorized,
        setIsAuthorized,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

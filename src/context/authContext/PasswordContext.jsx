import { createContext, useContext, useState, useEffect } from "react";

const PasswordContext = createContext();

export const usePassword = () => useContext(PasswordContext);

export const PasswordProvider = ({ children }) => {
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const access = sessionStorage.getItem("hasAccess");
    if (access === "true") {
      setHasAccess(true);
    }
  }, []);

  // const verifyPassword = async (inputPassword) => {
  //   try {
  //     const response = await fetch("/api/verify-password", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ password: inputPassword }),
  //     });

  //     const data = await response.json();

  //     if (data.success) {
  //       sessionStorage.setItem("hasAccess", "true");
  //       setHasAccess(true);
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   } catch (error) {
  //     console.error("Password verification failed", error);
  //     return false;
  //   }
  // };

  // Mocking a correct password for testing
  const verifyPassword = async (inputPassword) => {
    const correctPassword = "Codersh.Ca"; // Replace with actual password

    if (inputPassword === correctPassword) {
      sessionStorage.setItem("hasAccess", "true");
      setHasAccess(true);
      return true;
    } else {
      return false;
    }
  };

  const value = { hasAccess, verifyPassword };

  return (
    <PasswordContext.Provider value={value}>
      {children}
    </PasswordContext.Provider>
  );
};

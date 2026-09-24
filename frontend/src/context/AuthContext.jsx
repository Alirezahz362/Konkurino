import react, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("localStorage:خطا در خواندن داده  های کاربر ", error);
      localStorage.removeItem("user");
    } finally {
      setLoading(false);
    }
  }, []);

  const loginContext = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logoutContext = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ user, loginContext, logoutContext, loading }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

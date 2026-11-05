import React, { createContext, useState, useEffect, useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (err) {
        console.error('خطا در خواندن داده کاربر از localStorage:', err);
        localStorage.removeItem('user');
      }
    }
  }, []);

  const loginContext = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };


  const logoutContext = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loginContext, logoutContext }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth باید داخل AuthProvider استفاده شود.');
  }
  return context;
};

import React, { createContext, useContext, useState, useEffect } from 'react';

const ModeContext = createContext();

export const useMode = () => {
  return useContext(ModeContext);
};

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');

  // Listen for changes to the 'mode' item in localStorage
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'mode') {
        setMode(e.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

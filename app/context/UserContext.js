'use client';
import { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);
export const useUser = () => useContext(UserContext);
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState('Lukas Jonak');

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

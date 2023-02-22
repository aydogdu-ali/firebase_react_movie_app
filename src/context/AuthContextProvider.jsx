import React, { createContext, useEffect,useState } from 'react'
import { userObserver } from '../auth/firebase';

// contextimizi oluşturuyoeuz.
export const AuthContext =createContext()






const AuthContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(false)
  console.log(false)


  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
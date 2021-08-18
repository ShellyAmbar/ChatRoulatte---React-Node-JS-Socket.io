import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import firebaseConfig from "../Firebase/firebase-config";

const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  //called when user added or history changed
  useEffect(() => {
    const unSubscribe = firebaseConfig.auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      return unSubscribe;
    });
  }, []);

  const value = { user };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

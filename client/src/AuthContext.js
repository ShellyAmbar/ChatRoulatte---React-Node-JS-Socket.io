import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import firebaseConfig from "./firebase-config";

const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const history = useHistory();

  //called when user added or history changed
  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      // if (!firebaseConfig.auth().currentUser) {
      //   history.push("/Registeration");
      // }
    });
  }, [user, history]);

  const value = { user };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

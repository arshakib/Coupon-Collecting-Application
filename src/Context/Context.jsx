// import { createContext, useState } from "react";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.js";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
export const AuthContext = createContext(null);
// eslint-disable-next-line react/prop-types
const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const Provider = new GoogleAuthProvider();
  console.log(user);
  const google = () => {
    return signInWithPopup(auth, Provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const Reg = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  const object = {
    Reg,
    login,
    user,
    setUser,
    loading,
    logout,
    google,
  };
  return <AuthContext.Provider value={object}>{children}</AuthContext.Provider>;
};

export default Context;

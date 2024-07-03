import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig/FirebaseConfig";
import { createContext } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userInfo = {
    createUser,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

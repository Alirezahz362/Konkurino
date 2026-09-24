import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth باید حتما داخل  <AuthProvider/> قرار بگیرد");
  }
  return context;
};

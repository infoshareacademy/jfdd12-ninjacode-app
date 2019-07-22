import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = () => {
  const isLoggedIn = useContext(AuthContext);

  return isLoggedIn;
};

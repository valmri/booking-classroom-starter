import { useContext } from "react";
import AuthService from "../services/auth.service";
import AuthContext from "../context/AuthContext";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const signin = async (credentials: any) => {
    try {
      const response = await AuthService.signin(credentials);
      setUser(response.user);
    } catch (error) {
      console.error(error);
    }
  };

  return { user, signin };
};

export default useAuth;

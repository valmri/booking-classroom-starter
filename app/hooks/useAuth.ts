import { useContext } from "react";
import AuthService from "../services/auth.service";
import AuthContext from "../context/AuthContext";
import { removeToken, saveToken } from "../utils/token-jwt";

const useAuth = () => {
  const { user, setUser }: any = useContext(AuthContext);

  const signin = async (credentials: any) => {
    try {
      const response = await AuthService.signin(credentials);
      console.log("response : ", response);
      setUser(response.user);
      // save token in async storage
      saveToken(response.token);
    } catch (error) {
      console.error(error);
    }
  };

  const signout = async () => {
    setUser(null);
    removeToken();
  };

  const signup = async (credentials: any) => {
    try {
      const response = await AuthService.signup(credentials);
      setUser(response.user);
    } catch (error) {
      console.error(error);
    }
  };

  return { user, signin, signout, signup };
};

export default useAuth;

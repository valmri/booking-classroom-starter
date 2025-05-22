import api from "./api.service";

const signin = async (credentials: any) => {
  const response = await api.post("/auth/signin", credentials);
  return response.data;
};

const signup = async (credentials: any) => {
  const response = await api.post("/auth/signup", credentials);

  return response.data;
};

const AuthService = {
  signin,
  signup,
};

export default AuthService;

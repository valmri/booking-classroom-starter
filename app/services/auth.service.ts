import api from "./api.service";

const ENDPOINT = "/auth/signin";

const signin = async (credentials: any) => {
  const response = await api.post(ENDPOINT, {
    method: "POST",
    body: JSON.stringify(credentials),
  });

  return response.data;
};

const AuthService = {
  signin,
};

export default AuthService;

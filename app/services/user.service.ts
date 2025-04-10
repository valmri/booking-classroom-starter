import api from "./api.service";

const getUserWithToken = async (token: string) => {
  const reponse = await api.get("/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return reponse.data;
};

const UserService = {
  getUserWithToken,
};

export default UserService;

import api from "./api.service";

const getUserWithToken = async (token: string) => {
  const reponse = await api.get("/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return reponse.data;
};

const updateUserWithToken = async (id: any, token: string, userData: any) => {
  const reponse = await api.put(`/users/${id}`, userData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return reponse.data;
};

const UserService = {
  updateUserWithToken,
  getUserWithToken,
};

export default UserService;

import api from "./api.service";

const getReservations = async (token: string) => {
  const reponse = await api.get("/reservations/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return reponse.data;
};

const createReservation = async (token: string, data: {
  startTime: string;
  endTime: string;
  classroomId: number;
}) => {
  const response = await api.post("/reservations", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const deleteReservation = async (token: string, reservationId: number) => {
  const response = await api.delete(`/reservations/${reservationId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const updateReservation = async (
  token: string,
  reservationId: number,
  data: {
    startTime?: string;
    endTime?: string;
    classroomId?: number;
  }
) => {
  const response = await api.put(`/reservations/${reservationId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};


const ReservationService = {
  getReservations,
  createReservation,
  deleteReservation,
  updateReservation,
};

export default ReservationService;
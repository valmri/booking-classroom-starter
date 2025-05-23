import { useContext } from "react";
import ReservationService from "../services/reservation.service";
import { getToken } from "../utils/token-jwt";

const useReservation = () => {
  const getReservations = async () => {
    try {
      const token = await getToken();
      if(token){
        const response = await ReservationService.getReservations(token); 
        return response;  
      };
    }catch(error) {
      console.error(error);
    }
  };


  const createReservation = async (data:any) => {
    try {
      const token = await getToken();
      if(token){
        const response = await ReservationService.createReservation(token,data);
        return response;
      };
    } catch(error) {
      console.log(error);
    }
  }

  const updateReservation = async (
    reservationId: number,
    data: {
      startTime?: string;
      endTime?: string;
      classroomId?: number;
    }
  ) => {
    try {
      const token = await getToken();
      if (token) {
        const response = await ReservationService.updateReservation(token, reservationId, data);
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteReservation = async (reservationId: number) => {
    try {
      const token = await getToken();
      if (token) {
        const response = await ReservationService.deleteReservation(token, reservationId);
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getReservations,
    createReservation,
    updateReservation,
    deleteReservation,
  };
}

export default useReservation;
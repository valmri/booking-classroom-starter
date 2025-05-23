import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import ReservationList from "../components/reservation/ReservationList";
import ReservationForm from "../components/reservation/ReservationForm";
import ReservationInfo from "../components/reservation/ReservationInfo";
import { Reservation } from "../utils/types";

export type ReservationStackParamList = {
  ReservationList: undefined;
  ReservationForm: undefined;
  ReservationInfo: { reservation: Reservation }; 
};

const Stack = createNativeStackNavigator<ReservationStackParamList>();

const ReservationNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ReservationList" component={ReservationList} />
      <Stack.Screen name="ReservationForm" component={ReservationForm} />
      <Stack.Screen name="ReservationInfo" component={ReservationInfo} />
    </Stack.Navigator>
  );
};

export default ReservationNavigation;

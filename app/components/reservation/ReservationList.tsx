import { useCallback, useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Button, TextInput } from "react-native-paper";
import useReservation from "../../hooks/useReservation";
import { Reservation } from "../../utils/types";
import ReservationCard from "./ReservationCard";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { ReservationStackParamList } from "../../navigation/ReservationNavigation";

const ReservationList = () => {
  const { getReservations } = useReservation();
  const [reservations, setReservations] = useState<Reservation[]>([]);

  const navigation =
    useNavigation<NativeStackNavigationProp<ReservationStackParamList>>();

  const createReservation = () => {
    navigation.navigate("ReservationForm");
  };

  const fetchReservations = async () => {
    const data = await getReservations();
    if (data) {
      setReservations(data);
      console.log("dataComplaite : ", data);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchReservations();
    }, [])
  );

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <View>
      <Button mode="contained" onPress={createReservation}>
        Réserver un salle
      </Button>
      <View>
        {reservations.length === 0 ? (
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            Aucune réservation trouvée.
          </Text>
        ) : (
          reservations.map((reservation) => (
            <ReservationCard
              key={reservation.id}
              reservation={reservation}
              onDelete={fetchReservations}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default ReservationList;

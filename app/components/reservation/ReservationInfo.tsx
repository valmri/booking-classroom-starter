import { View, StyleSheet } from "react-native";
import { Button, TextInput, Card, Text } from "react-native-paper";
import { Reservation } from "../../utils/types";
import useReservation from "../../hooks/useReservation";
import { useRoute } from "@react-navigation/native";
import type { RouteProp } from "@react-navigation/native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { ReservationStackParamList } from "../../navigation/ReservationNavigation";

type ReservationInfoRouteProp = RouteProp<
  ReservationStackParamList,
  "ReservationInfo"
>;

const ReservationInfo = () => {
  const route = useRoute<ReservationInfoRouteProp>();

  const navigation =
    useNavigation<NativeStackNavigationProp<ReservationStackParamList>>();
  const { reservation } = route.params;

  const { updateReservation } = useReservation();
  const data: any = {};

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const classroomId = reservation.id;
  const handleSubmit = async () => {
    if (!startTime || !endTime) {
      alert("Tous les champs sont obligatoires.");
      return;
    }

    const data = {
      startTime,
      endTime,
      classroomId,
    };

    try {
      const result = await updateReservation(reservation.id, data);
      alert("Réservation modifier !");
      navigation.goBack();
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la modification.");
    }
  };

  async function handleReturn() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TextInput
        label="YYYY-MM-DD"
        placeholder={reservation.startTime.toString()}
        value={startTime}
        onChangeText={setStartTime}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="YYYY-MM-DD"
        placeholder={reservation.endTime.toString()}
        value={endTime}
        onChangeText={setEndTime}
        mode="outlined"
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Modifier la réservation
      </Button>
      <Button mode="text" onPress={handleReturn} style={styles.button}>
        Annuler
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 8,
  },
});

export default ReservationInfo;

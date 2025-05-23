import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import useReservation from "../../hooks/useReservation";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { ReservationStackParamList } from "../../navigation/ReservationNavigation";

const ReservationForm = () => {
  const { createReservation } = useReservation();
  const navigation =
    useNavigation<NativeStackNavigationProp<ReservationStackParamList>>();

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [classroomId, setClassroomId] = useState("");

  const handleSubmit = async () => {
    if (!startTime || !endTime || !classroomId) {
      alert("Tous les champs sont obligatoires.");
      return;
    }

    const data = {
      startTime,
      endTime,
      classroomId: parseInt(classroomId),
    };

    try {
      const result = await createReservation(data);
      console.log("Réservation créée :", result);
      alert("Réservation enregistrée !");
      navigation.goBack();
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la création.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Début (ex: 2025-05-22T10:00:00Z)"
        value={startTime}
        onChangeText={setStartTime}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Fin (ex: 2025-05-22T11:00:00Z)"
        value={endTime}
        onChangeText={setEndTime}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="ID de la salle"
        value={classroomId}
        onChangeText={setClassroomId}
        keyboardType="numeric"
        mode="outlined"
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Créer la réservation
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

export default ReservationForm;

import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";

const FormField = () => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [classroomId, setClassroomId] = useState("");

  return (
    <View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 12,
  },
});

export default FormField;

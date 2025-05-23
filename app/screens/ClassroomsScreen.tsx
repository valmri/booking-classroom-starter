import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const ClassroomsScreen = () => {
  const [classrooms, setClassrooms] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchAllClassrooms();
  }, []);

  const fetchAllClassrooms = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/classrooms");
      const data = await response.json();
      setClassrooms(data);
    } catch (error) {
      console.error("Erreur lors du chargement des salles :", error);
    }
  };

  const handleSeeMore = (classroom: any) => {
    navigation.navigate("ClassroomDetails", { classroom });
  };

  return (
    <View style={styles.classroomsContainer}>
      {classrooms.map((classroom) => (
        <Card
          key={classroom.id}
          onPress={() => handleSeeMore(classroom)}
          style={{ marginBottom: 12 }}
        >
          <Card.Title title={classroom.name} titleStyle={styles.cardTitle} />
          <Card.Content>
            <Text>Capacité : {classroom.capacity}</Text>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => handleSeeMore(classroom)}>See more</Button>
          </Card.Actions>
        </Card>
      ))}
    </View>
  );
};

export default ClassroomsScreen;

const styles = StyleSheet.create({
  classroomsContainer: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "blue",
  },
});

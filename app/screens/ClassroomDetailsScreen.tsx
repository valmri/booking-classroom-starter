import { useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Text, Divider, Chip, Card } from "react-native-paper";

const ClassroomDetailsScreen = () => {
  const route = useRoute();
  const { classroom } = route.params;

  useEffect(() => {
    console.log("ClassroomDetailsScreen mounted", classroom);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Title title={classroom.name} titleStyle={styles.title} />
        <Card.Content>
          <Text style={styles.capacity}>Capacité : {classroom.capacity}</Text>
          <Divider style={styles.divider} />
          <Text style={styles.subtitle}>Équipements :</Text>
          <View style={styles.chipContainer}>
            {classroom.equipment && classroom.equipment.length > 0 ? (
              classroom.equipment.map((item, index) => (
                <Chip key={index} style={styles.chip} icon="check">
                  {item}
                </Chip>
              ))
            ) : (
              <Text style={styles.noEquipment}>
                Aucun équipement répertorié.
              </Text>
            )}
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default ClassroomDetailsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  card: {
    borderRadius: 12,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  capacity: {
    fontSize: 18,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 16,
  },
  divider: {
    marginVertical: 10,
  },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: "#e3f2fd",
  },
  noEquipment: {
    fontStyle: "italic",
    color: "#888",
  },
});

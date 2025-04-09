import { Provider as PaperProvider, Text } from "react-native-paper";
import { View, StyleSheet } from "react-native";

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text>Welcome to the Booking Classroom App</Text>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

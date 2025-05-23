import { View, StyleSheet } from "react-native";
import ReservationNavigation from "../navigation/ReservationNavigation";

const ReservationsScreen = () => {
  return (
    <View style={styles.container}>
      <ReservationNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ReservationsScreen;

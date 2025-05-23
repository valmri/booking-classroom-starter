import ClassroomsScreen from "../screens/ClassroomsScreen";
import ProfilScreen from "../screens/ProfilScreen";
import ReservationsScreen from "../screens/ReservationsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import ClassroomsStack from "./ClassroomsStack";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === "Classrooms") {
        iconName = focused ? "school" : "school-outline";
      } else if (route.name === "Profil") {
        iconName = focused ? "person" : "person-outline";
      } else if (route.name === "Reservations") {
        iconName = focused ? "calendar" : "calendar-outline";
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
  });

  return (
    <Tab.Navigator initialRouteName="Profil" screenOptions={screenOptions}>
      <Tab.Screen name="Classrooms" component={ClassroomsStack} />
      <Tab.Screen name="Reservations" component={ReservationsScreen} />
      <Tab.Screen name="Profil" component={ProfilScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

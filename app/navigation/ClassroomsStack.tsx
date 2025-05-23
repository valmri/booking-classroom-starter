import { createStackNavigator } from "@react-navigation/stack";
import ClassroomsScreen from "../screens/ClassroomsScreen";
import ClassroomDetailsScreen from "../screens/ClassroomDetailsScreen";

const Stack = createStackNavigator();

const ClassroomsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Classrooms" component={ClassroomsScreen} />
    <Stack.Screen
      name="ClassroomDetails"
      component={ClassroomDetailsScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default ClassroomsStack;

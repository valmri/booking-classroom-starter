import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import useAuth from "../hooks/useAuth";
import UserForm from "../components/user/UserForm";
import { useEffect } from "react";

const ProfilScreen = () => {
  const { signout } = useAuth();

  useEffect(() => {}, []);

  return (
    <View style={{ padding: 20 }}>
      <Text>Edit profil</Text>

      <UserForm />

      <Button mode="outlined" onPress={signout}>
        Signout
      </Button>
    </View>
  );
};

export default ProfilScreen;

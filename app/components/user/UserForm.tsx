import { useEffect, useState } from "react";
import { View } from "react-native";
import { Button, Snackbar, TextInput } from "react-native-paper";
import useAuth from "../../hooks/useAuth";
import UserService from "../../services/user.service";

const UserForm = () => {
  const { user } = useAuth();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [snackbar, setSnackbar] = useState({
    visible: false,
    message: "",
    isError: false,
  });

  useEffect(() => {
    if (user) {
      setCredentials((prev) => ({
        ...prev,
        email: user.email ?? "",
        name: user.name ?? "",
      }));
    }
  }, [user]);

  const handleChange = (key: string, value: string) => {
    setCredentials((prev) => ({ ...prev, [key]: value }));
  };

  const updateUser = async (credentials: any) => {
    try {
      await UserService.updateUserWithToken(user.id, user.token, {
        ...credentials,
      });

      setSnackbar({
        visible: true,
        message: "Profil mis à jour avec succès !",
        isError: false,
      });
    } catch (error) {
      console.error("Erreur de mise à jour :", error);
      setSnackbar({
        visible: true,
        message: "Erreur lors de la mise à jour du profil.",
        isError: true,
      });
    }
  };

  const handleSubmit = () => {
    updateUser(credentials);
  };

  return (
    <View style={{ padding: 20, gap: 10 }}>
      <TextInput
        label="Email"
        value={credentials.email}
        onChangeText={(value) => handleChange("email", value)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        label="Name"
        value={credentials.name}
        onChangeText={(value) => handleChange("name", value)}
      />
      <TextInput
        label="Password"
        value={credentials.password}
        onChangeText={(value) => handleChange("password", value)}
        secureTextEntry
      />
      <Button mode="contained" onPress={handleSubmit}>
        Submit
      </Button>

      <Snackbar
        visible={snackbar.visible}
        onDismiss={() => setSnackbar((prev) => ({ ...prev, visible: false }))}
        duration={3000}
        style={{ backgroundColor: snackbar.isError ? "#B00020" : "#4CAF50" }} // rouge si erreur, vert si succès
      >
        {snackbar.message}
      </Snackbar>
    </View>
  );
};

export default UserForm;

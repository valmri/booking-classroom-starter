import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import AuthContext from "../context/AuthContext";
import AuthService from "../services/auth.service";

const SigninScreen = () => {
  const { signin }: any = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = React.useState(null);
  const handleChange = (key: string, value: string) => {
    setCredentials({ ...credentials, [key]: value });
  };

  const handlesubmit = async () => {
    try {
      const data = await AuthService.signin(credentials);
      signin({
        token: data.token,
        id: data.user.id,
        email: data.user.email,
        name: data.user.name,
        role: data.user.role,
      });
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <View style={{ display: "flex", gap: 10, padding: 20 }}>
      <Text>Sign In Screen</Text>

      <TextInput
        label="Email"
        onChangeText={(email) => handleChange("email", email)}
        name="email"
        value={credentials.email}
      />
      <TextInput
        label="Mot de passe"
        onChangeText={(password) => handleChange("password", password)}
        name="password"
        value={credentials.password}
        secureTextEntry
      />

      <Button onPress={handlesubmit} mode="contained">
        Sign in
      </Button>
    </View>
  );
};

export default SigninScreen;

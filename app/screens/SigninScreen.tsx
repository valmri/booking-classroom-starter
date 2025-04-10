
import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import AuthContext from "../context/AuthContext";

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
      const response = await fetch("http://localhost:8000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      signin(data);
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
        Connexion
      </Button>
    </View>
  );
};

export default SigninScreen;

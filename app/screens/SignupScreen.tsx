import { useContext, useState } from "react";
import { View, Text } from "react-native";
import AuthContext from "../context/AuthContext";
import React from "react";

const SignupScreen = () => {
  const { signup }: any = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = React.useState(null);
  const handleChange = (key: string, value: string) => {
    setCredentials({ ...credentials, [key]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await signup(credentials);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Connexion</Text>
    </View>
  );
};

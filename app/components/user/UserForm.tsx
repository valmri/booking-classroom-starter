import { useState } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";

const UserForm = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (key: string, value: string) => {
    setCredentials({ ...credentials, [key]: value });
  };

  const handleSubmit = () => {
    console.log("credentials : ", credentials);
  };

  return (
    <View style={{ gap: 10 }}>
      <TextInput
        label="Email"
        value={credentials.email}
        onChangeText={(value) => handleChange("email", value)}
      />
      <TextInput
        label="Password"
        value={credentials.password}
        onChangeText={(value) => handleChange("password", value)}
      />
      <TextInput
        label="Name"
        value={credentials.name}
        onChangeText={(value) => handleChange("name", value)}
      />
      <Button mode="contained" onPress={handleSubmit}>
        Submit
      </Button>
    </View>
  );
};

export default UserForm;

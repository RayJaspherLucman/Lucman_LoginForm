import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
} from "react-native";
import React, { useState } from "react";
import Input from "../../components/Inputs/Input";
import Button from "../../components/Buttons/Button";
import Logo from "../../../images/SquirrelLogo.png";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const LogIn = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const { control, handleSubmit, watch } = useForm();

  const pass = watch("password");

  const onBackToLogin = () => {
    navigation.navigate("Login");
  };

  const onRegisterPressed = () => {
    navigation.navigate("Login");
  };

  const EMAIL_REGEX = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/;

  return (
    <View style={styles.container}>
      <Image
        style={[styles.logo, { height: height * 0.3 }]}
        source={Logo}
        resizeMode="contain"
      />
        <View>
      <Text style={styles.logoText}>AcornArbor</Text>
      </View>

      <Text style={styles.title}>Create an account</Text>

      <Input
        name="username"
        placeholder="Username"
        control={control}
        rules={{
          required: "Username is required",
          minLength: {
            value: 4,
            message: "Username should be at least 4 characters minimum",
          },
          maxLength: {
            value: 24,
            message: "Username should be only 24 characters long",
          },
        }}
      />

      <Input
        name="email"
        placeholder="Email"
        control={control}
        rules={{
          required: "Email is required",
          pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
        }}
      />
      <Input
        name="password"
        placeholder="Password"
        control={control}
        secureTextEntry
        rules={{
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password should be at least 8 characters long",
          },
        }}
      />
      <Input
        name="confirm-password"
        placeholder="Confirm Password"
        control={control}
        secureTextEntry
        rules={{
          validate: (value) => value === pass || "Password do not match",
        }}
      />

      <Button
        text="Register"
        type="PRIMARY"
        onPress={handleSubmit(onRegisterPressed)}
      />
      <Button
        text="Already have an account? Log in here."
        onPress={onBackToLogin}
        type="TERTIARY"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#E8D8C4",
    borderRadius: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: "400",
    color: "black",
  },

  logo: {
    width: "70%",
    maxWidth: 300,
    height: 100,
  },

  logo: {
    width: "70%",
    maxWidth: 200, // Adjust as needed
    height: 100,
  },
  logoText: {
    marginLeft: 10, 
    fontSize: 28, 
    fontWeight: "bold",
    color: "black",
  },
});

export default LogIn;

import {View,Text,StyleSheet,Image,useWindowDimensions,} from "react-native";
import React, { useState } from "react";
import Input from "../../components/Inputs/Input";
import Button from "../../components/Buttons/Button";
import Logo from "../../../images/SquirrelLogo.png";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const LogIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onLoginPress = (data) => {
    console.log(data);
    navigation.navigate("Home");
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("Forgot Password");
  };

  const onDontHaveAccountPressed = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Image
        style={[styles.logo, { height: height * 0.3 }]}
        source={Logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Log In</Text>

      <Input
        name="username"
        placeholder="Username"
        control={control}
        rules={{ required: "Username is required" }}
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

      <Button
        text="Log In"
        type="PRIMARY"
        onPress={handleSubmit(onLoginPress)}
      />
      <Button
        text="Forgot Password?"
        type="TERTIARY"
        onPress={onForgotPasswordPressed}
      />
      <Button
        text="Don't have an account? Resgister here."
        onPress={onDontHaveAccountPressed}
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
    fontWeight: "300",
    color: "black",
  },

  logo: {
    width: "70%",
    maxWidth: 300,
    height: 100,
  },
});

export default LogIn;

import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Input from "../../components/Inputs/Input";
import Button from "../../components/Buttons/Button";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const ResetConfirmation = () => {
  const { control, handleSubmit, watch } = useForm();

  const navigation = useNavigation();

  const pass = watch("new-pass");

  const code = 1234567890;

  const onResetPass = () => {
    navigation.navigate("Confirmation");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Code has been sent!</Text>
      <Text style={styles.text}>
        
      </Text>
      <Input
        name="Four digit code"
        placeholder="Four digit code"
        control={control}
        rules={{
          required: "4-digit code required",
          maxLength: { value: 4, message: "Code should 4 digit max" },
          pattern: {
            value: /^[0-9]*$/,
            message:
              "Please enter a valid 4-digit code",
          },
        }}
      />
      <Input
        name="new-pass"
        placeholder="New password"
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
        name="Confirm password"
        placeholder="Confirm password"
        control={control}
        secureTextEntry
        rules={{
          validate: (value) => value === pass || "Passwords do not match",
        }}
      />
      <Button
        text="Reset Password"
        type="PRIMARY"
        onPress={handleSubmit(onResetPass)}
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
    fontWeight:"bold",
  },
  text: {
    marginVertical: 10,
    color: "white",
    paddingBottom:20,
 
  },
});

export default ResetConfirmation;

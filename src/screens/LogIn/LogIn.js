// Import necessary libraries
import axios from "axios";
import { View, Text, StyleSheet, Image, useWindowDimensions } from "react-native";
import React from "react";
import Input from "../../components/Inputs/Input";
import Button from "../../components/Buttons/Button";
import Logo from "../../../images/SquirrelLogo.png";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const LogIn = () => {
  // React Hook Form setup
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Dimensions and navigation setup
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  // Function to handle login
  const onLoginPress = async (data) => {
    try {
      // Make a POST request to your Laravel API endpoint for login
      const response = await axios.post('http://localhost/api/login', {
        usernameOrEmail: data.username, // Assuming your Laravel backend accepts either username or email
        password: data.password,
      });
  
      console.log('Login Successful:', response.data);
  
      // Optionally, navigate to the home screen or another screen
      navigation.navigate("Home");
    } catch (error) {
      console.error('Login Error:', error.message);
    }
  };
  
  // Other functions for navigation
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
      <View>
      <Text style={styles.logoText}>AcornArbor</Text>
      </View>
      <Text style={styles.title}>Log In</Text>

      {/* Your input components */}
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

      {/* Your login button */}
      <Button
        text="Log In"
        type="PRIMARY"
        onPress={handleSubmit(onLoginPress)}
      />

      {/* Other buttons for navigation */}
      <Button
        text="Forgot Password?"
        type="TERTIARY"
        onPress={onForgotPasswordPressed}
      />
      <Button
        text="Don't have an account? Register here."
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

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  logoText: {
    marginLeft: 10, 
    fontSize: 28, 
    fontWeight: "bold",
    color: "black",
  },
});

export default LogIn;

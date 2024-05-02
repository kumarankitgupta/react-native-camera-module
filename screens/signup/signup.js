import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import useSignupHook from "./useSignupHook";

const SignUpForm = () => {
  const { signUpData, setSignUpData, handleSignUp } = useSignupHook();
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Text style={styles.title}>Register Now</Text>
      </View>
      <View style={styles.containerBottom}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={signUpData.email}
          onChangeText={(email) => {
            setSignUpData({ ...signUpData, email: email });
          }}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={signUpData.password}
          onChangeText={(password) => {
            setSignUpData({ ...signUpData, password: password });
          }}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={signUpData.confirmPassword}
          onChangeText={(confirmPassword) => {
            setSignUpData({ ...signUpData, confirmPassword: confirmPassword });
          }}
          secureTextEntry
        />
        <Pressable style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  containerTop: {
    width: "100%",
    height: "65%",
    backgroundColor: "#019881",
    justifyContent: "flex-end",
    paddingLeft: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 20,
  },
  containerBottom: {
    paddingHorizontal: 20,
    width: "100%",
    backgroundColor: "#f5f5f5",
    height: "40%",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: "white",
  },
  input: {
    width: "100%",
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2, // For Android
    marginBottom: 10,
    marginTop: 10,
  },
  button: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#019881",
    padding: 10,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "white",
  },
});

export default SignUpForm;

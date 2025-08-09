import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "./../../../../constants/Colors";
import { useRouter } from "expo-router";



export default function SignIn() {
  const navigation = useNavigation();
  const router=useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleSignIn = () => {
    // Simple validation example
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }
    // TODO: Add sign-in logic here (API call etc.)
    Alert.alert("Success", `Signed in as ${email}`);
  };

  const handleCreateAccount = () => {
    // Navigate to sign up screen or do something
    navigation.navigate("auth/sign-up"); // make sure you have this screen in your navigator
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's Sign You In</Text>

      <Text style={styles.subtitle}>Welcome Back</Text>

      <Text style={styles.subtitle}>You've been missed!</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
           placeholderTextColor={Colors.gray}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
           placeholderTextColor={Colors.gray}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>router.replace('auth/sign-up')}
      style={{
       
        marginTop: 20,
        padding: 15,
        borderRadius: 15,
        borderColor: Colors.primary,
        borderWidth: 2,
      }}>
        <Text style={styles.createAccountButtonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 20,
    height: "100%",
    backgroundColor: Colors.white,
  },
  title: {
    fontFamily: "Outfit-Bold",
    fontSize: 30,
  },
  subtitle: {
    fontFamily: "Outfit",
    color: Colors.gray,
    marginTop: 20,
    fontSize: 30,
  },
  inputGroup: {
    marginTop: 20,
  },
  label: {
    fontFamily: "Outfit",
    marginBottom: 5,
    fontSize: 16,
    color: Colors.primary,
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.gray,
    fontFamily: "Outfit",
    fontSize: 16,
  },
  signInButton: {
    marginTop: 35,
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 15,
  },
  signInButtonText: {
    color: Colors.white,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Outfit-Bold",
  },
  createAccountButton: {
  
  },
  createAccountButtonText: {
    color: Colors.primary,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Outfit-Bold",
  },
});

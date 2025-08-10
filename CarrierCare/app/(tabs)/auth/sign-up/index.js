import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Colors } from "./../../../../constants/Colors";
import { useRouter } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignUp() {
  const navigation = useNavigation();
  const router=useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleCreateAccount = () => {
    if (!username || !email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    Alert.alert("Success", `Account created for ${username}`);
    // TODO: Add your API call for sign-up here
  };

  const handleSignIn = () => {
    navigation.navigate("SignIn"); // Make sure "SignIn" route exists
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={()=>router.back()}>
            <Ionicons name="arrow-back-outline" size={24} color="black" />

            </TouchableOpacity>

      <Text style={styles.title}>Create New Account</Text>

      {/* Username */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          placeholderTextColor={Colors.gray}
          value={username}
          onChangeText={setUsername}
        />
      </View>

      {/* Email */}
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

      {/* Password */}
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

      {/* Create Account Button */}
      <TouchableOpacity
        style={styles.createAccountButton}
        onPress={handleCreateAccount}
      >
        <Text style={styles.createAccountButtonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity 
            onPress={()=>router.replace('auth/sign-in')}
            style={{
             
              marginTop: 20,
              padding: 15,
              borderRadius: 15,
              borderColor: Colors.primary,
              borderWidth: 2,
            }}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 20,
    backgroundColor: Colors.white,
    height: "100%",
  },
  title: {
    fontFamily: "Outfit-Bold",
    fontSize: 30,
    marginTop:10,
    color: Colors.primary,
  },
  inputGroup: {
    marginTop: 25,
  },
  label: {
    fontFamily:"Outfit-Bold",
    marginBottom: 8,
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
  createAccountButton: {
    marginTop: 40,
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 15,
  },
  createAccountButtonText: {
    color: Colors.white,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Outfit-Bold",
  },
  signInButton: {
    marginTop: 20,
    padding: 15,
    borderRadius: 15,
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  signInButtonText: {
    color: Colors.primary,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Outfit-Bold",
  },
});

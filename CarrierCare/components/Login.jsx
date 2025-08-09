import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "./../constants/Colors";
import { useRouter } from "expo-router";


export default function Login() {
    const route=useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      {/* Top Image */}
      <Image
        source={require("./../assets/images/login.jpg")}
        style={styles.image}
        resizeMode="cover"
      />

      {/* Bottom Content */}
      <View style={styles.container}>
        <Text style={styles.title}>AI Career Planner</Text>

        <Text style={styles.description}>
          Plan your career path with confidence using AI-powered recommendations. 
          Efficient and accurate career planning at your fingertips.
        </Text>

        <TouchableOpacity style={styles.button}
          onPress={()=>route.push('auth/sign-in')}
          >
          <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>

        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginTop: -50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    flex: 1,
  },
  image: {
    width: "100%",
    height: 400,
  },
  title: {
    fontSize: 30,
    fontFamily: "OutfitBold",
    textAlign: "center",
    marginTop: 5,
  },
  description: {
    fontFamily: "Outfit",
    fontSize: 17,
    textAlign: "center",
    color: Colors.gray,
    marginTop: 10,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.primary,
    borderRadius: 99,
    marginTop: 28,
  },
  buttonText: {
    fontFamily: "Outfit",
    fontSize: 25,
    textAlign: "center",
    color: Colors.white,
  },
});

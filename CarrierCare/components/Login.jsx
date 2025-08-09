import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./../assets/images/login.jpg')} 
        style={styles.image}
        resizeMode="cover"
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 500,
    height: 500,
  },
});

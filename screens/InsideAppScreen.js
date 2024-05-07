import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InsideAppScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>You are inside the app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 24,
    color: 'white',
  },
});

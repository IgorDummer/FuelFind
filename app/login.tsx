import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function LoginForm(){
    <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Email"
    />
    <TextInput
      style={styles.input}
      placeholder="Password"

    />
    <Button title="Login" />
  </View>
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f12aff',
  color: '#b31d0f',
},
input: {
  width: '80%',
  marginBottom: 15,
  borderWidth: 1,
  padding: 10,
  color: '#ffffff'
},
});

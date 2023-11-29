import React, { useState } from 'react';
import { TouchableOpacity, Image, TextInput, Button, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.container_title}>
        <Image
          source={require ('../assets/images/white_local_gas_station.png')}
          //resizeMode="contain"  
        ></Image>
        <Text>
          FuelFind
        </Text>
      </View>
     
      <View style={styles.container_login}>
        <TextInput style={styles.input}
          placeholder='Usuário ou e-mail'
        />
        <TextInput style={styles.input}
          placeholder='Senha'
        />
        <Button 
          title = 'Entrar'      
          color={'#122209'} 
          //onPress={handleLogin}
        />

        <TouchableOpacity>
          <Text style={styles.text}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.text}>Criar conta</Text>
        </TouchableOpacity>

        <View lightColor="#1B4203" darkColor="#1B4203" />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#1B4203",
  },
  container_title: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#1B4203",
  },
  container_login: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#1B4203",
  },
  input: {
    width: '150%',
    marginBottom: 15,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    padding: 5,
    color: 'white',
    borderBottomWidth: 1.5, // Adiciona uma linha embaixo do TextInput
    borderBottomColor: 'white', // Cor da linha
  },
  text: {
    marginTop: 20
  }
});
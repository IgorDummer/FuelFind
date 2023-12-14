import React, { useState } from 'react';
import { TouchableOpacity, Image, TextInput, Button, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

// Definindo o tipo para os dados do usuário
type UserData = {
  usuario: string;
  email: string;
  senha: string;
};

const Register = () => {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Definindo o estado inicial como um array vazio do tipo UserData
  const [dadosUsuarios, setDadosUsuarios] = useState<UserData[]>([]);

    const registerUser = () => {
      const novoUsuario = {
      usuario: usuario,
      email: email,
      senha: senha,
    };
    setDadosUsuarios([...dadosUsuarios, novoUsuario]); // Adicionamos novo usuário no vetor de usuários existente
    // Aqui limpamos os campos após o cadastro
    setUsuario('');
    setSenha('');
  };

  return (
    <View style={styles.container}>

      <View style={styles.container_title}>
        <Image
          source={require ('../assets/images/white_local_gas_station.png')}
        ></Image>
        <Text>
          FuelFind
        </Text>
      </View>
     
      <View style={styles.container_login}>
        <Text style={styles.title_text}>
          CADASTRE-SE
        </Text>
        <TextInput style={styles.input}
          placeholder='Nome'
          value={usuario}
          onChangeText={(text) => setUsuario(text)} // Pegamos o nome que o usuario quer cadastrar
        />
        <TextInput style={styles.input}
          placeholder='Usuário'
        />
        <TextInput style={styles.input}
          placeholder='E-mail'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput style={styles.input}
          placeholder='Senha'
          value={senha}
          onChangeText={(text) => setSenha(text)}
          secureTextEntry={true}
        />
        <View style={{ marginTop: 15 }}>
          <Button 
            title = 'CRIAR CONTA'      
            color={'#122209'}
            onPress={registerUser} // Ao clicar no botão criar conta, salvamos os dados dos usuário
          
          />
        </View>
        <View lightColor="#1B4203" darkColor="#1B4203" />
      </View>
      
    </View>
  );
};
export default Register;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#1B4203",
  },
  container_title: {
    flexDirection: 'row',
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#1B4203",
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20
  },
  container_login: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#1B4203",
  },
  input: {
    width: '150%',
    marginBottom: 8,
    marginTop: 8,
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
    marginTop: 15
  }
});
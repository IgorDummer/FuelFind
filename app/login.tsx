import React, { useState } from 'react';
import { TouchableOpacity, Image, TextInput, Button, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

type UserData = {
  email: string;
  senha: string;
};

const Login = ({ navigation }: any): JSX.Element =>{
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [dadosUsuarios, setDadosUsuarios] = useState<UserData[]>([]);

  const realizarLogin = () => {
    const usuarioEncontrado = dadosUsuarios.find(
      (user) => user.email === email && user.senha === senha
    );
    if (usuarioEncontrado) {
      // Usuário autenticado, pode prosseguir para a próxima tela ou fazer alguma ação
      // Por exemplo, pode navegar para outra tela após o login ser bem-sucedido
      navigation.navigate('index');
    } else {
      console.log('Credenciais inválidas');
    }
    // Limpando os campos após o login
    setEmail('');
    setSenha('');
  };

  return Login(
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
        <Text style={styles.title_text}>
          ENTRAR
        </Text>
        <TextInput style={styles.input}
          placeholder='E-mail'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput style={styles.input}
          placeholder='Senha'
          onChangeText={(text) => setSenha(text)}
          secureTextEntry={true}
        />
        <View style={{ marginTop: 15 }}>
          <Button 
            title = 'Entrar'      
            color={'#122209'}
            onPress={realizarLogin}
          />
        </View>


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
    marginTop: 15,
    textDecorationLine: 'underline'
  }
});
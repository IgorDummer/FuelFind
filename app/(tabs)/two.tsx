import { TouchableOpacity, Button, Image, StyleSheet, ScrollView, FlatList } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { TextInput } from 'react-native-gesture-handler';
import CarroCard from '../../components/CarroCard';
import { useState } from 'react';

const carrosMock = [
  {
    id: 1,
    name: 'celta',
    combustivel: 'Gasolina Comum',
    consumo: 7,
  },
  {
    id: 2,
    name: 'corolla',
    combustivel: 'Gasolina Aditivada',
    consumo: 8,
  },
  {
    id: 3,
    name: 'hilux',
    combustivel: 'Diesel S500',
    consumo: 7,
  }
]


export default function TabTwoScreen() {

  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const [carros, setCarros] = useState(carrosMock);

  const handleEdit = (carroId: number) => {
    // Implemente a lógica de edição aqui
    console.log('Editar carro com ID:', carroId);
  };

  const handleDelete = (carroId: number) => {
    const updatedCarros = carros.filter(carro => carro.id !== carroId);
    
    // Atualizar o estado com a nova lista de carros
    setCarros(updatedCarros);
  };
  const renderCarroCards = () => {
      return (
        <FlatList
          data={carros}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => 
          <CarroCard carro={item} onEdit={() => handleEdit(item.id)} onDelete={() => handleDelete(item.id)} />}
        />
      );
    };

  return (
    <>

      {/* SEÇÃO MEU PERFIL */}

      <View style={styles.container}>

        <View style={styles.container_title}>
          <Image
            source={require ('../../assets/images/green_gas_station.svg')} 
          ></Image>
          <Text style={styles.title}>
            FuelFind
          </Text>
        </View>
  
        <Text style={styles.title}>MEU PERFIL</Text>
  
        <View style={styles.large_inputs_view}>
          <TextInput style={styles.large_input}
            placeholder='João das Neves'
          />
          <TextInput style={styles.large_input}
            placeholder='joaoneves@email.com'
          />
        </View>
  
        <View style={styles.small_inputs_view}>
          <TextInput style={styles.small_input}
            placeholder='Usuário'
          />
          <TextInput style={styles.small_input}
            placeholder='Raio de busca'
          />
        </View>
  
        <View style={styles.small_inputs_view}>
          <TextInput style={styles.small_input}
            placeholder='Senha atual'
          />
          <TextInput style={styles.small_input}
            placeholder='Senha nova'
          />
        </View>
  
        <View style={{ marginTop: 15, marginBottom: 15 }}>
          <Button 
            title = 'ALTERAR'      
            color={'#122209'}
            //onPress={}
          />
        </View>
  
      </View>

      {/* SEÇÃO MEUS CARROS */}

      <View style={styles.container}>
        <Text style={styles.title}>MEUS CARROS</Text>
        
        <ScrollView style={styles.maxWidth}>
          {renderCarroCards()}
        </ScrollView>

        <View style={{ marginTop: 15, marginBottom: 15 }}>
          <Button 
            title = 'ADICIONAR CARRO'      
            color={'#122209'}
            //onPress={}
          />
        </View>


      </View>

      

    </>

  );
}

const styles = StyleSheet.create({
  maxWidth: {
    alignSelf: 'center',
    width: '90%',
  },
  container: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  container_title: {
    flexDirection: 'row',
    //flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingVertical: 15
  },
  large_inputs_view: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  large_input: {
    width: '200%',
    marginBottom: 8,
    marginTop: 8,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    padding: 5,
    borderBottomWidth: 1.5,
    borderBottomColor: 'black'
  },
  small_inputs_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  small_input: {
    width: '45%',
    marginBottom: 8,
    marginTop: 8,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    padding: 5,
    borderBottomWidth: 1.5,
    borderBottomColor: 'black'
  }
});
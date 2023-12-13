import { TouchableOpacity, Button, Image, StyleSheet, ScrollView, FlatList } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { TextInput } from 'react-native-gesture-handler';
import CarroCard from '../../components/CarroCard';
import { useState } from 'react';
import CarFormModal from '../../components/CarroModal';
import Carro from '../../interfaces/Carro';

const carrosMock = [
  {
    id: 1,
    name: 'CELTA',
    combustivel: 'GNV',
    consumo: 10,
  }
]


export default function TabTwoScreen() {

  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [carros, setCarros] = useState(carrosMock);
  const [newCar, setNewCar] = useState<Carro>({
    id: 0,
    name: '',
    combustivel: '',
    consumo: 0,
  });
  const [editedCar, setEditedCar] = useState<Carro | null>(null);

  const openModal = () => {
    setModalVisible(true);
    // Se editedCar não for nulo, preencha os dados no formulário
    if (editedCar) {
      setNewCar(editedCar);
    }
  };
  const closeModal = () => {
    setModalVisible(false);
    setNewCar({
      id: 0,
      name: '',
      combustivel: '',
      consumo: 0,
    });
    setEditedCar(null);
  };

  const handleAddCar = () => {
    if (newCar.name && newCar.combustivel && newCar.consumo > 0) {
      const updatedCarros = [...carros];
      
      if (editedCar) {
        // Editando um carro existente
        const index = updatedCarros.findIndex((carro) => carro.id === editedCar.id);
        if (index !== -1) {
          updatedCarros[index] = { ...newCar, id: editedCar.id };
        }
      } else {
        // Adicionando um novo carro
        const newCarWithId = { ...newCar, id: generateUniqueId() };
        updatedCarros.push(newCarWithId);
      }
      
      setCarros(updatedCarros);
      closeModal();
    } else {
      // Mostrar uma mensagem de erro ou realizar outra ação de validação
      console.warn('Preencha todos os campos antes de adicionar o carro.');
    }
  };

  // Função para gerar IDs únicos
  const generateUniqueId = () => {
    return new Date().getTime(); // Usando timestamp como ID (pode não ser totalmente seguro, mas é simples)
  };

  const handleEdit = (carroId: number) => {
    console.log('Editar carro com ID:', carroId);
    // Encontrar o carro com o ID correspondente
    const carToEdit = carros.find((carro) => carro.id === carroId);
    if (carToEdit) {
      console.log(carToEdit)
      // Configurar editedCar para ser usado ao abrir o modal de edição
      setEditedCar(carToEdit);
      setNewCar(carToEdit); // Preencher os dados do carro no formulário
      openModal();
    }
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
            placeholder='joão3216'
          />
          <TextInput style={styles.small_input}
            placeholder='Raio de busca: 5 Km'
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
            onPress={openModal}
          />
        </View>
        {isModalVisible && (
          <View style={styles.modalBackground}>
                <CarFormModal
                isVisible={isModalVisible}
                onClose={closeModal}
                carName={newCar.name}
                setCarName={(text) => setNewCar({ ...newCar, name: text })}
                fuelType={newCar.combustivel}
                setFuelType={(value) => setNewCar({ ...newCar, combustivel: value })}
                fuelConsumption={newCar.consumo.toString()}
                setFuelConsumption={(text) => setNewCar({ ...newCar, consumo: parseFloat(text) })}
                onSave={handleAddCar}
              />
          </View>
        )}


      </View>

      

    </>

  );
}

const styles = StyleSheet.create({
  maxWidth: {
    flex: 1,
    alignSelf: 'center',
    width: '90%',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // 0.3 controla a opacidade
    justifyContent: 'center',
    alignItems: 'center',
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
    //width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  large_input: {
    //fontSize: 16,
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
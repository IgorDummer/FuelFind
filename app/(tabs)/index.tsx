import React, { useState } from 'react';
import { StyleSheet, Image, TouchableWithoutFeedback, ScrollView, Pressable } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Text, View } from '../../components/Themed';
import { FlatList } from 'react-native-gesture-handler';

import PostoCard from '../../components/PostoCard';
import FuelFilterModal from '../../components/FuelFilterModal';

import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';

//Exemplo de json a ser recebido pelo backend

//Esse get aqui vai pra pagina inicial, onde temos dados de varios postos
const postos = [
  {
    id: 1,
    name: 'AUTO POSTO PROGRESSO LTDA',
    localizacaoX: 0,
    localizacaoY: 0,
    endereco: {
      id: 1,
      cep: '29153-100',
      estado: 'Espírito Santo',
      cidade: 'Cariacica',
      bairro: 'Porto de Santana',
      rua: 'Rua principal',
      numero: 747,
    },
    combustiveis: [
      {
        id: 1,
        tipo: 'Gasolina Comum',
        preco: 5.58,
      },
      {
        id: 2,
        tipo: 'Gasolina Aditivada',
        preco: 5.75,
      },
      {
        id: 6,
        tipo: 'Etanol',
        preco: 4.09,
      },
    ],
    upVotes: 16,
    downVotes: 5,
    comentarios: [
      {
        id: 1,
        texto: 'Carambolas',
        usuario: {
          id: 1,
          nome: 'marquinhos',
        },
        data: '10/11/2023',
      },
      {
        id: 2,
        texto: 'Eita lasqueira',
        usuario: {
          id: 2,
          nome: 'enzo',
        },
        data: '10/11/2023',
      },
    ],
  },
  {
    id: 2,
    name: 'RM 262 COMERCIO DE COMBUSTIVEIS LTDA',
    localizacaoX: 0,
    localizacaoY: 0,
    endereco: {
      id: 2,
      cep: '29146-012',
      estado: 'Espírito Santo',
      cidade: 'Cariacica',
      bairro: 'Campo Grande',
      rua: 'Avenida Maria Gurgel',
      numero: 3127,
    },
    combustiveis: [
      {
        id: 1,
        tipo: 'Gasolina Comum',
        preco: 5.55,
      },
      {
        id: 2,
        tipo: 'Gasolina Aditivada',
        preco: 5.65,
      },
      {
        id: 4,
        tipo: 'Diesel S500',
        preco: 6.09,
      },
    ],
    upVotes: 10,
    downVotes: 3,
    comentarios: [
      {
        id: 1,
        texto: 'To certo',
        usuario: {
          id: 1,
          nome: 'naruto uzumaki',
        },
        data: '10/11/2023',
      },
      {
        id: 2,
        texto: 'Dracarys',
        usuario: {
          id: 2,
          nome: 'Daenerys Targaryen',
        },
        data: '10/11/2023',
      },
      {
        id: 3,
        texto: 'Estou pronto',
        usuario: {
          id: 2,
          nome: 'Bob Esponja',
        },
        data: '10/11/2023',
      },
    ],
  },
  {
    id: 3,
    name: 'POSTO MINEIRO',
    localizacaoX: 0,
    localizacaoY: 0,
    endereco: {
      id: 3,
      cep: '29154-200',
      estado: 'Espírito Santo',
      cidade: 'Cariacica',
      bairro: 'Santana',
      rua: 'Rodovia Governador Jose Henrique Sette',
      numero: 6174,
    },
    combustiveis: [
      {
        id: 1,
        tipo: 'Gasolina Comum',
        preco: 5.55,
      },
      {
        id: 2,
        tipo: 'Gasolina Aditivada',
        preco: 5.57,
      },
      {
        id: 3,
        tipo: 'Diesel S10',
        preco: 6.04,
      },
    ],
    upVotes: 20,
    downVotes: 10,
    comentarios: [
      {
        id: 1,
        texto: 'Atendimento excepcional, o café da conveniência é delicioso',
        usuario: {
          id: 1,
          nome: 'jubilantly',
        },
        data: '10/11/2023',
      },
    ],
  },
  {
    id: 4,
    name: 'POSTO PALACIO',
    localizacaoX: 0,
    localizacaoY: 0,
    endereco: {
      id: 3,
      cep: '29140-580',
      estado: 'Espírito Santo',
      cidade: 'Cariacica',
      bairro: 'Vasco Da Gama',
      rua: 'Rua Eurico Gaspar Dutra',
      numero: 0,
    },
    combustiveis: [
      {
        id: 1,
        tipo: 'Gasolina Comum',
        preco: 5.39,
      },
      {
        id: 2,
        tipo: 'Gasolina Aditivada',
        preco: 5.39,
      },
    ],
    upVotes: 16,
    downVotes: 5,
    comentarios: [
      {
        id: 1,
        texto: 'Atendimento excepcional, o café da conveniência é delicioso',
        usuario: {
          id: 1,
          nome: 'jubilantly',
        },
        data: '10/11/2023',
      },
    ],
  },
  {
    id: 5,
    name: 'AUTO SERVICO SAO CRISTOVAO LTDA',
    localizacaoX: 0,
    localizacaoY: 0,
    endereco: {
      id: 2,
      cep: '29147-345',
      estado: 'Espírito Santo',
      cidade: 'Cariacica',
      bairro: 'Dom Bosco',
      rua: 'Avenida Mario Gurgel',
      numero: 4,
    },
    combustiveis: [
      {
        id: 1,
        tipo: 'Gasolina Comum',
        preco: 5.58,
      },
      {
        id: 2,
        tipo: 'Gasolina Aditivada',
        preco: 5.62,
      },
    ],
    upVotes: 10,
    downVotes: 3,
    comentarios: [
      {
        id: 1,
        texto: 'Atendimento excepcional, o café da conveniência é delicioso',
        usuario: {
          id: 1,
          nome: 'jubilantly',
        },
        data: '10/11/2023',
      },
    ],
  },
  {
    id: 6,
    name: 'Posto Jardim America do Gas ltda',
    localizacaoX: 0,
    localizacaoY: 0,
    endereco: {
      id: 3,
      cep: '29140-080',
      estado: 'Espirito Santo',
      cidade: 'Cariacica',
      bairro: 'Jardim America',
      rua: 'Avenidade Espirito Santo',
      numero: 87,
    },
    combustiveis: [
      {
        id: 1,
        tipo: 'Gasolina Comum',
        preco: 5.55,
      },
      {
        id: 2,
        tipo: 'Gasolina Aditivada',
        preco: 5.70,
      },
      {
        id: 3,
        tipo: 'Diesel S10',
        preco: 5.99,
      },
    ],
    upVotes: 20,
    downVotes: 10,
    comentarios: [
      {
        id: 1,
        texto: 'Atendimento excepcional, o café da conveniência é delicioso',
        usuario: {
          id: 1,
          nome: 'jubilantly',
        },
        data: '10/11/2023',
      },
    ]
  },
]

export default function TabOneScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<string[]>([]);
  const [tempSelectedFuelTypes, setTempSelectedFuelTypes] = useState<string[]>([]);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const router = useRouter();

  const handleCheckboxToggle = (fuelType: string) => {
    const updatedSelections = tempSelectedFuelTypes.includes(fuelType)
      ? tempSelectedFuelTypes.filter((type) => type !== fuelType)
      : [...tempSelectedFuelTypes, fuelType];

    setTempSelectedFuelTypes(updatedSelections);
  };

  const handleFilter = () => {
    console.log('Tipos de combustíveis selecionados:', tempSelectedFuelTypes);
    setSelectedFuelTypes(tempSelectedFuelTypes);
    closeModal();
  };
  // Função para renderizar os cards dos postos
  const renderPostoCards = () => {
    if (selectedFuelTypes.length === 0) {
      return (
        <FlatList
          data={postos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PostoCard posto={item}
              onClick={() => router.push({ pathname: `/postoPage/`, params: { id: item.id } })}
            />
          )}
        />
      );
    }

    const filteredPostos = postos.filter(posto =>
      posto.combustiveis.some(combustivel => selectedFuelTypes.includes(combustivel.tipo))
    );

    return (
      <FlatList
        data={filteredPostos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PostoCard posto={item} onClick={() => router.push({ pathname: `/postoPage/`, params: { id: item.id } })}
        />}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_title}>
        <Image source={require('../../assets/images/green_gas_station.svg')} />
        <Text style={styles.title}>FuelFind</Text>
      </View>
      <Text style={styles.title}>POSTOS PRÓXIMOS</Text>

      <TouchableWithoutFeedback onPress={openModal}>
        <View style={styles.searchBar}>
          <IconButton
            icon='magnify'
            onPress={openModal}
            style={styles.iconButton}
          />
          <Text style={styles.searchText}>Pesquisa por tipo de combustível</Text>
        </View>
      </TouchableWithoutFeedback>

      <ScrollView style={styles.maxWidth}>
        {renderPostoCards()}
      </ScrollView>

      <FuelFilterModal
        modalVisible={modalVisible}
        closeModal={closeModal}
        handleCheckboxToggle={handleCheckboxToggle}
        handleFilter={handleFilter}
        tempSelectedFuelTypes={tempSelectedFuelTypes}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  maxWidth: {
    alignSelf: 'center',
    width: '90%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  container_title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingVertical: 15,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '90%',
    borderRadius: 15,
  },
  searchText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    maxHeight: '60%',
  },
  modalHeaderText: {
    fontSize: 16,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
  iconButton: {
    backgroundColor: 'transparent',
    width: 20,
    height: 20,
    borderRadius: 50,
    marginRight: 10,
  },
  postoCard: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#F5F5F4',
  },
  postoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    backgroundColor: 'none',
  },
  voteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'none',
  },
  voteText: {
    marginHorizontal: 4,
    backgroundColor: 'none',
    fontWeight: 'bold',
  },
  combustivelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    backgroundColor: 'none',
  },
  addressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'none',
  },
  postoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'none',
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 20,
    width: 100,
  },
  buttonFilter: {
    backgroundColor: '#84CC16',
    borderRadius: 8,
  }
});

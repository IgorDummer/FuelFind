import React, { useState } from 'react';
import { StyleSheet, Image, Modal, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Searchbar, Checkbox, Button, IconButton } from 'react-native-paper';
import { Text, View } from '../../components/Themed';
import enumFuelTypes from '../../utils/enumFuelTypes';
import { Svg, Path } from 'react-native-svg';
import { FlatList } from 'react-native-gesture-handler';

//Exemplo de json a ser recebido pelo backend

//Esse get aqui vai pra pagina inicial, onde temos dados de varios postos
const postos = [
  {
    id: 1,
    name: 'Posto Ipiranga',
    localizacaoX: 0,
    localizacaoY: 0,
    endereco: {
      id: 1,
      cep: '00000-000',
      estado: 'Estado dos Bobos',
      cidade: 'Cidade dos Bobos',
      bairro: 'Bairro dos Bobos',
      rua: 'Rua dos Bobos',
      numero: 0,
    },
    combustiveis: [
      {
        id: 1,
        tipo: 'Gasolina Comum',
        preco: 5.00,
      },
      {
        id: 2,
        tipo: 'Gasolina Aditivada',
        preco: 5.50,
      },
      {
        id: 3,
        tipo: 'Diesel S10',
        preco: 4.00,
      },
      {
        id: 4,
        tipo: 'Diesel S500',
        preco: 3.50,
      },
      {
        id: 6,
        tipo: 'Etanol',
        preco: 3.00,
      },
    ],
    upVotes: 16,
    downVotes: 5,
  },
  {
    id: 2,
    name: 'Posto Shell',
    localizacaoX: 0,
    localizacaoY: 0,
    endereco: {
      id: 2,
      cep: '00000-000',
      estado: 'Espírito Santo',
      cidade: 'Cariacica',
      bairro: 'Campo Grande',
      rua: 'Av. Expedito Garcia',
      numero: 304,
    },
    combustiveis: [
      {
        id: 1,
        tipo: 'Gasolina Comum',
        preco: 5.24,
      },
      {
        id: 2,
        tipo: 'Gasolina Aditivada',
        preco: 5.94,
      },
      {
        id: 4,
        tipo: 'Diesel S500',
        preco: 3.50,
      },
      {
        id: 5,
        tipo: 'GNV',
        preco: 3.00,
      },
      {
        id: 6,
        tipo: 'Etanol',
        preco: 3.00,
      },
    ],
    upVotes: 10,
    downVotes: 3,
  },
  {
    id: 3,
    name: 'Posto Petrobras',
    localizacaoX: 0,
    localizacaoY: 0,
    endereco: {
      id: 3,
      cep: '00000-000',
      estado: 'Estado dos Bobos',
      cidade: 'Cidade dos Bobos',
      bairro: 'Bairro dos Bobos',
      rua: 'Rua dos Bobos',
      numero: 0,
    },
    combustiveis: [
      {
        id: 1,
        tipo: 'Gasolina Comum',
        preco: 5.20,
      },
      {
        id: 2,
        tipo: 'Gasolina Aditivada',
        preco: 5.63,
      },
      {
        id: 3,
        tipo: 'Diesel S10',
        preco: 4.00,
      },
      {
        id: 5,
        tipo: 'GNV',
        preco: 3.00,
      },
      {
        id: 6,
        tipo: 'Etanol',
        preco: 3.00,
      },
    ],
    upVotes: 20,
    downVotes: 10,
  },
  {
    id: 4,
    name: 'Posto Ipiranga',
    localizacaoX: 0,
    localizacaoY: 0,
    endereco: {
      id: 1,
      cep: '00000-000',
      estado: 'Estado dos Bobos',
      cidade: 'Cidade dos Bobos',
      bairro: 'Bairro dos Bobos',
      rua: 'Rua dos Bobos',
      numero: 0,
    },
    combustiveis: [
      {
        id: 1,
        tipo: 'Gasolina Comum',
        preco: 5.00,
      },
      {
        id: 2,
        tipo: 'Gasolina Aditivada',
        preco: 5.50,
      },
      {
        id: 3,
        tipo: 'Diesel S10',
        preco: 4.00,
      },
      {
        id: 4,
        tipo: 'Diesel S500',
        preco: 3.50,
      },
      {
        id: 5,
        tipo: 'GNV',
        preco: 3.00,
      },
    ],
    upVotes: 16,
    downVotes: 5,
  },
  {
    id: 5,
    name: 'Posto Shell',
    localizacaoX: 0,
    localizacaoY: 0,
    endereco: {
      id: 2,
      cep: '00000-000',
      estado: 'Espírito Santo',
      cidade: 'Cariacica',
      bairro: 'Campo Grande',
      rua: 'Av. Expedito Garcia',
      numero: 304,
    },
    combustiveis: [
      {
        id: 1,
        tipo: 'Gasolina Comum',
        preco: 5.24,
      },
      {
        id: 2,
        tipo: 'Gasolina Aditivada',
        preco: 5.94,
      },
      {
        id: 3,
        tipo: 'Diesel S10',
        preco: 4.00,
      },
      {
        id: 4,
        tipo: 'Diesel S500',
        preco: 3.50,
      },
      {
        id: 5,
        tipo: 'GNV',
        preco: 3.00,
      },
      {
        id: 6,
        tipo: 'Etanol',
        preco: 3.00,
      },
    ],
    upVotes: 10,
    downVotes: 3,
  },
  {
    id: 6,
    name: 'Posto Petrobras',
    localizacaoX: 0,
    localizacaoY: 0,
    endereco: {
      id: 3,
      cep: '00000-000',
      estado: 'Estado dos Bobos',
      cidade: 'Cidade dos Bobos',
      bairro: 'Bairro dos Bobos',
      rua: 'Rua dos Bobos',
      numero: 0,
    },
    combustiveis: [
      {
        id: 1,
        tipo: 'Gasolina Comum',
        preco: 5.20,
      },
      {
        id: 2,
        tipo: 'Gasolina Aditivada',
        preco: 5.63,
      },
      {
        id: 3,
        tipo: 'Diesel S10',
        preco: 4.00,
      },
      {
        id: 4,
        tipo: 'Diesel S500',
        preco: 3.50,
      },
      {
        id: 5,
        tipo: 'GNV',
        preco: 3.00,
      },
      {
        id: 6,
        tipo: 'Etanol',
        preco: 3.00,
      },
    ],
    upVotes: 20,
    downVotes: 10,
  },
]

const PostoCard = ({ posto }) => {
  return (
    <View style={styles.postoCard}>
      <View style={styles.postoHeader}>
        <Text style={styles.postoTitle}>{posto.name.toUpperCase()}</Text>
        <View style={styles.voteContainer}>
          <Image
            style={{ tintColor: '#84CC16', width: 20, height: 20 }}
            source={require('../../assets/images/arrow_up.svg')}
          />
          <Text style={[styles.voteText, { color: '#84CC16', fontWeight: 'bold' }]}>{posto.upVotes}</Text>
          <Image
            style={{ tintColor: '#B91C1C', width: 20, height: 20 }}
            source={require('../../assets/images/arrow_down.svg')}
          />
          <Text style={[styles.voteText, { color: '#B91C1C' }]}>{posto.downVotes}</Text>
        </View>
      </View>
      <View style={styles.combustivelRow}>
        <Text>{posto.combustiveis[0].tipo.toUpperCase()}</Text>
        <Text>{`R$ ${posto.combustiveis[0].preco.toFixed(2)}`}</Text>
      </View>
      <View style={styles.combustivelRow}>
        <Text>{posto.combustiveis[1].tipo.toUpperCase()}</Text>
        <Text>{`R$ ${posto.combustiveis[1].preco.toFixed(2)}`}</Text>
      </View>
      <View style={styles.addressRow}>
        <Text>{`${posto.endereco.rua}, ${posto.endereco.numero}, ${posto.endereco.bairro}, ${posto.endereco.cidade}`}</Text>
      </View>
    </View>
  );
};

export default function TabOneScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<string[]>([]);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const handleCheckboxToggle = (fuelType: string) => {
    if (selectedFuelTypes.includes(fuelType)) {
      setSelectedFuelTypes(selectedFuelTypes.filter((type) => type !== fuelType));
    } else {
      setSelectedFuelTypes([...selectedFuelTypes, fuelType]);
    }
  };

  const handleFilter = () => {
    console.log('Tipos de combustíveis selecionados:', selectedFuelTypes);
    closeModal();
  };

  // Função para renderizar os cards dos postos
  const renderPostoCards = () => {
    return (
      <FlatList
        data={postos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PostoCard posto={item} />}
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeaderText}>Selecione ao menos um tipo de combustível para pesquisar</Text>

            {Object.values(enumFuelTypes).map((fuelType) => (
              <View key={fuelType} style={styles.checkboxContainer}>
                <Checkbox
                  status={selectedFuelTypes.includes(fuelType) ? 'checked' : 'unchecked'}
                  onPress={() => handleCheckboxToggle(fuelType)}
                />
                <Text style={styles.checkboxLabel}>{fuelType}</Text>
              </View>
            ))}

            <Button mode="contained" onPress={handleFilter}>
              Filtrar
            </Button>
          </View>
        </View>
      </Modal>
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
  }
});

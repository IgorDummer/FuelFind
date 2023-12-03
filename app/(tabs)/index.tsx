import React, { useState } from 'react';
import { StyleSheet, Image, Modal, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Searchbar, Checkbox, Button, IconButton } from 'react-native-paper';
import { Text, View } from '../../components/Themed';
import enumFuelTypes from '../../utils/enumFuelTypes';

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
  container: {
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
  }
});

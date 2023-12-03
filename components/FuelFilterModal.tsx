import React from 'react';
import { StyleSheet, Modal, View, Text } from 'react-native';
import { Checkbox, Button } from 'react-native-paper';
import enumFuelTypes from '../utils/enumFuelTypes';

interface FuelFilterModalProps {
  modalVisible: boolean;
  closeModal: () => void;
  handleCheckboxToggle: (fuelType: string) => void;
  handleFilter: () => void;
  tempSelectedFuelTypes: string[];
}

const FuelFilterModal: React.FC<FuelFilterModalProps> = ({
  modalVisible,
  closeModal,
  handleCheckboxToggle,
  handleFilter,
  tempSelectedFuelTypes,
}) => {
  return (
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
                status={tempSelectedFuelTypes.includes(fuelType) ? 'checked' : 'unchecked'}
                onPress={() => handleCheckboxToggle(fuelType)}
              />
              <Text style={styles.checkboxLabel}>{fuelType}</Text>
            </View>
          ))}

          <View style={styles.buttonContainer}>
            <Button mode="contained" onPress={handleFilter} style={styles.buttonFilter}>
              Filtrar
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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

export default FuelFilterModal;

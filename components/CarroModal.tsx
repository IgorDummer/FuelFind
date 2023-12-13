import React, { FC, useState } from 'react';
import { StyleSheet, View, Text, Modal, TextInput, TouchableOpacity, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

interface CarFormModalProps {
  isVisible: boolean;
  onClose: () => void;
  carName: string;
  setCarName: (text: string) => void;
  fuelType: string;
  setFuelType: (value: string) => void;
  fuelConsumption: string;
  setFuelConsumption: (text: string) => void;
  onSave: () => void;
}

const CarFormModal: FC<CarFormModalProps> = ({ isVisible, onClose, carName, setCarName, fuelType, setFuelType, fuelConsumption, setFuelConsumption, onSave }) => {
  

  return (
    <Modal visible={isVisible}>

      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalHeaderText}>Informe os dados do seu veículo</Text>

          <View style={styles.large_inputs_view}>
            <TextInput style={styles.large_input}
              placeholder="Nome do Carro"
              value={carName}
              onChangeText={(text) => setCarName(text)}
            />
          </View>

          <View style={styles.small_inputs_view}>
            <View style={styles.small_input}>
                
              <RNPickerSelect
                placeholder={{ label: 'Tipo de combustível', value: null }}
                onValueChange={(value) => setFuelType(value)}
                items={[
                  { label: 'Gasolina Comum', value: 'Gasolina Comum' },
                  { label: 'Gasolina Aditivada', value: 'Gasolina Aditivada' },
                  { label: 'Diesel S10', value: 'Diesel S10' },
                  { label: 'Diesel S500', value: 'Diesel S500' },
                  { label: 'GNV', value: 'GNV' },
                  { label: 'Etanol', value: 'Etanol' }
                  // Adicione outros tipos de combustíveis conforme necessário.
                ]}
              />
                {/*
                <TextInput
                placeholder="Tipo de combustível"
                value={fuelType}
                onChangeText={(text) => setFuelType(text)}
              />*/}
            </View>
            <View style={styles.small_input}>
              <TextInput
                placeholder="Kilômetros / litro"
                value={fuelConsumption}
                keyboardType="numeric"
                onChangeText={(text) => setFuelConsumption(text)}
              />
            </View>
          </View>
          
          <View style={styles.button_view}>
            <View style={styles.small_buttonModal}>
              <Button
                title = 'SALVAR'      
                color={'#122209'}
                onPress={onSave}
              />
            </View>
            <View style={styles.small_buttonModal}>
            <Button
                title = 'FECHAR'      
                color={'#122209'}
                onPress={onClose}
              />
            </View>

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
    marginBottom: 15,
    marginTop: 15,
  },
  large_inputs_view: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  large_input: {
    width: '100%',
    marginBottom: 20,
    marginTop: 10,
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
    marginBottom: 20,
    marginTop: 8,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    padding: 5,
    borderBottomWidth: 1.5,
    borderBottomColor: 'black'
  },
  button_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  small_buttonModal: {
    width: '45%',
    marginBottom: 15,
    marginTop: 15,
  }
  
})

export default CarFormModal;

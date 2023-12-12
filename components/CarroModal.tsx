import React, { FC, useState } from 'react';
import { StyleSheet, View, Text, Modal, TextInput, TouchableOpacity, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

interface CarFormModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const CarFormModal: FC<CarFormModalProps> = ({ isVisible, onClose }) => {
  const [carName, setCarName] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [fuelConsumption, setFuelConsumption] = useState('');

  const handleSave = () => {
    // Lógica para salvar os dados (por exemplo, chamando uma função do componente pai)
    // e fechar o modal.
    // Você pode passar os dados para o componente pai usando uma função de callback.
    // onClose({ carName, fuelType, fuelConsumption });
  };

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
                  { label: 'Gasolina Comum', value: 'GASOLINA_COMUM' },
                  { label: 'Gasolina Aditivada', value: 'GASOLINA_ADITIVADA' },
                  { label: 'Diesel S10', value: 'DIESEL_S10' },
                  { label: 'Diesel S500', value: 'DIESEL_S500' },
                  { label: 'GNV', value: 'GNV' },
                  { label: 'Etanol', value: 'ETANOL' }
                  // Adicione outros tipos de combustíveis conforme necessário.
                ]}
              />
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
          
          <View style={{ marginTop: 15, marginBottom: 15 }}>
            <Button 
              title = 'SALVAR'      
              color={'#122209'}
              onPress={handleSave}
            />
          </View>
          <View style={{ marginTop: 15, marginBottom: 15 }}>
            <Button 
              title = 'FECHAR'      
              color={'#122209'}
              onPress={onClose}
            />
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
  large_inputs_view: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  large_input: {
    width: '100%',
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
})

export default CarFormModal;

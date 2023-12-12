import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import Carro from '../interfaces/Carro';

interface CarroCardProps {
  carro: Carro;
  onEdit: () => void;
  onDelete: () => void;
}

const CarroCard: React.FC<CarroCardProps> = ({ carro, onEdit, onDelete }) => {

    return (
        <View style={styles.car_section}>
        <View style={styles.car_name}>
          <Text style={styles.car_name_text}>{carro.name.toUpperCase()}</Text>
          <View style={styles.car_name_icons}>
            <TouchableOpacity onPress={onEdit}>
              <Image style={styles.icons} source={require ('../assets/images/edit.svg')} ></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDelete}>
              <Image style={styles.icons} source={require ('../assets/images/delete.svg')} ></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.car_fuel}>
          <Text style={styles.car_fuel_text}>{carro.combustivel.toUpperCase()}</Text>
          <Text style={styles.car_fuel_km}>{carro.consumo} Km/L</Text>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    car_section:{
        backgroundColor: '#F5F5F4',
        //width: '85%',
        padding: 10,
        margin: 10,
        borderRadius: 10
      },
      car_name:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5F5F4'
      },
      car_name_text:{
        color: '#3e3e3e',
        fontWeight: 'bold',
        paddingBottom: 10,
      },
      icons:{
        color: '#3e3e3e',
        width: 18,
      },
      car_name_icons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5F5F4',
        color: '#3e3e3e',
        paddingBottom: 10,
      },
      car_fuel:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5F5F4',
      },
      car_fuel_text:{
        color: '#3e3e3e',
      },
      car_fuel_km: {
        color: '#3e3e3e',
      }
  });
  
  export default CarroCard;
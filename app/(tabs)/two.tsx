import { TouchableOpacity, Button, Image, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { TextInput } from 'react-native-gesture-handler';

export default function TabTwoScreen() {
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
        <>
          <View style={styles.car_section}>
            <View style={styles.car_name}>
              <Text style={styles.car_name_text}>COROLLA</Text>
              <View style={styles.car_name_icons}>
                <TouchableOpacity /*onPress={}*/>
                  <Image style={styles.icons} source={require ('../../assets/images/edit.svg')} ></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image style={styles.icons} source={require ('../../assets/images/delete.svg')} ></Image>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.car_fuel}>
              <Text style={styles.car_fuel_text}>GASOLINA COMUM</Text>
              <Text style={styles.car_fuel_km}>8 Km/L</Text>
            </View>
          </View>

          <View style={styles.car_section}>
            <View style={styles.car_name}>
              <Text style={styles.car_name_text}>CELTA</Text>
              <View style={styles.car_name_icons}>
                <TouchableOpacity>
                  <Image style={styles.icons} source={require ('../../assets/images/edit.svg')} ></Image>
                </TouchableOpacity>
                
                <Image style={styles.icons} source={require ('../../assets/images/delete.svg')} ></Image>
              </View>
            </View>
            <View style={styles.car_fuel}>
              <Text style={styles.car_fuel_text}>GASOLINA ADITIVADA</Text>
              <Text style={styles.car_fuel_km}>7 Km/L</Text>
            </View>
          </View>
        </>

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
  },
  car_section:{
    backgroundColor: '#F5F5F4',
    width: '85%',
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

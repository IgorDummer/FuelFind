import { Button, Image, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { TextInput } from 'react-native-gesture-handler';

export default function TabTwoScreen() {
  return (
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
            placeholder='johnsnow'
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

        <View style={{ marginTop: 15 }}>
          <Button 
            title = 'ALTERAR'      
            color={'#122209'}
            //onPress={}
          />
        </View>

    </View>
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
    color: 'black'
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

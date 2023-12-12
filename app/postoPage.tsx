import { useRoute } from '@react-navigation/native';
import { Text, View } from '../components/Themed';
import { StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const posto = {
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
      data: '2023-11-10',
    },
    {
      id: 2,
      texto: 'Estimo muito o bom caráter dos que me servem tão bom serviço.',
      usuario: {
        id: 2,
        nome: 'yowzafate',
      },
      data: '2023-11-10',
    },
  ],
}

export default function PostoPage() {
  return (
    <View style={styles.container}>
      <View style={styles.container_title}>
        <Image source={require('../assets/images/green_gas_station.svg')} />
        <Text style={styles.title}>FuelFind</Text>
      </View>
      <Text style={styles.title}>DETALHES DO POSTO</Text>

      {/* Nome do Posto e Votos */}
      <View style={styles.voteContainer}>
        <Text style={styles.postoName}>{posto.name}</Text>
        <View style={styles.voteIcons}>
          <Image
            style={{ tintColor: '#84CC16', width: 20, height: 20 }}
            source={require('../assets/images/arrow_up.svg')}
          />
          <Text style={[styles.voteText, { color: '#84CC16', fontWeight: 'bold' }]}>{posto.upVotes}</Text>
          <Image
            style={{ tintColor: '#B91C1C', width: 20, height: 20 }}
            source={require('../assets/images/arrow_down.svg')}
          />
          <Text style={[styles.voteText, { color: '#B91C1C' }]}>{posto.downVotes}</Text>
        </View>
      </View>

      {/* Lista de Combustíveis */}
      <Text style={styles.subtitle}>Combustíveis</Text>
      <FlatList
        data={posto.combustiveis}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.combustivelRow}>
            <Text>{item.tipo}</Text>
            <Text>{`R$ ${item.preco.toFixed(2)}`}</Text>
          </View>
        )}
      />

      {/* Dados do Endereço */}
      <Text style={styles.subtitle}>Endereço</Text>
      <View style={styles.addressRow}>
        <Text>{`${posto.endereco.rua}, ${posto.endereco.numero}, ${posto.endereco.bairro}, ${posto.endereco.cidade}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  postoName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  voteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  voteIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  voteText: {
    marginHorizontal: 4,
    fontWeight: 'bold',
  },
  combustivelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  addressRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
});
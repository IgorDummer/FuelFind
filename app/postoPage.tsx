import { useRoute } from '@react-navigation/native';
import { Text, View } from '../components/Themed';
import { StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
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
    {
      id: 3,
      texto: 'Estimo muito o bom caráter dos que me servem tão bom serviço.',
      usuario: {
        id: 2,
        nome: 'yowzafate',
      },
      data: '2023-11-10',
    },
    {
      id: 4,
      texto: 'Estimo muito o bom caráter dos que me servem tão bom serviço.',
      usuario: {
        id: 2,
        nome: 'yowzafate',
      },
      data: '2023-11-10',
    },
  ],
};

export default function PostoPage() {
  return (
    <View style={styles.container}>
      <View style={styles.container_title}>
        <Image source={require('../assets/images/green_gas_station.svg')} />
        <Text style={styles.title}>FuelFind</Text>
      </View>
      <Text style={styles.titleDetails}>DETALHES DO POSTO</Text>

      {/* Nome do Posto e Votos */}
      <View style={styles.voteContainer}>
        <View style={styles.postoInfo}>
          <Text style={styles.postoName}>{posto.name}</Text>
          {/* Adicionei uma View para envolver os ícones de votos e o texto */}
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
      </View>

      {/* Lista de Combustíveis */}
      <Text style={styles.subtitle}>Combustíveis</Text>
      <FlatList
        style={styles.flatList}
        data={posto.combustiveis}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={[styles.combustivelRow, { backgroundColor: '#EAEAEA' }]}>
            <Text style={styles.combustivelName}>{item.tipo}</Text>
            <Text style={styles.combustivelPrice}>{`R$ ${item.preco.toFixed(2)}`}</Text>
          </View>
        )}
      />

      {/* Dados do Endereço */}
      <Text style={styles.subtitle}>Endereço</Text>
      <View style={styles.addressRow}>
        <Text>{`${posto.endereco.rua}, ${posto.endereco.numero}, ${posto.endereco.bairro}, ${posto.endereco.cidade}`}</Text>
      </View>

      {/* Comentários */}
      <Text style={styles.subtitle}>Comentários</Text>
      <View style={styles.commentInputContainer}>
        <View style={styles.commentInputRow}>
          <TextInput
            style={styles.commentInput}
            placeholder="Digite seu comentário..."
            // Aqui você pode adicionar mais propriedades do TextInput conforme necessário
          />
          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.flatList}
          data={posto.comentarios}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.commentRow}>
              <View style={styles.commentHeader}>
                <Text style={[styles.commentUserName, { color: '#1b4203' }]}>{item.usuario.nome}</Text>
                <Text style={styles.commentDate}>{item.data}</Text>
              </View>
              <Text>{item.texto}</Text>
            </View>
          )}
        />
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
  titleDetails:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingVertical: 15,
  },
  postoInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 50, // Adicionado padding horizontal
    width: '100%', // Para ocupar toda a largura
  },
  postoName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  voteContainer: {
    flexDirection: 'column', // Alterado para column para empilhar verticalmente
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
  },
  voteIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5, // Reduzi o espaçamento entre o nome do posto e os ícones de votos
  },
  voteText: {
    marginHorizontal: 4,
    fontWeight: 'bold',
  },
  combustivelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    padding: 10, // Adicionei padding
    borderRadius: 8, // Adicionei bordas arredondadas
    width: '100%',
  },
  combustivelName: {
    flex: 1, // Para ocupar o espaço disponível igualmente
  },
  combustivelText: {
    flex: 1, // Para ocupar o espaço disponível igualmente
    textAlign: 'right', // Para alinhar o texto à direita
    width: '50%', // Ajustado para ocupar 50% da largura (ou o valor desejado)
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
  flatList: {
    width: '80%',
  },
  combustivelPrice: {
    textAlign: 'right', // Ajustado para alinhar o texto à direita
    width: '30%', // Ajustado para ocupar 30% da largura (ou o valor desejado)
  },
  commentRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 8,
    padding: 10,
    borderRadius: 8,
    width: '100%',
    backgroundColor: '#EAEAEA',
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    backgroundColor: 'none',
  },
  commentUserName: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  commentDate: {
    fontSize: 12,
  },
  commentInputContainer: {
    marginBottom: 16,
    width: '100%',
    alignItems: 'center',
  },
  commentInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 0,
    paddingLeft: 8,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#EAEAEA',
  },
  commentInputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    textAlign: 'center',
  },
  sendButton: {
    backgroundColor: '#84CC16',
    padding: 10,
    borderRadius: 8,
    marginLeft: 8,

  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
import { useRoute } from '@react-navigation/native';
import { Text, View } from '../components/Themed';
import { StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { useRouter } from 'expo-router';
import { format } from 'date-fns';

interface Posto {
  id: number;
  name: string;
  localizacaoX: number;
  localizacaoY: number;
  endereco: {
    id: number;
    cep: string;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: number;
  };
  combustiveis: {
    id: number;
    tipo: string;
    preco: number;
  }[];
  upVotes: number;
  downVotes: number;
  comentarios: {
    id: number;
    texto: string;
    usuario: {
      id: number;
      nome: string;
    };
    data: string;
  }[];
}


const postos: Posto[] = [
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
        texto: 'Carambolas',
        usuario: {
          id: 1,
          nome: 'marquinhos',
        },
        data: '10/11/2023',
      },
      {
        id: 2,
        texto: 'Eita lasqueira',
        usuario: {
          id: 2,
          nome: 'enzo',
        },
        data: '10/11/2023',
      },
    ],
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
    ],
    upVotes: 10,
    downVotes: 3,
    comentarios: [
      {
        id: 1,
        texto: 'To certo',
        usuario: {
          id: 1,
          nome: 'naruto uzumaki',
        },
        data: '10/11/2023',
      },
      {
        id: 2,
        texto: 'Dracarys',
        usuario: {
          id: 2,
          nome: 'Daenerys Targaryen',
        },
        data: '10/11/2023',
      },
      {
        id: 3,
        texto: 'Estou pronto',
        usuario: {
          id: 2,
          nome: 'Bob Esponja',
        },
        data: '10/11/2023',
      },
    ],
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
    ],
    upVotes: 20,
    downVotes: 10,
    comentarios: [
      {
        id: 1,
        texto: 'Atendimento excepcional, o café da conveniência é delicioso',
        usuario: {
          id: 1,
          nome: 'jubilantly',
        },
        data: '10/11/2023',
      },
    ],
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
        data: '10/11/2023',
      },
    ],
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
    ],
    upVotes: 10,
    downVotes: 3,
    comentarios: [
      {
        id: 1,
        texto: 'Atendimento excepcional, o café da conveniência é delicioso',
        usuario: {
          id: 1,
          nome: 'jubilantly',
        },
        data: '10/11/2023',
      },
    ],
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
    ],
    upVotes: 20,
    downVotes: 10,
    comentarios: [
      {
        id: 1,
        texto: 'Atendimento excepcional, o café da conveniência é delicioso',
        usuario: {
          id: 1,
          nome: 'jubilantly',
        },
        data: '10/11/2023',
      },
    ]
  },
]

export default function PostoPage() {
  const route = useRoute();
  const router = useRouter();
  const idParam = (route.params as { id: number }).id;

  const [posto, setPosto] = useState<Posto | null>(null);
  const [loading, setLoading] = useState(true);

  const [newCommentText, setNewCommentText] = useState('');

  useEffect(() => {
    if (idParam !== undefined && idParam !== null) {
      console.log('ID fornecido na rota:', idParam);
      console.log('Postos:', postos);

      // Simulando uma requisição assíncrona com setTimeout
      setTimeout(() => {
        const posto = postos.find((posto) => posto.id === Number(idParam));
        if (posto !== undefined) {
          setPosto(posto);
          setLoading(false);
        }
      }, 600);
    }
  }, [idParam]);

  return (
    (posto === null) ? <View style={styles.container}>
      <View style={styles.container_title}>
        <Text style={styles.title}>Carregando...</Text>
      </View>
    </View> : (
      <View style={styles.container}>
        {loading ? (
          <View style={styles.container}>
            <View style={styles.container_title}>
              <Text style={styles.title}>Carregando...</Text>
            </View>
          </View>
        ) : (
          <>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.push('/')}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
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
                  <Text style={[styles.voteText, { color: '#84CC16', fontWeight: 'bold' }]}>{posto?.upVotes}</Text>
                  <Image
                    style={{ tintColor: '#B91C1C', width: 20, height: 20 }}
                    source={require('../assets/images/arrow_down.svg')}
                  />
                  <Text style={[styles.voteText, { color: '#B91C1C' }]}>{posto?.downVotes}</Text>
                </View>
              </View>
            </View>

            {/* Lista de Combustíveis */}
            <Text style={styles.subtitle}>Combustíveis</Text>
            <FlatList
              style={styles.flatList}
              data={posto?.combustiveis}
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
              <Text>{`${posto?.endereco.rua}, ${posto?.endereco.numero}, ${posto?.endereco.bairro}, ${posto?.endereco.cidade}`}</Text>
            </View>

            {/* Comentários */}
            <Text style={styles.subtitle}>Comentários</Text>
            <View style={styles.commentInputContainer}>
              <View style={styles.commentInputRow}>
                <TextInput
                  style={styles.commentInput}
                  placeholder="Digite seu comentário..."
                  value={newCommentText}
                  onChangeText={(text) => setNewCommentText(text)}
                />
                <TouchableOpacity
                  style={styles.sendButton}
                  onPress={() => {
                    if (newCommentText.trim() !== '') {
                      console.log('Enviando comentário...');
                      setTimeout(() => {
                        const newComment = {
                          id: Date.now(),
                          texto: newCommentText,
                          usuario: {
                            id: 99,
                            nome: 'João das Neves',
                          },
                          data: format(new Date(), 'dd/MM/yyyy'),
                        };

                        setPosto((prevPosto) => {
                          if (prevPosto) {
                            return {
                              ...prevPosto,
                              comentarios: [...prevPosto.comentarios, newComment],
                            };
                          }
                          return prevPosto;
                        });
                        setNewCommentText('');
                        console.log('Comentário enviado!');
                      }, 300);
                    }
                  }}
                >
                  <Text style={styles.sendButtonText}>Enviar</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                style={styles.flatList}
                data={posto?.comentarios}
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
          </>
        )}
      </View >
    )
  );
}

const styles = StyleSheet.create({
  container: {
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
  titleDetails: {
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
    paddingHorizontal: 50,
    width: '100%',
  },
  postoName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  voteContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
  },
  voteIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  voteText: {
    marginHorizontal: 4,
    fontWeight: 'bold',
  },
  combustivelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    padding: 10,
    borderRadius: 8,
    width: '100%',
  },
  combustivelName: {
    flex: 1,
  },
  combustivelText: {
    flex: 1,
    textAlign: 'right',
    width: '50%',
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
    textAlign: 'right',
    width: '30%',
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
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
});
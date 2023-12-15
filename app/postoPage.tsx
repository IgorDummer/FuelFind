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
  upVoted?: boolean;
  downVoted?: boolean;
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
    name: 'AUTO POSTO PROGRESSO LTDA',
    localizacaoX: 0,
    localizacaoY: 0,
    endereco: {
      id: 1,
      cep: '29153-100',
      estado: 'Espírito Santo',
      cidade: 'Cariacica',
      bairro: 'Porto de Santana',
      rua: 'Rua principal',
      numero: 747,
    },
    combustiveis: [
      {
        id: 1,
        tipo: 'Gasolina Comum',
        preco: 5.58,
      },
      {
        id: 2,
        tipo: 'Gasolina Aditivada',
        preco: 5.75,
      },
      {
        id: 6,
        tipo: 'Etanol',
        preco: 4.09,
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
    name: 'RM 262 COMERCIO DE COMBUSTIVEIS LTDA',
    localizacaoX: 0,
    localizacaoY: 0,
    endereco: {
      id: 2,
      cep: '29146-012',
      estado: 'Espírito Santo',
      cidade: 'Cariacica',
      bairro: 'Campo Grande',
      rua: 'Avenida Maria Gurgel',
      numero: 3127,
    },
    combustiveis: [
      {
        id: 1,
        tipo: 'Gasolina Comum',
        preco: 5.55,
      },
      {
        id: 2,
        tipo: 'Gasolina Aditivada',
        preco: 5.65,
      },
      {
        id: 4,
        tipo: 'Diesel S500',
        preco: 6.09,
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
    name: 'POSTO MINEIRO',
    localizacaoX: 0,
    localizacaoY: 0,
    endereco: {
      id: 3,
      cep: '29154-200',
      estado: 'Espírito Santo',
      cidade: 'Cariacica',
      bairro: 'Santana',
      rua: 'Rodovia Governador Jose Henrique Sette',
      numero: 6174,
    },
    combustiveis: [
      {
        id: 1,
        tipo: 'Gasolina Comum',
        preco: 5.55,
      },
      {
        id: 2,
        tipo: 'Gasolina Aditivada',
        preco: 5.57,
      },
      {
        id: 3,
        tipo: 'Diesel S10',
        preco: 6.04,
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
    name: 'POSTO PALACIO',
    localizacaoX: 0,
    localizacaoY: 0,
    endereco: {
      id: 3,
      cep: '29140-580',
      estado: 'Espírito Santo',
      cidade: 'Cariacica',
      bairro: 'Vasco Da Gama',
      rua: 'Rua Eurico Gaspar Dutra',
      numero: 0,
    },
    combustiveis: [
      {
        id: 1,
        tipo: 'Gasolina Comum',
        preco: 5.39,
      },
      {
        id: 2,
        tipo: 'Gasolina Aditivada',
        preco: 5.39,
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
    name: 'AUTO SERVICO SAO CRISTOVAO LTDA',
    localizacaoX: 0,
    localizacaoY: 0,
    endereco: {
      id: 2,
      cep: '29147-345',
      estado: 'Espírito Santo',
      cidade: 'Cariacica',
      bairro: 'Dom Bosco',
      rua: 'Avenida Mario Gurgel',
      numero: 4,
    },
    combustiveis: [
      {
        id: 1,
        tipo: 'Gasolina Comum',
        preco: 5.58,
      },
      {
        id: 2,
        tipo: 'Gasolina Aditivada',
        preco: 5.62,
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
    name: 'Posto Jardim America do Gas ltda',
    localizacaoX: 0,
    localizacaoY: 0,
    endereco: {
      id: 3,
      cep: '29140-080',
      estado: 'Espirito Santo',
      cidade: 'Cariacica',
      bairro: 'Jardim America',
      rua: 'Avenidade Espirito Santo',
      numero: 87,
    },
    combustiveis: [
      {
        id: 1,
        tipo: 'Gasolina Comum',
        preco: 5.55,
      },
      {
        id: 2,
        tipo: 'Gasolina Aditivada',
        preco: 5.70,
      },
      {
        id: 3,
        tipo: 'Diesel S10',
        preco: 5.99,
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

  const [upVoted, setUpVoted] = useState(false);
  const [downVoted, setDownVoted] = useState(false);

  const [hasUpVoted, setHasUpVoted] = useState(false);
  const [hasDownVoted, setHasDownVoted] = useState(false);

  useEffect(() => {
    setUpVoted(false);
    setDownVoted(false);
  }, [idParam]);


  const handleVote = (action: 'up' | 'down') => {
    setPosto((prevPosto) => {
      if (prevPosto) {
        if (action === 'up') {
          if(hasUpVoted){
            setHasUpVoted(true)
            return { ...prevPosto}
          }
          else if(hasDownVoted){
            setHasDownVoted(false)
            setHasUpVoted(true)
            return { ...prevPosto, upVotes: prevPosto.upVotes + 1, downVotes: prevPosto.downVotes - 1 }
          }
          else{
            setHasUpVoted(true)
            return { ...prevPosto, upVotes: prevPosto.upVotes + 1 };
          }
        } else if (action === 'down') {
          if(hasUpVoted){
            setHasUpVoted(false)
            setHasDownVoted(true)
            return { ...prevPosto, upVotes: prevPosto.upVotes - 1, downVotes: prevPosto.downVotes + 1 }
          }
          else if(hasDownVoted){
            setHasDownVoted(true)
            return { ...prevPosto}
          }
          else{
            setHasDownVoted(true)
            return { ...prevPosto, downVotes: prevPosto.downVotes + 1 };
          }
        }
      }
      return prevPosto;
    });
  };
  

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
                <TouchableOpacity onPress={() => handleVote('up')} disabled={upVoted}>
                    <Image
                      style={{ tintColor: upVoted ? '#84CC16' : '#65a30d', width: 20, height: 20 }}
                      source={require('../assets/images/arrow_up.svg')}
                    />
                  </TouchableOpacity>
                  <Text style={[styles.voteText, { color: upVoted ? '#84CC16' : '#65a30d', fontWeight: 'bold' }]}>{posto?.upVotes}</Text>
                  <TouchableOpacity onPress={() => handleVote('down')} disabled={downVoted}>
                    <Image
                      style={{ tintColor: downVoted ? '#B91C1C' : '#991b1b', width: 20, height: 20 }}
                      source={require('../assets/images/arrow_down.svg')}
                    />
                  </TouchableOpacity>
                  <Text style={[styles.voteText, { color: downVoted ? '#B91C1C' : '#991b1b' }]}>{posto?.downVotes}</Text>
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
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import Posto from '../interfaces/Posto';

interface PostoCardProps {
  posto: Posto;
  onClick?: () => void;
}

const PostoCard: React.FC<PostoCardProps> = ({ posto, onClick }) => {
  return (
    <View style={styles.postoCard} onTouchEnd={onClick}>
      <View style={styles.postoHeader}>
        <Text style={styles.postoTitle}>{posto.name.toUpperCase()}</Text>
        <View style={styles.voteContainer}>
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
      <View style={styles.combustivelRow}>
        <Text>{posto.combustiveis[0].tipo.toUpperCase()}</Text>
        <Text>{`R$ ${posto.combustiveis[0].preco.toFixed(2)}`}</Text>
      </View>
      <View style={styles.combustivelRow}>
        <Text>{posto.combustiveis[1].tipo.toUpperCase()}</Text>
        <Text>{`R$ ${posto.combustiveis[1].preco.toFixed(2)}`}</Text>
      </View>
      <View style={styles.addressRow}>
        <Text>{`${posto.endereco.rua}, ${posto.endereco.numero}, ${posto.endereco.bairro}, ${posto.endereco.cidade}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postoCard: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#F5F5F4',
  },
  postoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    backgroundColor: 'none',
  },
  voteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'none',
  },
  voteText: {
    marginHorizontal: 4,
    backgroundColor: 'none',
    fontWeight: 'bold',
  },
  combustivelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    backgroundColor: 'none',
  },
  addressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'none',
  },
  postoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'none',
  },
});

export default PostoCard;
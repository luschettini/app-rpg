import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Subtitle, Chip } from 'react-native-paper';

const Header = ({ characters, filter, onFilterChange }) => {
  const totalCharacters = characters.length;
  const recruitedCount = characters.filter(char => char.recruited).length;
  const availableCount = totalCharacters - recruitedCount;

  const getFilterText = () => {
    switch (filter) {
      case 'recruited':
        return `Mostrando ${recruitedCount} recrutados`;
      case 'available':
        return `Mostrando ${availableCount} disponíveis`;
      default:
        return `Mostrando todos os ${totalCharacters} personagens`;
    }
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Gerenciador de Personagens RPG</Title>
      <Subtitle style={styles.subtitle}>{getFilterText()}</Subtitle>
      
      <View style={styles.chipsContainer}>
        <Chip 
          selected={filter === 'all'}
          onPress={() => onFilterChange('all')}
          style={styles.chip}
        >
          Todos ({totalCharacters})
        </Chip>
        <Chip 
          selected={filter === 'recruited'}
          onPress={() => onFilterChange('recruited')}
          style={styles.chip}
        >
          Recrutados ({recruitedCount})
        </Chip>
        <Chip 
          selected={filter === 'available'}
          onPress={() => onFilterChange('available')}
          style={styles.chip}
        >
          Disponíveis ({availableCount})
        </Chip>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  title: {
    textAlign: 'center',
    color: '#6200ea',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 12,
    color: '#666',
  },
  chipsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  chip: {
    marginHorizontal: 4,
  },
});

export default Header;
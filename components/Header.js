import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Chip } from 'react-native-paper';

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
      <Text style={styles.title}>Gerenciador de Personagens RPG</Text>
      <Text style={styles.subtitle}>{getFilterText()}</Text>
      
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
    padding: 24,
    paddingVertical: 20,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: '#e91e63',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    marginBottom: 16,
  },
  title: {
    textAlign: 'center',
    color: '#e91e63',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    letterSpacing: 0.8,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#ad1457',
    fontSize: 16,
    fontWeight: '500',
  },
  chipsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 10,
    paddingHorizontal: 8,
  },
  chip: {
    marginHorizontal: 3,
    marginVertical: 3,
    minHeight: 40,
    backgroundColor: '#f8bbd9',
  },
});

export default Header;
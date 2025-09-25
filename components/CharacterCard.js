import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Button, Chip, IconButton } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

const CharacterCard = ({ character, onRecruit, onDelete }) => {
  const getClassIcon = (characterClass) => {
    const icons = {
      'Guerreiro': 'sword',
      'Mago': 'auto-fix-high',
      'Arqueiro': 'bow-arrow',
      'Ladino': 'ninja',
      'Clérigo': 'hospital-box',
    };
    return icons[characterClass] || 'account';
  };

  const getClassColor = (characterClass) => {
    const colors = {
      'Guerreiro': '#e91e63',
      'Mago': '#9c27b0',
      'Arqueiro': '#673ab7',
      'Ladino': '#3f51b5',
      'Clérigo': '#f06292',
    };
    return colors[characterClass] || '#ad1457';
  };

  return (
    <Card style={[styles.card, character.recruited && styles.recruitedCard]}>
      <Card.Content>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <MaterialIcons 
              name={getClassIcon(character.class)} 
              size={24} 
              color={getClassColor(character.class)}
              style={styles.icon}
            />
            <Text style={styles.title}>{character.name}</Text>
          </View>
          <IconButton
            icon="delete"
            size={20}
            onPress={onDelete}
            iconColor="#e91e63"
          />
        </View>
        
        <View style={styles.content}>
          <Chip 
            icon={() => (
              <MaterialIcons 
                name={getClassIcon(character.class)} 
                size={16} 
                color="white" 
              />
            )}
            style={[styles.classChip, { backgroundColor: getClassColor(character.class) }]}
            textStyle={styles.classChipText}
          >
            {character.class}
          </Chip>
          
          <Chip 
            icon={character.recruited ? "check-circle" : "account-plus"}
            style={[
              styles.statusChip,
              { backgroundColor: character.recruited ? '#e91e63' : '#f06292' }
            ]}
            textStyle={styles.statusChipText}
          >
            {character.recruited ? 'Recrutado' : 'Disponível'}
          </Chip>
        </View>
        
        <Text style={styles.description}>
          {character.recruited 
            ? `${character.name} está na sua equipe!` 
            : `${character.name} está disponível para recrutamento.`}
        </Text>
      </Card.Content>
      
      <Card.Actions style={styles.actions}>
        <Button
          mode={character.recruited ? "outlined" : "contained"}
          onPress={onRecruit}
          icon={character.recruited ? "account-minus" : "account-plus"}
          buttonColor={character.recruited ? undefined : '#e91e63'}
        >
          {character.recruited ? 'Dispensar' : 'Recrutar'}
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 18,
    marginBottom: 16,
    elevation: 4,
    backgroundColor: 'white',
    borderRadius: 16,
    shadowColor: '#e91e63',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  recruitedCard: {
    borderLeftWidth: 5,
    borderLeftColor: '#e91e63',
    backgroundColor: '#fce4ec',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingTop: 6,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    marginRight: 14,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#880e4f',
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 18,
    flexWrap: 'wrap',
  },
  classChip: {
    alignSelf: 'flex-start',
    minHeight: 34,
  },
  classChipText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  statusChip: {
    alignSelf: 'flex-start',
    minHeight: 34,
  },
  statusChipText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  description: {
    fontSize: 15,
    color: '#ad1457',
    fontStyle: 'italic',
    lineHeight: 22,
    marginBottom: 12,
  },
  actions: {
    justifyContent: 'flex-end',
    paddingTop: 10,
  },
});

export default CharacterCard;
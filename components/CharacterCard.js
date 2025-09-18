import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button, Chip, IconButton } from 'react-native-paper';
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
      'Guerreiro': '#f44336',
      'Mago': '#3f51b5',
      'Arqueiro': '#4caf50',
      'Ladino': '#9c27b0',
      'Clérigo': '#ff9800',
    };
    return colors[characterClass] || '#757575';
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
            <Title style={styles.title}>{character.name}</Title>
          </View>
          <IconButton
            icon="delete"
            size={20}
            onPress={onDelete}
            iconColor="#f44336"
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
              { backgroundColor: character.recruited ? '#4caf50' : '#ff9800' }
            ]}
            textStyle={styles.statusChipText}
          >
            {character.recruited ? 'Recrutado' : 'Disponível'}
          </Chip>
        </View>
        
        <Paragraph style={styles.description}>
          {character.recruited 
            ? `${character.name} está na sua equipe!` 
            : `${character.name} está disponível para recrutamento.`}
        </Paragraph>
      </Card.Content>
      
      <Card.Actions style={styles.actions}>
        <Button
          mode={character.recruited ? "outlined" : "contained"}
          onPress={onRecruit}
          icon={character.recruited ? "account-minus" : "account-plus"}
          buttonColor={character.recruited ? undefined : '#4caf50'}
        >
          {character.recruited ? 'Dispensar' : 'Recrutar'}
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 12,
    elevation: 3,
    backgroundColor: 'white',
  },
  recruitedCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#4caf50',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  classChip: {
    alignSelf: 'flex-start',
  },
  classChipText: {
    color: 'white',
    fontWeight: 'bold',
  },
  statusChip: {
    alignSelf: 'flex-start',
  },
  statusChipText: {
    color: 'white',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  actions: {
    justifyContent: 'flex-end',
  },
});

export default CharacterCard;
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Provider as PaperProvider, Appbar, FAB, Portal, Modal, Text, Button } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import Header from './components/Header';
import CharacterCard from './components/CharacterCard';
import AddCharacterForm from './components/AddCharacterForm';
import { initializeDatabase, getCharacters, addCharacter, deleteCharacter, recruitCharacter } from './database';
import { theme } from './utils/theme';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState('all');
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    setupDatabase();
  }, []);

  const setupDatabase = async () => {
    try {
      await initializeDatabase();
      loadCharacters();
    } catch (error) {
      console.error('Erro ao configurar banco:', error);
    }
  };

  const loadCharacters = async () => {
    try {
      const data = await getCharacters();
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setCharacters(data);
    } catch (error) {
      console.error('Erro ao carregar personagens:', error);
    }
  };

  const handleAddCharacter = async (name, characterClass) => {
    try {
      await addCharacter(name, characterClass);
      await loadCharacters();
      setModalVisible(false);
      Toast.show({
        type: 'success',
        text1: 'Sucesso!',
        text2: `Personagem ${name} adicionado com sucesso!`
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro!',
        text2: 'Não foi possível adicionar o personagem'
      });
    }
  };

  const handleDeleteCharacter = async () => {
    if (!selectedCharacter) return;
    
    try {
      await deleteCharacter(selectedCharacter.id);
      await loadCharacters();
      setDeleteModalVisible(false);
      setSelectedCharacter(null);
      Toast.show({
        type: 'success',
        text1: 'Removido!',
        text2: `Personagem removido com sucesso!`
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro!',
        text2: 'Não foi possível remover o personagem'
      });
    }
  };

  const handleRecruitCharacter = async (id, currentStatus) => {
    try {
      await recruitCharacter(id, !currentStatus);
      await loadCharacters();
      Toast.show({
        type: 'success',
        text1: currentStatus ? 'Dispensado!' : 'Recrutado!',
        text2: currentStatus ? 'Personagem dispensado' : 'Personagem recrutado para sua equipe!'
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro!',
        text2: 'Não foi possível alterar status do personagem'
      });
    }
  };

  const confirmDelete = (character) => {
    setSelectedCharacter(character);
    setDeleteModalVisible(true);
  };

  const getFilteredCharacters = () => {
    switch (filter) {
      case 'recruited':
        return characters.filter(char => char.recruited);
      case 'available':
        return characters.filter(char => !char.recruited);
      default:
        return characters;
    }
  };

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="RPG Characters" />
          <Appbar.Action 
            icon={filter === 'all' ? 'account-group' : filter === 'recruited' ? 'account-check' : 'account-plus'} 
            onPress={() => {
              const filters = ['all', 'recruited', 'available'];
              const currentIndex = filters.indexOf(filter);
              const nextFilter = filters[(currentIndex + 1) % filters.length];
              setFilter(nextFilter);
            }} 
          />
        </Appbar.Header>

        <Header 
          characters={characters}
          filter={filter}
          onFilterChange={setFilter}
        />

        <View style={styles.content}>
          {getFilteredCharacters().map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onRecruit={() => handleRecruitCharacter(character.id, character.recruited)}
              onDelete={() => confirmDelete(character)}
            />
          ))}
        </View>

        <FAB
          style={styles.fab}
          icon="plus"
          onPress={() => setModalVisible(true)}
        />

        {/* Modal para adicionar personagem */}
        <Portal>
          <Modal
            visible={modalVisible}
            onDismiss={() => setModalVisible(false)}
            contentContainerStyle={styles.modalContainer}
          >
            <AddCharacterForm
              onSubmit={handleAddCharacter}
              onCancel={() => setModalVisible(false)}
            />
          </Modal>
        </Portal>

        {/* Modal de confirmação para deletar */}
        <Portal>
          <Modal
            visible={deleteModalVisible}
            onDismiss={() => setDeleteModalVisible(false)}
            contentContainerStyle={styles.modalContainer}
          >
            <View style={styles.deleteModal}>
              <Text style={styles.deleteTitle}>Confirmar Exclusão</Text>
              <Text style={styles.deleteText}>
                Tem certeza que deseja remover {selectedCharacter?.name}?
              </Text>
              <View style={styles.deleteButtons}>
                <Button
                  mode="outlined"
                  onPress={() => setDeleteModalVisible(false)}
                  style={styles.cancelButton}
                >
                  Cancelar
                </Button>
                <Button
                  mode="contained"
                  onPress={handleDeleteCharacter}
                  buttonColor="#f44336"
                  style={styles.deleteButton}
                >
                  Remover
                </Button>
              </View>
            </View>
          </Modal>
        </Portal>

        <Toast 
          config={{
            success: (props) => (
              <View style={{
                backgroundColor: '#e91e63',
                padding: 16,
                borderRadius: 12,
                margin: 16,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                  ✓ {props.text1}
                </Text>
                <Text style={{ color: '#fce4ec', marginLeft: 8 }}>
                  {props.text2}
                </Text>
              </View>
            ),
            error: (props) => (
              <View style={{
                backgroundColor: '#d32f2f',
                padding: 16,
                borderRadius: 12,
                margin: 16,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                  ✗ {props.text1}
                </Text>
                <Text style={{ color: '#ffcdd2', marginLeft: 8 }}>
                  {props.text2}
                </Text>
              </View>
            ),
          }}
        />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fce4ec',
  },
  content: {
    flex: 1,
    paddingBottom: 90,
  },
  fab: {
    position: 'absolute',
    margin: 24,
    right: 0,
    bottom: 0,
    elevation: 12,
    backgroundColor: '#e91e63',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 28,
    margin: 20,
    borderRadius: 20,
    maxHeight: '90%',
    elevation: 8,
  },
  deleteModal: {
    alignItems: 'center',
    padding: 12,
  },
  deleteTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#880e4f',
    textAlign: 'center',
  },
  deleteText: {
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 28,
    color: '#ad1457',
    lineHeight: 24,
  },
  deleteButtons: {
    flexDirection: 'row',
    gap: 20,
    minWidth: '100%',
  },
  cancelButton: {
    flex: 1,
    minHeight: 52,
    borderColor: '#f06292',
  },
  deleteButton: {
    flex: 1,
    minHeight: 52,
    backgroundColor: '#e91e63',
  },
});


import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title, HelperText, Menu, Divider } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

const AddCharacterForm = ({ onSubmit, onCancel }) => {
  const [name, setName] = useState('');
  const [characterClass, setCharacterClass] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);
  const [nameError, setNameError] = useState('');

  const classes = [
    { name: 'Guerreiro', icon: 'sword' },
    { name: 'Mago', icon: 'auto-fix-high' },
    { name: 'Arqueiro', icon: 'bow-arrow' },
    { name: 'Ladino', icon: 'ninja' },
    { name: 'Clérigo', icon: 'hospital-box' },
  ];

  const validateName = (text) => {
    if (text.length < 2) {
      setNameError('Nome deve ter pelo menos 2 caracteres');
      return false;
    }
    if (text.length > 20) {
      setNameError('Nome deve ter no máximo 20 caracteres');
      return false;
    }
    setNameError('');
    return true;
  };

  const handleSubmit = () => {
    const isNameValid = validateName(name);
    
    if (!isNameValid) {
      return;
    }
    
    if (!characterClass) {
      alert('Por favor, selecione uma classe');
      return;
    }

    onSubmit(name.trim(), characterClass);
    setName('');
    setCharacterClass('');
  };

  const isFormValid = name.trim().length >= 2 && characterClass && !nameError;

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Adicionar Novo Personagem</Title>
      
      <TextInput
        label="Nome do Personagem"
        value={name}
        onChangeText={(text) => {
          setName(text);
          validateName(text);
        }}
        mode="outlined"
        style={styles.input}
        left={<TextInput.Icon icon="account" />}
        error={!!nameError}
        maxLength={20}
      />
      <HelperText type="error" visible={!!nameError}>
        {nameError}
      </HelperText>
      
      <Menu
        visible={menuVisible}
        onDismiss={() => setMenuVisible(false)}
        anchor={
          <Button
            mode="outlined"
            onPress={() => setMenuVisible(true)}
            style={styles.classButton}
            icon="chevron-down"
            contentStyle={styles.classButtonContent}
          >
            {characterClass || 'Selecione uma Classe'}
          </Button>
        }
      >
        {classes.map((cls) => (
          <Menu.Item
            key={cls.name}
            onPress={() => {
              setCharacterClass(cls.name);
              setMenuVisible(false);
            }}
            title={cls.name}
            leadingIcon={() => (
              <MaterialIcons name={cls.icon} size={20} color="#6200ea" />
            )}
          />
        ))}
      </Menu>
      
      <View style={styles.buttons}>
        <Button
          mode="outlined"
          onPress={onCancel}
          style={styles.cancelButton}
        >
          Cancelar
        </Button>
        <Button
          mode="contained"
          onPress={handleSubmit}
          disabled={!isFormValid}
          style={styles.submitButton}
          icon="plus"
        >
          Adicionar
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#6200ea',
  },
  input: {
    marginBottom: 4,
  },
  classButton: {
    marginTop: 8,
    marginBottom: 20,
  },
  classButtonContent: {
    flexDirection: 'row-reverse',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  cancelButton: {
    flex: 1,
  },
  submitButton: {
    flex: 1,
  },
});

export default AddCharacterForm;
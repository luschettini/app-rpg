import { Platform } from 'react-native';

// Importa o banco apropriado baseado na plataforma
let database;

if (Platform.OS === 'web') {
  // Para web, usa localStorage
  database = require('./webStorage');
} else {
  // Para mobile, usa SQLite
  database = require('./sqlite');
}

export const {
  initializeDatabase,
  getCharacters,
  addCharacter,
  deleteCharacter,
  recruitCharacter
} = database;

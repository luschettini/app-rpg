import { Platform } from 'react-native';

let database;

if (Platform.OS === 'web') {
  database = require('./webStorage');
} else {
  database = require('./sqlite');
}

export const {
  initializeDatabase,
  getCharacters,
  addCharacter,
  deleteCharacter,
  recruitCharacter
} = database;

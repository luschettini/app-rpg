import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('rpg_characters.db');

export const initializeDatabase = () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS characters (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            class TEXT NOT NULL,
            recruited BOOLEAN DEFAULT FALSE,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
          );`,
          [],
          () => {
            console.log('Tabela criada com sucesso');
            resolve();
          },
          (_, error) => {
            console.error('Erro ao criar tabela:', error);
            reject(error);
          }
        );
      },
      (error) => {
        console.error('Erro na transação:', error);
        reject(error);
      }
    );
  });
};

export const getCharacters = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM characters ORDER BY created_at DESC;',
        [],
        (_, { rows }) => {
          const characters = [];
          for (let i = 0; i < rows.length; i++) {
            characters.push({
              ...rows.item(i),
              recruited: Boolean(rows.item(i).recruited)
            });
          }
          resolve(characters);
        },
        (_, error) => {
          console.error('Erro ao buscar personagens:', error);
          reject(error);
        }
      );
    });
  });
};

export const addCharacter = (name, characterClass) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO characters (name, class) VALUES (?, ?);',
        [name, characterClass],
        (_, result) => {
          console.log('Personagem adicionado:', result.insertId);
          resolve(result.insertId);
        },
        (_, error) => {
          console.error('Erro ao adicionar personagem:', error);
          reject(error);
        }
      );
    });
  });
};

export const deleteCharacter = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM characters WHERE id = ?;',
        [id],
        (_, result) => {
          console.log('Personagem removido:', id);
          resolve(result);
        },
        (_, error) => {
          console.error('Erro ao remover personagem:', error);
          reject(error);
        }
      );
    });
  });
};

export const recruitCharacter = (id, recruited) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE characters SET recruited = ? WHERE id = ?;',
        [recruited ? 1 : 0, id],
        (_, result) => {
          console.log('Status do personagem atualizado:', id, recruited);
          resolve(result);
        },
        (_, error) => {
          console.error('Erro ao atualizar personagem:', error);
          reject(error);
        }
      );
    });
  });
};

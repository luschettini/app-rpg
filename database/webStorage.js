const STORAGE_KEY = 'rpg_characters';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const initializeDatabase = async () => {
  try {
    const existing = localStorage.getItem(STORAGE_KEY);
    if (!existing) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    }
    console.log('Storage inicializado com sucesso');
    return Promise.resolve();
  } catch (error) {
    console.error('Erro ao inicializar storage:', error);
    return Promise.reject(error);
  }
};

export const getCharacters = async () => {
  try {
    await delay(100);
    const data = localStorage.getItem(STORAGE_KEY);
    const characters = data ? JSON.parse(data) : [];
    return characters.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  } catch (error) {
    console.error('Erro ao buscar personagens:', error);
    throw error;
  }
};

export const addCharacter = async (name, characterClass) => {
  try {
    await delay(100);
    const characters = await getCharacters();
    const newCharacter = {
      id: Date.now(),
      name,
      class: characterClass,
      recruited: false,
      created_at: new Date().toISOString()
    };
    
    characters.push(newCharacter);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
    console.log('Personagem adicionado:', newCharacter.id);
    return newCharacter.id;
  } catch (error) {
    console.error('Erro ao adicionar personagem:', error);
    throw error;
  }
};

export const deleteCharacter = async (id) => {
  try {
    await delay(100);
    const characters = await getCharacters();
    const filteredCharacters = characters.filter(char => char.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredCharacters));
    console.log('Personagem removido:', id);
    return { success: true };
  } catch (error) {
    console.error('Erro ao remover personagem:', error);
    throw error;
  }
};

export const recruitCharacter = async (id, recruited) => {
  try {
    await delay(100);
    const characters = await getCharacters();
    const updatedCharacters = characters.map(char => 
      char.id === id ? { ...char, recruited } : char
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCharacters));
    console.log('Status do personagem atualizado:', id, recruited);
    return { success: true };
  } catch (error) {
    console.error('Erro ao atualizar personagem:', error);
    throw error;
  }
};

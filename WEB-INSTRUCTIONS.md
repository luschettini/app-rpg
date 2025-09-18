# 🌐 Como Rodar o App RPG na Web

## 🚀 Comandos Principais:

### 1. **Rodar na Web:**
```bash
cd "c:\Users\Aluno\Desktop\ativ-rpg\app-rpg"
npx expo start --web
```

### 2. **Ou usando o script npm:**
```bash
cd "c:\Users\Aluno\Desktop\ativ-rpg\app-rpg"
npm run web
```

## 🔧 **Configurações para Web:**

### ✅ **O que foi configurado:**
1. **Database Universal:** Criado sistema que detecta a plataforma
   - Mobile: usa SQLite
   - Web: usa localStorage

2. **Dependências Web:** Adicionadas ao package.json
   - `react-dom`
   - `react-native-web`

3. **Banco para Web:** Criado `webStorage.js` que simula SQLite usando localStorage

## 📁 **Arquivos Criados para Web:**

```
database/
├── sqlite.js       # Para mobile (original)
├── webStorage.js   # Para web (localStorage)
└── index.js        # Detector de plataforma
```

## 🎯 **Como Funciona:**

1. **No Mobile:** Usa SQLite nativo
2. **Na Web:** Usa localStorage com API idêntica
3. **App.js:** Não precisa saber a diferença!

## 🌐 **Testando na Web:**

1. Execute o comando:
   ```bash
   npx expo start --web
   ```

2. Abra o navegador (geralmente abre automaticamente)

3. Teste todas as funcionalidades:
   - ✅ Adicionar personagens
   - ✅ Recrutar/dispensar
   - ✅ Filtrar lista
   - ✅ Remover com confirmação
   - ✅ Animações e toasts

## 📱 **URLs Disponíveis:**

Após rodar `npx expo start --web`, você terá:

- **Local:** http://localhost:8081
- **Network:** http://[SEU_IP]:8081 (para outros dispositivos)

## ⚠️ **Troubleshooting:**

### Se der erro de dependências:
```bash
npm install react-dom react-native-web
npx expo start --web
```

### Se não abrir automaticamente:
- Abra manualmente: http://localhost:8081

### Para limpar cache:
```bash
npx expo start --web --clear
```

## 🎨 **Diferenças Web vs Mobile:**

| Funcionalidade | Mobile | Web |
|---|---|---|
| **Banco de Dados** | SQLite | localStorage |
| **Performance** | Nativa | Browser |
| **Ícones** | Vector Icons | Funciona |
| **Animações** | Todas | Maioria |
| **Toast** | Nativo | Simulado |

## 🚀 **Comandos Completos:**

```bash
# 1. Navegar para o projeto
cd "c:\Users\Aluno\Desktop\ativ-rpg\app-rpg"

# 2. Instalar dependências (se necessário)
npm install

# 3. Rodar na web
npx expo start --web

# 4. Ou rodar em todas as plataformas
npx expo start
```

## 📋 **Checklist Final:**

- ✅ **Database universal** configurado
- ✅ **Dependências web** instaladas
- ✅ **App.js** atualizado
- ✅ **localStorage** funcionando
- ✅ **Todas as funcionalidades** mantidas

**Status: Pronto para Web! 🌐**

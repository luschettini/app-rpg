# App RPG - Gerenciador de Personagens

Este é um aplicativo React Native para gerenciar personagens de RPG, desenvolvido como atividade acadêmica. O projeto foi refatorado de um único arquivo App.js para uma versão mais profissional e organizada.

## 🚀 Funcionalidades

- ✅ Adicionar personagens com nome e classe
- ✅ Visualizar lista de personagens em cards organizados
- ✅ Recrutar/dispensar personagens para sua equipe
- ✅ Remover personagens com confirmação
- ✅ Filtrar personagens (todos, recrutados, disponíveis)
- ✅ Persistência de dados com SQLite
- ✅ Interface moderna com React Native Paper
- ✅ Animações suaves nas transições
- ✅ Feedback visual com Toast notifications

## 📂 Estrutura do Projeto

```
app-rpg/
├── components/           # Componentes reutilizáveis
│   ├── Header.js        # Cabeçalho com filtros e estatísticas
│   ├── CharacterCard.js # Card individual do personagem
│   └── AddCharacterForm.js # Formulário de adição
├── database/            # Lógica do SQLite
│   └── sqlite.js       # Funções do banco de dados
├── utils/              # Utilitários
│   └── theme.js        # Tema customizado
├── assets/             # Recursos estáticos
├── App.js              # Arquivo principal com lógica
└── README.md           # Documentação
```

## 🎨 Melhorias Implementadas

### 1. 🔒 Modal de Confirmação para Exclusão
**O que foi feito:** Implementação de modal de confirmação antes de remover personagens.

**Por que foi feito:** Evitar exclusões acidentais que podem frustrar o usuário e causar perda de dados importantes.

**Valor agregado:** 
- Maior segurança nas operações destrutivas
- Redução de erros do usuário
- Experiência mais profissional

### 2. 🎯 Ícones Visuais por Classe
**O que foi feito:** Adição de ícones específicos para cada classe de personagem (Guerreiro, Mago, Arqueiro, Ladino, Clérigo) com cores distintivas.

**Por que foi feito:** Facilitar a identificação visual rápida das classes de personagem, tornando a interface mais intuitiva.

**Valor agregado:**
- Interface mais intuitiva e visualmente atrativa
- Identificação rápida de tipos de personagem
- Melhor organização visual da lista

### 3. 📢 Feedback Visual com Toast Notifications
**O que foi feito:** Implementação de notificações toast para todas as ações principais (adicionar, remover, recrutar, dispensar).

**Por que foi feito:** Fornecer feedback imediato e claro sobre o resultado das ações do usuário.

**Valor agregado:**
- Usuário sempre sabe se sua ação foi bem-sucedida
- Melhora a confiança na aplicação
- Experiência de usuário mais responsiva

### 4. 🔍 Sistema de Filtros Avançado (Melhoria Extra)
**O que foi feito:** Sistema completo de filtros para mostrar todos os personagens, apenas recrutados ou apenas disponíveis, com contador visual.

**Por que foi feito:** Facilitar a navegação e organização quando há muitos personagens cadastrados.

**Valor agregado:**
- Melhor organização de grandes listas
- Facilidade para encontrar personagens específicos
- Interface mais limpa e focada

### 5. ✨ Animações Suaves (Melhoria Extra)
**O que foi feito:** Animações suaves ao adicionar e remover itens da lista usando LayoutAnimation.

**Por que foi feito:** Tornar as transições mais fluidas e proporcionar uma experiência mais moderna.

**Valor agregado:**
- Interface mais polida e profissional
- Experiência visual mais agradável
- Feedback visual das mudanças na lista

### 6. 🎨 Interface Moderna com React Native Paper (Melhoria Extra)
**O que foi feito:** Substituição completa de componentes básicos por componentes da biblioteca React Native Paper.

**Por que foi feito:** Criar uma interface mais moderna, consistente e seguindo as diretrizes do Material Design.

**Valor agregado:**
- Visual mais profissional
- Consistência entre componentes
- Melhor acessibilidade

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework principal
- **Expo** - Plataforma de desenvolvimento
- **React Native Paper** - Biblioteca de componentes UI (Material Design)
- **Expo SQLite** - Banco de dados local
- **React Native Toast Message** - Notificações toast
- **Expo Vector Icons** - Ícones
- **MaterialIcons** - Ícones específicos

## 📱 Como executar o projeto

1. **Clone o repositório:**
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd app-rpg
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute o projeto:**
   ```bash
   npx expo start
   ```

4. **Execute no dispositivo:**
   - Use o app Expo Go para escanear o QR code
   - Ou execute `npx expo start --android` para emulador Android

## 🏗️ Componentização Realizada

### App.js
- Mantém apenas a lógica principal e gerenciamento de estado
- Controla navegação e coordenação entre componentes
- Gerencia modais e feedback do usuário

### Header.js
- Componente responsável pelo cabeçalho
- Exibe título, estatísticas e filtros
- Reutilizável e independente

### CharacterCard.js
- Representa cada personagem individualmente
- Inclui ações de recrutar e deletar
- Visual rico com ícones e cores por classe

### AddCharacterForm.js
- Formulário completo para adição de personagens
- Validação de entrada
- Interface moderna com menu dropdown

## 💾 Banco de Dados

O app utiliza SQLite local através do Expo SQLite, com:
- Tabela `characters` com campos: id, name, class, recruited, created_at
- Operações CRUD completas
- Persistência local dos dados

## 👥 Desenvolvedores

- **Dupla de desenvolvimento** - Atividade acadêmica
- Colaboração via repositório Git único

## 📦 Build para Produção

O APK para Android será gerado via Expo/EAS Build:

```bash
npx eas build --platform android
```

## 🎯 Critérios de Avaliação Atendidos

- ✅ **Componentização:** Separação clara em arquivos independentes
- ✅ **Biblioteca de UI:** Uso consistente do React Native Paper
- ✅ **3+ Melhorias:** Implementadas 6 melhorias funcionais/visuais
- ✅ **README.md:** Documentação completa das mudanças
- ✅ **Código Organizado:** Estrutura profissional e funcional
- ✅ **Trabalho em Dupla:** Repositório único colaborativo

---

**Versão:** 2.0.0 - Refatoração Completa
**Data:** Setembro 2025

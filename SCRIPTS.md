# 🚀 Scripts de Finalização - App RPG

## Para Windows (CMD/PowerShell):

### 1. Instalar dependências e testar:
```cmd
cd app-rpg
npm install
npx expo start
```

### 2. Gerar build Android:
```cmd
npm install -g @expo/cli
npx expo login
npx eas build --platform android --profile preview
```

### 3. Configurar Git:
```cmd
git init
git add .
git commit -m "App RPG v2.0 - Refatoração completa"
```

## Para macOS/Linux (Terminal):

### 1. Instalar dependências e testar:
```bash
cd app-rpg
npm install
npx expo start
```

### 2. Gerar build Android:
```bash
npm install -g @expo/cli
npx expo login
npx eas build --platform android --profile preview
```

### 3. Configurar Git:
```bash
git init
git add .
git commit -m "App RPG v2.0 - Refatoração completa"
```

## 📱 Testando no Dispositivo:

1. Instale o app **Expo Go** no seu smartphone
2. Execute `npx expo start`
3. Escaneie o QR code que aparece no terminal
4. Teste todas as funcionalidades:
   - ✅ Adicionar personagem
   - ✅ Recrutar/dispensar
   - ✅ Filtrar lista
   - ✅ Remover com confirmação
   - ✅ Ver animações e toasts

## 🔗 Links Úteis:

- **Expo Go (Android):** https://play.google.com/store/apps/details?id=host.exp.exponent
- **Expo Go (iOS):** https://apps.apple.com/app/expo-go/id982107779
- **Expo Account:** https://expo.dev/signup
- **GitHub:** https://github.com

## ⚠️ Troubleshooting:

### Se der erro no `npx expo start`:
```bash
npm install -g @expo/cli
expo install --fix
```

### Se der erro no build:
```bash
npx eas build --platform android --profile preview --clear-cache
```

### Se der erro de dependências:
```bash
rm -rf node_modules package-lock.json
npm install
```

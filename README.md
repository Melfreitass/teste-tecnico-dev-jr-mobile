# Perfil Dev Jr

## Descrição

Aplicativo mobile desenvolvido em React Native com Expo para apresentar meu perfil profissional como Desenvolvedora Mobile Júnior.

O aplicativo possui navegação por abas inferiores e apresenta informações sobre meu perfil, habilidades técnicas, projetos desenvolvidos e formas de contato.

---

## Tecnologias Utilizadas

- React Native
- Expo
- JavaScript
- React Navigation
- MaterialCommunityIcons
- Git
- GitHub

---

## Funcionalidades

- Navegação por abas inferiores (Bottom Tabs)
- Tela de perfil profissional
- Exibição de foto e informações pessoais
- Seção "Sobre Mim"
- Lista de habilidades utilizando FlatList
- Exibição de projetos desenvolvidos
- Acesso aos repositórios do GitHub
- Área de contato
- Campo para envio de mensagem
- Feedback visual ao enviar mensagem

---

## Telas

### Perfil

A tela de perfil apresenta:

- Nome da desenvolvedora
- Foto de perfil
- Cargo desejado
- Localização
- Instituição de ensino
- Texto de apresentação na seção "Sobre Mim"

### Habilidades

A tela de habilidades apresenta as principais tecnologias e ferramentas que utilizo durante meus estudos e projetos.

Habilidades apresentadas:

- React Native
- React
- JavaScript
- HTML
- CSS
- Git e GitHub

A lista foi implementada utilizando FlatList para melhor organização e renderização dos dados.

### Projetos e Contato

A tela de projetos apresenta projetos desenvolvidos durante minha formação.

#### TasteIt

Aplicativo de receitas que permite adicionar e remover ingredientes para personalizar receitas.

#### Tourly

Aplicativo turístico com informações sobre pontos turísticos e restaurantes.

A tela também possui:

- E-mail para contato
- GitHub
- LinkedIn
- Campo para envio de mensagem
- Botão de envio com confirmação visual

---

## Organização do Código

```txt
perfil-dev-jr/
│
├── App.js
│
├── screens/
│   ├── PerfilScreen.js
│   ├── HabilidadesScreen.js
│   └── ProjetosScreen.js
│
├── data/
│   ├── habilidades.js
│   └── projetos.js
│
├── assets/
│   └── minhaFoto.jpg
│
└── README.md
```

### Estrutura

- **App.js:** configuração da navegação por abas.
- **screens:** telas do aplicativo.
- **data:** armazenamento dos dados utilizados nas listas.
- **assets:** imagens e recursos visuais.

---

## Componentes Utilizados

Durante o desenvolvimento foram utilizados os seguintes componentes do React Native:

- View
- Text
- Image
- FlatList
- ScrollView
- TextInput
- TouchableOpacity
- Alert

---

## Diferenciais

- Interface moderna com tema escuro
- Navegação intuitiva por abas
- Organização dos dados em arquivos separados
- Abertura dos repositórios do GitHub através de links
- Feedback visual ao enviar mensagem
- Código organizado e de fácil manutenção

---

## Como Executar o Projeto

### Clonar o repositório

```bash
git clone LINK_DO_REPOSITORIO
```

### Entrar na pasta do projeto

```bash
cd perfil-dev-jr
```

### Instalar as dependências

```bash
npm install
```

### Executar o projeto

```bash
npx expo start
```

Após iniciar o Expo, o aplicativo pode ser executado através do:

- Expo Go
- Emulador Android
- Emulador iOS
- Navegador Web

---

## Autor

**Melissa Freitas**

Estudante de Desenvolvimento de Sistemas - SENAI

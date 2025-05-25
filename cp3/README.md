# RM551180 - Pedro Henrique Palladino
# RM99242 - Renato Izumi Ichikawa

## Sobre o Projeto

Projeto desenvolvido utilizando a API do DummyJson para exibir posts das categorias de História e Ficção.

**Principais funcionalidades:**
- Navegação via Drawer (Gaveta) ou Abas
- Listagem de posts por categoria
- Visualização detalhada de cada post
- Exibição de comentários em cada post

## Endpoints Utilizados

- **Posts de História:**  
  `GET https://dummyjson.com/posts/tag/history`

- **Posts de Ficção:**  
  `GET https://dummyjson.com/posts/tag/fiction`

- **Detalhes do Post:**  
  `GET https://dummyjson.com/posts/{id}`

- **Comentários do Post:**  
  `GET https://dummyjson.com/comments/post/{id}`

## Dados Exibidos

**Na listagem de posts:**
- `title` (Título)
- `reactions.likes` (Curtidas)
- `reactions.dislikes` (Descurtidas)
- `views` (Visualizações)

**Na página de detalhes:**
- Título completo
- Corpo do post
- Tags associadas
- Lista de comentários (com usuário e likes)

## Tecnologias Utilizadas

- [Expo](https://expo.dev/) - Framework para desenvolvimento mobile
- [React Navigation](https://reactnavigation.org/) - Navegação entre telas
- [FontAwesome](https://fontawesome.com/icons) - Ícones
- [Axios](https://axios-http.com/) - Cliente HTTP

## Estrutura do Projeto

src/
	api/ # Configuração da API
	Components/ # Componentes reutilizáveis
		Posts/
			List.tsx # Componente de listagem
			ListItem.tsx # Item da lista (com TouchableOpacity)
	Navigation/ # Configuração de navegação
	Screens/ # Telas da aplicação
		Fiction.tsx # Tela de posts de ficção
		History.tsx # Tela de posts de história
		PostDetail.tsx # Tela de detalhes do post
	types/ # Tipos TypeScript

## Configuração do Projeto

1. Instale as dependências:

npm install

2. Execute o projeto:

- Com Expo Go:
"npx expo start -c"

- Em dispositivo Android:
"npm run android"

- Em dispositivo iOS:
"npm run ios"

- Versão Web:
"npm run web"
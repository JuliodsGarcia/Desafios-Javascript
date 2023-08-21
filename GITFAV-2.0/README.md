# GitHub Favorites App

O GitHub Favorites App é uma aplicação web simples que permite aos usuários favoritar perfis do GitHub. A aplicação utiliza a API do GitHub para buscar informações sobre os usuários e exibi-las em uma tabela.

## Conceitos de JavaScript Utilizados

O GitHub Favorites App utiliza diversos conceitos de JavaScript para funcionar. Abaixo estão alguns dos principais conceitos empregados:

### Classes e Modularização

O projeto utiliza classes para organizar o código em módulos distintos, o que facilita a manutenção e extensão do código. A modularização permite separar as funcionalidades em arquivos diferentes, como `githubUser.js` para a busca na API do GitHub e `favorites.js` para gerenciar a lista de favoritos e a lógica associada.

### Promises e Assincronia

O JavaScript assíncrono é usado para interagir com a API do GitHub e carregar os dados dos usuários de forma não bloqueante. As Promises são utilizadas para lidar com operações assíncronas, como as requisições fetch para a API. O projeto utiliza as Promises para buscar informações dos usuários e tratar erros de forma adequada.

### Manipulação do DOM

A manipulação do Document Object Model (DOM) é essencial em aplicações web. O projeto usa JavaScript para selecionar elementos HTML, atualizar seus conteúdos e adicionar eventos de interação. A classe `FavoritesView` é responsável por manipular o DOM para exibir os favoritos na tabela e lidar com eventos de adição e remoção.

### Uso de Fetch para Requisições HTTP

A função `fetch` é utilizada para realizar requisições HTTP assíncronas à API do GitHub. Ela permite buscar informações dos usuários e receber os dados em formato JSON. O projeto demonstra como usar `fetch` para interagir com APIs externas e obter informações dinamicamente.

### Manipulação de Eventos

O projeto lida com eventos do usuário, como clique de botão e interações do mouse. Isso é feito utilizando event listeners para responder a ações específicas do usuário, como adicionar um usuário aos favoritos ou remover um usuário.

### Armazenamento Local (localStorage)

O armazenamento local é utilizado para persistir os favoritos dos usuários entre sessões. A classe `Favorites` utiliza o `localStorage` para armazenar e carregar a lista de usuários favoritados, permitindo que os dados persistam mesmo após o fechamento do navegador.

### Estilização Dinâmica

Ao passar o mouse sobre o botão "FAVORITAR", a cor do ícone da estrela SVG muda. Isso é feito através de transições de CSS que aplicam filtros ao SVG, criando uma interação visual agradável.

## Funcionalidades

- Adicione usuários do GitHub à sua lista de favoritos.
- Veja detalhes dos usuários favoritados, como nome, nome de usuário, número de repositórios e seguidores.
- Remova usuários da sua lista de favoritos.

## Como Usar

1. Clone este repositório para o seu ambiente local.
2. Abra o arquivo `index.html` em um navegador web.
3. Digite o nome de usuário do GitHub que deseja favoritar na caixa de busca e clique no botão "FAVORITAR".
4. Os usuários favoritados serão exibidos em uma tabela abaixo da barra de busca.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

## API do GitHub

A aplicação utiliza a API pública do GitHub para buscar informações de usuários. A classe `githubUser` é responsável por realizar as requisições à API.


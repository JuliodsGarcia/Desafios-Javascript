# Desafio de Catálogo de Filmes

## Introdução

Este desafio tem como objetivo praticar os conceitos aprendidos no Stage 8 de Node.js. A ideia é criar uma aplicação onde o usuário pode cadastrar um filme, preenchendo com algumas informações (nome, descrição, nota) e criando tags relacionadas a ele.

[Link do Desafio Notion](https://efficient-sloth-d85.notion.site/Aplica-o-em-Node-57bd49ae77b3422fad74f8dde0d06fef)

## Diagrama de entidade-relacionamento

Abaixo, temos um diagrama que representa o relacionamento entre as entidades da aplicação:
[Diagrama de entidade-relacionamento](https://efficient-sloth-d85.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F37f55645-bc5d-4666-8b5c-d2fba08ef73b%2FUntitled.png?table=block&id=cbf9ad4e-2f3b-4867-aace-2cedba55bc1e&spaceId=08f749ff-d06d-49a8-a488-9846e081b224&width=2000&userId=&cache=v2)

## Tabela de Usuários

| Campo         | Tipo     |
| ------------- | -------- |
| ID (PK)       | Int      |
| Nome          | String   |
| Email         | String   |
| Senha         | String   |
| Avatar        | File     |
| Criado em     | DateTime |
| Atualizado em | DateTime |

## Tabela de Notas de Filmes

| Campo           | Tipo     |
| --------------- | -------- |
| ID              | Int      |
| Título          | String   |
| Descrição       | String   |
| Classificação   | Int      |
| Usuário ID (FK) | Int      |
| Criado em       | DateTime |
| Atualizado em   | DateTime |

## Tabela de Tags de Filmes

| Campo        | Tipo   |
| ------------ | ------ |
| ID           | Int    |
| Nota ID (FK) | Int    |
| Usuário ID   | Int    |
| Nome         | String |

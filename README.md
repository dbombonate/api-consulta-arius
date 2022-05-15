<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">api-consulta-arius-usuarios</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Projeto desenvolvido em NodeJS + Typescript + Express + Prisma.
    <br>
</p>

## 📝 Conteúdo

- [Sobre](#about)
- [Para usar esse projeto](#getting_started)
- [Uso](#usage)
- [Construído com...](#built_using)
- [Autor](#authors)

## 🧐 Sobre <a name = "about"></a>

O objetivo deste projeto é consultar uma tabela específica de um banco de dados e retornar um status OK caso o usuário exista e um status Bad Request quando o usuário não existe.

Utilizei o NodeJS com Express para construir a rota de get (consulta ao banco de dados) com query params para indicar os filtros da busca.

Utilizei banco de dados MySQL pois é o banco nativo da aplicação da tabela que será consultada.

Utilizei o framework Prisma para gerar o Model e efetuar a comunicação com o banco de dados, com uso do Typescript.

## Para usar esse projeto <a name = "getting_started"></a>

As instruções abaixo vão te ajudar a fazer uma cópia e rodar esse projeto em seu próprio PC para desenvolvimento ou testes.

### Pré requisitos

Para esse projeto funcionar, é necessário ter os seguintes softwares instalados:

```
Node (versão 14.15.5);
NPM (versão 6.14.11);
MySQL Server (versão 8.0.27).
```

### Instalação

Para usar este projeto, faça um fork dele e copie o mesmo para um local de armazenamento em seu PC.

Depois de executar o clone ou fork do projeto, abra o terminal ou prompt de comandos na pasta do projeto. Você deve ter o NodeJS e o NPM instalados para executar os passos abaixo:

```
$ npm install
```

Para executar o projeto em ambiente de desenvolvimento:

```
$ npm run dev
```

Para buildar o projeto em ambiente de produção:

```
$ npm build
```

Para executar os testes unitários do projeto:

```
$ npm test
```

Este servidor trabalha apenas com rota do tipo GET, e retorna uma requisição status 200 caso o usuário informado exista ou 400 caso não exista.

## Uso <a name = "usage"></a>

Para usar o servidor, é necessário enviar via GET no endpoint 'api' os dados que deseja consultar:

```
http://localhost:3001/api/?store=1&operator=1000
```
O parâmetro store, se refere a loja de consulta e o parâmetro operator se refere ao código do operador que deseja consultar.

Através do POSTMAN ou do Insomnia é possível testar o servidor.


## ⛏️ Construído com... <a name = "built_using"></a>

- [mySQL](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Prisma](https://vuejs.org/) - DB connection Framework

## ✍️ Authors <a name = "authors"></a>

- [@dbombonate](https://github.com/dbombonate) - Ideia e Input inicial.

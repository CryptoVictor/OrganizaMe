<p align="center">
  <img src="https://plum-atomic-lemur-391.mypinata.cloud/ipfs/bafkreicudnxlegrxksz365otm67naoqh2jidbnfibziaavwtn7qj6sc5f4" alt="Logo">
</p>

<br/>

# Projeto Individual Integrado - Módulo 2025-1B

<!-- ÍNDICE --> 
<details> 
  <summary>Índice</summary> 
  <ol> 
    <li> 
      <a href="#descricao">Descrição</a> 
      <ul> 
    <li>
      <a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a>
    </li> 
      </ul> 
    </li> 
    <li> 
      <a href="#primeiros-passos">Primeiros Passos</a> 
      <ul> 
        <li>
          <a href="#pré-requisitos">Pré-requisitos</a>
        </li> 
        <li>
          <a href="#instalação">Instalação</a>
        </li> 
        <li>
          <a href="#utilização">Utilização</a>
        </li> 
      </ul> 
    </li> 
    <li>
      <a href="#contribuindo">Contribuição</a>
    </li> 
    <li>
      <a href="#licença">Licença</a>
    </li> 
  </ol> 
</details>

# Descrição

O OrganizaMe trata-se de um site desenvolvido com o objetivo de facilitar o agendamento e a gestão de reservas de salas de forma simples, prática e eficiente. A plataforma permite ao usuário adicionar, modificar, editar e visualizar todas as informações relacionadas às reservas, com uma interface intuitiva e acessível, pensada para otimizar a experiência do usuário. Os dados são integrados diretamente a um banco de dados, garantindo atualização em tempo real e maior confiabilidade nas informações exibidas. Isso contribui para uma melhor organização e planejamento tanto por parte dos administradores do sistema quanto dos usuários que desejam reservar uma sala para seus compromissos. Com esse sistema, torna-se muito mais fácil evitar conflitos de horários, acompanhar a disponibilidade de espaços e manter um controle eficaz sobre o uso das salas, promovendo maior produtividade e organização.

# Tecnologias Utilizadas

![EJS](https://img.shields.io/badge/ejs-%23B4CA65.svg?style=for-the-badge&logo=ejs&logoColor=black)  
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)     
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)  
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) 
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

# Primeiros Passos

## Estrutura de Pastas

````bash
OrganizaMe-master/
│
├── config/                # Arquivos de configuração (ex: conexão com banco)
├── controllers/           # Lógica de controle das requisições
├── models/                # Definição de modelos de dados (estrutura do banco)
├── routes/                # Definição das rotas do sistema
├── services/              # Serviços auxiliares do sistema
├── assets/                # Arquivos públicos como imagens e fontes
├── scripts/               # Arquivos públicos de código
├── tests/                 # Arquivos de testes unitários
├── views/                 # Definição da visualização do sistema
│   └── components/        # Componentes usados nas páginas HTML (EJS)
│   ├── css/               # Estilização do site
│   ├── layout/            # Estrutura principal HTML (EJS) utilizada no sistema
│   ├── partials/          # Estruturas pré salvas usadas nas páginas HTML (EJS)
│   └── pages/             # Código HTML (EJS) das páginas
├── .gitignore             # Arquivo para ignorar arquivos no Git
├── .env.example           # Arquivo de exemplo para variáveis de ambiente
├── jest.config.js         # Arquivo de configuração do Jest
├── package-lock.json      # Gerenciador de dependências do Node.js
├── package.json           # Gerenciador de dependências do Node.js
├── readme.md              # Documentação do projeto (Markdown)
├── server.js              # Arquivo principal que inicializa o servidor
├── app.js                 # Arquivo que inicializa o sistema
└── rest.http              # Teste de endpoints (opcional)
````

## Pré Requisitos

Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas:

- [Node.js](https://nodejs.org/) (versão recomendada: LTS)
- [npm](https://www.npmjs.com/)

Além disso, é recomendável usar um editor de código, como o [Visual Studio Code](https://code.visualstudio.com/).

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/CryptoVictor/OrganizaMe.git
```

2. Acesse a pasta do projeto:

```bash
cd OrganizaMe-master
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm start
```

## Utilização

1. Configure o .env:

```bash
DB_NAME='nome_do_banco'
DB_USER='seu_usuario'
DB_HOST='localhost
DB_PASSWORD='sua senha'
DB_PORT=0000
```

2. Execute o servidor:

```bash
node server.js
```

3. Acesso as API's:

```bash
http://localhost:3000/api
```

4. Endpoints Disponíveis:

```bash
Usuários

POST /usuarios → Cria um usuário
GET /usuarios → Lista todos os usuários
PUT /usuarios/:id → Atualiza um usuário
DELETE /usuarios/:id → Exclui um usuário
```

```bash
Salas

POST /salas → Cria uma nova sala
GET /salas → Lista todas as salas
PUT /salas/:id → Edita uma sala
DELETE /salas/:id → Exclui uma sala
```

```bash
Reservas

POST /reservas → Cria uma reserva
GET /reservas → Lista todas as reservas
PUT /reservas/:id → Atualiza uma reserva
DELETE /reservas/:id → Remove uma reserva
```

# Contribuição

Código feito por Victor Garcia Dos Santos

# Licença

<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/Intelihub/Template_M1">MODELO GIT INTELI</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/Intelihub/Template_M1">Inteli, Victor Garcia Dos Santos</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International</a>.</p>

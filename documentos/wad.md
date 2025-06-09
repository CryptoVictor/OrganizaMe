<p align="center">
  <img src="https://plum-atomic-lemur-391.mypinata.cloud/ipfs/bafkreicudnxlegrxksz365otm67naoqh2jidbnfibziaavwtn7qj6sc5f4" alt="Logo">
</p>

<br/>

# Web Application Document - Projeto Individual - Módulo 2 - Inteli

## Nome do Projeto

OrganizaMe

#### Autor do projeto

Victor Garcia Dos Santos

## Sumário

1. [Introdução](#c1)  
2. [Visão Geral da Aplicação Web](#c2)  
3. [Projeto Técnico da Aplicação Web](#c3)  
4. [Desenvolvimento da Aplicação Web](#c4)  
5. [Referências](#c5)  

<br>

## <a name="c1"></a>1. Introdução (Semana 01)

Trata-se de um site desenvolvido com o objetivo de facilitar o agendamento e a gestão de reservas de salas de forma simples, prática e eficiente. A plataforma permite ao usuário adicionar, modificar, editar e visualizar todas as informações relacionadas às reservas, com uma interface intuitiva e acessível, pensada para otimizar a experiência do usuário. Os dados são integrados diretamente a um banco de dados, garantindo atualização em tempo real e maior confiabilidade nas informações exibidas. Isso contribui para uma melhor organização e planejamento tanto por parte dos administradores do sistema quanto dos usuários que desejam reservar uma sala para seus compromissos. Com esse sistema, torna-se muito mais fácil evitar conflitos de horários, acompanhar a disponibilidade de espaços e manter um controle eficaz sobre o uso das salas, promovendo maior produtividade e organização.

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01)

![persona](https://plum-atomic-lemur-391.mypinata.cloud/ipfs/bafybeiandnjblivvjlqrqpeeqwbrium7jbqotspzftdysxftzvrei4bi4m)

### 2.2. User Stories (Semana 01)

> US01 | Como estudante universitária, quero ver quais salas estão disponíveis para agendamento em tempo real, para que eu possa reservar sem problemas e sem burocracia.

**I – Independente** -> A história pode ser desenvolvida e testada de forma independente, sem depender de outros recursos ou funcionalidades.


**N – Negociável** -> A funcionalidade de visualização em tempo real pode ser negociada em termos de detalhes (exemplo: tempo de atualização da disponibilidade, outras opções de visualização), mas o objetivo principal de ver a disponibilidade permanece.


**V – Valiosa** -> A funcionalidade de ver as salas em tempo real agrega valor direto à experiência do usuário, permitindo agendamentos rápidos e sem frustrações.


**E – Estimável** -> A complexidade de implementar a visualização em tempo real pode ser estimada, com base na integração com o sistema de agendamento e no tempo de resposta necessário.


**S – Pequena (Small)** -> A história é pequena o suficiente para ser concluída em um ciclo de desenvolvimento curto, como uma sprint de uma semana, focando na funcionalidade principal de visualização.


**T – Testável** -> A funcionalidade pode ser testada facilmente, verificando se a disponibilidade das salas é atualizada corretamente em tempo real, sem erros.


> US02 | Como estudante universitária, quero remover reservas individuais que fiz para sala desde que sejam antes da hora atribuida ao agendamento, para que eu não tenha dor de cabeça caso algo saia diferente do planejado na minha rotina.

> US03 | Como estudante universitária, quero editar informações referentes as reservas de forma simples, fácil e transparente, para que assim as informações estejam sempre atualizadas com as minhas necessidades.

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados  (Semana 3)

````bash

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    papel VARCHAR(20) DEFAULT 'usuario',
    criado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE salas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    localizacao VARCHAR(255),
    capacidade INT,
    descricao TEXT,
    disponivel BOOLEAN DEFAULT TRUE,
    criado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE reservas (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id) ON DELETE CASCADE,
    sala_id INT REFERENCES salas(id) ON DELETE CASCADE,
    data_inicio TIMESTAMP NOT NULL,
    data_fim TIMESTAMP NOT NULL,
    status VARCHAR(20) DEFAULT 'ativa',
    observacoes TEXT,
    criado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE logs (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id),
    acao VARCHAR(255) NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
````

<p align="center">
  <img src="https://plum-atomic-lemur-391.mypinata.cloud/ipfs/bafkreig2klbdk4nmmej4o66dchlue7t6644wegvnh5yaqcs347652coufq" alt="Logo">
</p>

### 3.1.1 BD e Models (Semana 5)

## Models Implementados

### 1. Usuario

Representa os usuários do sistema.

**Campos:**
- `id`: SERIAL PRIMARY KEY  
- `nome`: VARCHAR(100) NOT NULL  
- `email`: VARCHAR(100) UNIQUE NOT NULL  
- `senha`: VARCHAR(255) NOT NULL  
- `papel`: VARCHAR(20) DEFAULT 'usuario'  
- `criado`: TIMESTAMP DEFAULT CURRENT_TIMESTAMP  

---

### 2. Sala

Representa as salas que podem ser reservadas.

**Campos:**
- `id`: SERIAL PRIMARY KEY  
- `nome`: VARCHAR(100) NOT NULL  
- `localizacao`: VARCHAR(255)  
- `capacidade`: INT  
- `descricao`: TEXT  
- `disponivel`: BOOLEAN DEFAULT TRUE  
- `criado`: TIMESTAMP DEFAULT CURRENT_TIMESTAMP  

---

### 3. Reserva

Representa as reservas realizadas pelos usuários.

**Campos:**
- `id`: SERIAL PRIMARY KEY  
- `usuario_id`: INT REFERENCES usuarios(id) ON DELETE CASCADE  
- `sala_id`: INT REFERENCES salas(id) ON DELETE CASCADE  
- `data_inicio`: TIMESTAMP NOT NULL  
- `data_fim`: TIMESTAMP NOT NULL  
- `status`: VARCHAR(20) DEFAULT 'ativa'  
- `observacoes`: TEXT  
- `criado`: TIMESTAMP DEFAULT CURRENT_TIMESTAMP  

---

### 4. Log

Registra ações realizadas por usuários no sistema.

**Campos:**
- `id`: SERIAL PRIMARY KEY  
- `usuario_id`: INT REFERENCES usuarios(id)  
- `acao`: VARCHAR(255) NOT NULL  
- `timestamp`: TIMESTAMP DEFAULT CURRENT_TIMESTAMP  

### 3.2. Arquitetura (Semana 5)

[**Figma**](https://www.figma.com/design/JTSL0VSAn0bQ7BDvlIRigA/Diagrama-MVC?node-id=0-1&t=9mAVGWzksHznQMRD-1)

![arquitetura](https://plum-atomic-lemur-391.mypinata.cloud/ipfs/bafybeiab4tvr6rbic467svr5g7wgl7jeryqsj5vrs3haalh324wu4ns25u)

### 3.3. Wireframes (Semana 03)

[**Figma**](https://www.figma.com/design/ny07wDWEYOBwBMXCgccSbo/Wireframe---OrganizaMe?node-id=0-1&t=qbXe4yQF0eKmbb6S-1)

Tela Principal de Uso -> Aqui será possível acessar o histórico de reservas feitas anteriormente, e fazer novas reservas, além de ver as que já estão em andamento.

<p align="center">
  <img src="https://plum-atomic-lemur-391.mypinata.cloud/ipfs/bafkreiczpclegag6ipre2izngii4adqtcxb7pfbh3tmvfswxzzmt4kbks4" alt="Logo">
</p>

User Story 1 -> Aqui no User Story 1, é a tela que aparecerá depois de você clicar na tela principal de usuário que você deseja reservar uma nova sala, ele mostrará salas livres e ocupadas para que você possa selecionar alguma livre.

<p align="center">
  <img src="https://plum-atomic-lemur-391.mypinata.cloud/ipfs/bafkreig24ndascc6u3ef43yrkbzqykjaqjms2h5a67ks5cfmftxzc4iu5m" alt="Logo">
</p>

User Story 2 & 3 -> Aqui no User Story 2 & 3 será a tela que será redirecionado caso você na tela principal de usuário clique em editar reserva, aqui você tanto poderá deletar/cancelar sua reserva como você poderá também editar informações, como nome, motivo, entre outros.

<p align="center">
  <img src="https://plum-atomic-lemur-391.mypinata.cloud/ipfs/bafkreid3nkmvnszotnl224nojp246wjg7p4icabe2w647f5vrffgqsibym" alt="Logo">
</p>

### 3.4. Guia de estilos (Semana 05)

[**Figma**](https://www.figma.com/design/ny07wDWEYOBwBMXCgccSbo/Design---OrganizaMe?node-id=0-1&t=rrW3fGv0XVZAzpGn-1)

<p align="center">
  <img src="https://plum-atomic-lemur-391.mypinata.cloud/ipfs/bafkreicjf3kj5jafpyaqmiqm5un5ro5v4iuwu633gdwrucl4u5myi2ebue" alt="GuiaEstilo">
</p>

### 3.5. Protótipo de alta fidelidade (Semana 05)

[**Figma**](https://www.figma.com/design/ny07wDWEYOBwBMXCgccSbo/Design---OrganizaMe?node-id=0-1&t=rrW3fGv0XVZAzpGn-1)

### Tela Principal de Uso

<p align="center">
  <img src="https://plum-atomic-lemur-391.mypinata.cloud/ipfs/bafkreifoetwt4eij5dhypw5tv3lzeylrzrftd7phrvg6np24sye6jxg5ba" alt="TelaPrincipal">
</p>

### User Story 1

<p align="center">
  <img src="https://plum-atomic-lemur-391.mypinata.cloud/ipfs/bafkreiaqlqq22mn6mxyzdvamwv4hc4nkr2cakiwfvtxupikse3ngks2uvq" alt="UserStory1">
</p>

### User Story 2 & 3

<p align="center">
  <img src="https://plum-atomic-lemur-391.mypinata.cloud/ipfs/bafkreidwtm2zd4rob44xi2ijoyubvilywb5jjvsxbhwbnjny4vbnohpzri" alt="UserStory23">
</p>

### 3.6. WebAPI e endpoints (Semana 05)

### Usuários

- **GET /usuarios**
  - Lista o frontend dos dados relacionados ao usuário.
    
- **POST api/usuarios**
  - Cria um novo usuário.
  - Body: `{ nome, email, senha, papel? }`

- **GET api/usuarios**
  - Lista todos os usuários.

- **PUT api/usuarios/:id**
  - Atualiza os dados de um usuário.
  - Body: `{ nome?, email?, senha?, papel? }`

- **DELETE api/usuarios/:id**
  - Remove um usuário do sistema.

---

### Salas

- **GET /salas**
  - Lista o frontend dos dados relacionados a sala.
  - 
- **POST api/salas**
  - Cria uma nova sala.
  - Body: `{ nome, localizacao, capacidade, descricao, disponivel? }`

- **GET api/salas**
  - Lista todas as salas.

- **PUT api/salas/:id**
  - Edita os dados de uma sala.
  - Body: `{ nome, localizacao, capacidade, descricao, disponivel }`

- **DELETE api/salas/:id**
  - Exclui uma sala.

---

### Reservas

- **GET /reservas**
  - Lista o frontend dos dados relacionados as reservas
    
- **POST api/reservas**
  - Cria uma nova reserva.
  - Body: `{ usuario_id, sala_id, data_inicio, data_fim, observacoes? }`

- **GET api/reservas**
  - Lista todas as reservas.

- **PUT api/reservas/:id**
  - Edita uma reserva existente.
  - Body: `{ usuario_id?, sala_id?, data_inicio?, data_fim?, status?, observacoes? }`

- **DELETE api/reservas/:id**
  - Exclui uma reserva.

---

### 3.7 Interface e Navegação (Semana 07)

A Interface e Navegação foram desenvolvidas utilizando **HTML com EJS**, **CSS customizado** e integração direta com os controllers por meio de rotas Express. A estrutura principal conta com um arquivo `index.ejs`, que serve como página inicial e redireciona para as páginas de **Usuários**, **Reservas** e **Salas**, facilitando a navegação no sistema.

### Arquivo `index.ejs`

O `index.ejs` é a página inicial do sistema, contendo botões que redirecionam para as rotas de usuários, reservas e salas. Dessa forma, o usuário pode acessar facilmente cada módulo.

Imagem ilustrativa da página inicial:
![Index - Página Inicial](https://plum-atomic-lemur-391.mypinata.cloud/ipfs/bafkreibnjfdhgzdqhgnbmabllol4afgb5nnnzhntveaz7ip5tr3ibibudy)

---

### Módulo de Usuários (`/usuarios`)

**Funcionalidades e estrutura:**

* Formulário para cadastro de usuários com campos para nome, email, senha e papel.
* Lista dinâmica de usuários exibida em cards estilizados.
* Botões para editar e excluir usuários, com ações integradas ao controller via chamadas `PUT` e `DELETE`.
* Layout limpo e funcional, utilizando CSS para melhor visualização e usabilidade.

Imagem da tela de usuários:
![Tela de Usuários](https://plum-atomic-lemur-391.mypinata.cloud/ipfs/bafkreih6l4rbnovrkdti6dtvvs3tsnbhr2c74bpmhzlm4tu52ku7w73loq)

---

### Módulo de Reservas (`/reservas`)

**Funcionalidades e estrutura:**

* Formulário para adicionar novas reservas.
* Cada reserva é exibida em um card com detalhes e opções para editar e excluir.
* Botões estilizados para ações rápidas.
* Comunicação com o backend para persistência de dados e atualização da interface em tempo real.

Imagem da tela de reservas:
![Tela de Reservas](https://plum-atomic-lemur-391.mypinata.cloud/ipfs/bafkreiaujfag4injj3rgschghf3zd4wsqme7jmc5vr4lduk46mv2xx23ei)

---

### Módulo de Salas (`/salas`)

**Funcionalidades e estrutura:**

* Interface similar aos outros módulos para manter uniformidade visual.
* Cadastro de salas e listagem em cards.
* Opções para editar e excluir salas, com atualização dinâmica via rotas.

Imagem da tela de salas:
![Tela de Salas](https://plum-atomic-lemur-391.mypinata.cloud/ipfs/bafkreifaibgn35recyug7d7xa3vpn3k2o66piciuk6wxrvsxshsesrrelm)

---

### Estilização (CSS)

O CSS do sistema foi desenvolvido para proporcionar uma experiência visual limpa e consistente em todos os módulos:

* Cards com bordas arredondadas, sombra suave e espaçamento adequado.
* Botões com cores distintas para ações diferentes (editar, excluir, adicionar).
* Layout responsivo básico para visualização em telas variadas.
* Uso de fontes legíveis e organização clara dos elementos na tela.

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

*VIDEO: Insira o link do vídeo demonstrativo nesta seção*
*Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

*Indique pontos fortes e pontos a melhorar de maneira geral.*
*Relacione também quaisquer outras ideias que você tenha para melhorias futuras.*



## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que seu parceiro possa consultar caso ele se interessar em aprofundar. Um exemplo de referência de livro e de site:_<br>

---
---

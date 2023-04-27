# Microsserviço C

Neste microsserviço, são acessadas três bases de dados externas (A, B e C) para consulta e processamento de informações.

## Pré-requisitos

Certifique-se de ter os seguintes itens instalados em seu ambiente de desenvolvimento:

* Node.js (v12 ou superior)
* Docker

## Configuração do Redis
O Microsserviço C utiliza o Redis como banco de dados para armazenar os eventos relacionados a CPFs. Para executar o Redis localmente, você pode usar o Docker executando o seguinte comando: `docker run --name redis-cache -p 6379:6379 -d redis`

## Instalação

1. Faça o clone deste repositório para o seu ambiente local.

2. No diretório raiz do projeto, execute o comando `npm install` para instalar as dependências.

## Utilização

1. No diretório raiz do projeto, execute o comando `npm start` para iniciar o microsserviço.

2. O microsserviço estará disponível na porta `5000`.

## Endpoints

Aqui estão os endpoints disponíveis no Microsserviço C:

- `POST /evento` - Cria um novo evento na base de dados C. Os dados do evento devem ser enviados no corpo da requisição. Exemplo de corpo de requisição:

  ```json
  {
    "cpf": "12345678900",
    "ultimaConsulta": "2023-04-26",
    "movimentacaoFinanceira": 1000.0,
    "ultimaCompra": "2023-04-20"
  }
  ```

- `GET /evento/:cpf` - Consulta um evento na base de dados C pelo CPF. Substitua `:cpf` pelo CPF desejado na URL.

3. Utilize o `Postman` ou outra ferramenta similar para testar os endpoints.

## Estrutura do Projeto
O projeto segue a seguinte estrutura:

* `controllers/eventoController.js`: Controlador responsável por lidar com as requisições relacionadas a eventos.
* `models/Evento.js`: Definição do modelo de evento.
* `routes/eventoRoutes.js`: Definição das rotas relacionadas a eventos.
* `index.js`: Arquivo principal que inicia o servidor do microsserviço.
* `package.json`: Arquivo de configuração do projeto.

## Dependências

- `express: ^4.18.2`
- `nodemon: ^2.0.22`
- `redis: ^4.6.5`
- `cpf: ^2.0.2`

Certifique-se de ter o `Redis` em execução antes de iniciar o microsserviço.

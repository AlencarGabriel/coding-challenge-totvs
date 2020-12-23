# Resolução Coding Challenge TOTVS

## Resolução
Foi desenvlvido um projeto de Micro Serviço usando NodeJS com AdonisJS (backend) e outro utilizando Angular e PO-UI (frontend).

O build dos projetos será feito utilizando Docker. Os orquestradores de cada projeto estão em seus respectivos repositórios.

URL dos repositórios:
- Back: [https://github.com/AlencarGabriel/coding-challenge-totvs](https://github.com/AlencarGabriel/coding-challenge-totvs)
- Front: [https://github.com/AlencarGabriel/coding-challenge-totvs-front](https://github.com/AlencarGabriel/coding-challenge-totvs-front)

## Pré-Requisitos
- Docker
- Docker Compose

## Validação

### Build:
- Clonar cada repositório acima em um diretório local;
- Executar o `docker-compose up` em cada repositório clonado, para que o Docker faça o build das imagens e suba os serviços necessários.

### Tests:
- No projeto do backend foi implementado um container a parte (app_tests) que tem a finalidade apenas de executar os testes;
- Ao subir os containers, o orquestrador irá automaticamente realizar a execução das migrations necessárias e subirá o server. Depois irá subir o container e realizar os testes (unitários e funcionais);
- Para forçar os testes do backend, basta no CLI do container **app_api** executar o comando `npm test`;

> Obs.: Caso os testes sejam executados mais de uma vez, alguns apresentarão erros, pois inserem os mesmos dados e os modelos validam duplicidades.

- No projeto front, basta acessar a URL [localhost:4200](http://localhost:4200) e será apresentado uma simples listagem dos registros adicionados;

### Testando API:
- Foi implementado conforme solicitado os endpoints `POST /env/create` e `GET /envs`;
- A URL base da API é [localhost:3333/](http://localhost:3333) e a resposta é estruturada conforme documentação do PO-UI;
- Exemplo de consumo do endpoint `POST /env/create` (Criar um ambiente):
`POST http://localhost:3333/env/create`

    Corpo da requisição:
    ```json
    {
        "user": "UserTeste",
        "version": "12.1.27",
        "db_type": "oracle"
    }
    ```

    O Retorno será o modelo adicionado contendo o código do serviço gerado:

    ```json
    {
        "user": "UserTeste",
        "version": "12.1.27",
        "db_type": "oracle",
        "service_code": "48",
        "id": 3,
        "_messages": [
            {
                "code": "201",
                "message": "Ambiente inserido",
                "type": "success"
            }
        ]
    }
    ```

    Em caso de exceptions ou violações de negócio, será sempre retornado o HTTP Status 500 contendo a descrição dos erros.

- Exemplo de consumo do endpoint `GET /envs` (Listar ambientes criados):
    `GET http://localhost:3333/envs`
    ```json
    {
        "items": [
            {
                "id": 1,
                "user": "UserTest1",
                "version": "12.1.27",
                "db_type": "oracle",
                "service_code": "60"
            },
            {
                "id": 2,
                "user": "UserTest1",
                "version": "12.1.27",
                "db_type": "postgres",
                "service_code": "3"
            },
            {
                "id": 3,
                "user": "UserTeste",
                "version": "12.1.27",
                "db_type": "oracle",
                "service_code": "48"
            }
        ],
        "hasNext": false
    }
    ```

- Regras de negócio aplicadas:
  - Não permite mais de 2 ambientes por usuário;
  - Só permite informar os seguintes banco de dados: **oracle** ou **postgres**.

## Considerações finais
- Foi implementado a API usando o Framework AdonisJS, por ser um framework robusto e que facilita a implementação de APIs, criação de base de dados e manipulação de dados;
- No front foi utilizado o Angular com PO-UI por conta da diversidade de componentes que esse framework possui e da facilidade de implementação de um simples front para consumo de uma API;
- Como não foi disponibilizado o executável para manipulação dos ambientes Protheus, foi implementado uma simples classe de serviço que retorna um código randômico (simulando que foi gerado um ambiente Protheus e retornado o código).

## Contatos:
```json
{
    "mail": "pixcel97@gmail.com",
    "skype": "G.Webmaster",
    "fone_whats": "(27) 9 9573-3105",
    "obs": "Fico a disposição para maiores esclarecimentos"
}
```
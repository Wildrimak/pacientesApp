# Para iniciar a aplicação com tudo ok

## Utilizando o Json Server de https://github.com/typicode/json-server faça:

## Instalação

Instale o JSON Server com o comando

```
npm install -g json-server
```

## Crie um arquivo chamado ```pacientes.json```

## Insira nesse arquivo o seguinte codigo:

```
{
  "pacientes": [
    {
      "id": 1,
      "nome": "Wildrimak",
      "endereco": "Rua Odonto Ferreira Lopes",
      "cidade": "Teresina",
      "estado": "Piauí",
      "telefone": "999123456",
      "email": "wildrimak@gmail.com",
      "cpf": "06192856303",
      "senha": "12345",
      "nome_mae": "Elzinilda",
      "nome_pai": "",
      "numero_carteira": "20161ads0392"
    }
  ],
  "planos": [
    {
      "id": 1,
      "nome": "Saúde conforto"
    },
    {
      "id": 2,
      "nome": "Vida feliz"
    }
  ],
  "convenios": [
    {
      "id_plano": 1,
      "id_paciente": 1
    },
    {
      "id_plano": 1,
      "id_paciente": 2
    }
  ]
}
```
E por fim execute o comando: ```json-server --watch pacientes.json --port 8888``` e terás uma API funcional

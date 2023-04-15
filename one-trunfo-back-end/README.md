
# Socials - Project

Projeto especial de criação de uma pagina web com cadastro e login, autenticação. Ainda em progresso, o objetivo final é alcançar uma pagina web de social media completa, e responsiva. Toda ajuda é bem vinda.

## Instalação

Primeiro passo é subir o container, para isso precisará chegar na pasta de back end.
Use:
```bash
cd one-trunfo-back-end
docker-compose up -d
```

##

Depois, inicie o ambiente

```bash
  docker exec -it "nome do projeto no docker-compose.yml" bash
```

##

Dentro do ambiente

```bash
npm run restore && npm run dev 
```

You are good to go now

##

## Documentação da API

#### Retorna token de login e imagem de perfil do usuario

```http
  POST /login
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `body_email` | `string` | **Obrigatório**. O email da sua conta criada |
| `body_password` | `string` | **Obrigatório**. A senha da sua conta |


#### Cadastra um novo usuario

```http
  POST /user
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` | **Obrigatório**. O email da conta que você quer |
| `password`      | `string` | **Obrigatório**. A Senha da conta que você quer |
| `displayName`      | `string` | **Obrigatório**. O nome da conta que você quer que apareça |
| `image`      | `formData` | **Não Obrigatório**. A imagem da conta que você quer de perfil |



# Caderno de Anotações

Bem-vindo ao Caderno de Anotações, um aplicativo simples para fazer anotações!

## Backend

Antes de iniciar o servidor backend, você precisará configurar a conexão com o banco de dados MongoDB. Siga estas etapas:

1. Certifique-se de que o MongoDB esteja instalado em sua máquina ou em um servidor remoto.
2. Crie um arquivo de configuração para as variáveis de ambiente do seu projeto, por exemplo, `.env`.
3. Dentro deste arquivo, defina as informações de conexão com o banco de dados da seguinte maneira:

   ```env
   DB_CONNECTION_STRING=your_mongodb_connection_string_here
   ```

O backend deste projeto é responsável por fornecer os serviços necessários para gerenciar suas anotações. Ele foi construído usando Node.js e Express.js e utiliza o MongoDB como banco de dados. Abaixo, você encontrará informações relevantes sobre o backend:

### Dependências

- `cors` (v2.8.5) - Middleware para habilitar requisições HTTP entre diferentes origens (CORS).
- `express` (v4.18.2) - Framework para construção de aplicativos web em Node.js.
- `mongoose` (v7.4.1) - Biblioteca para modelagem de objetos MongoDB.
- `nodemon` (v3.0.1) - Utilizado para reiniciar automaticamente o servidor durante o desenvolvimento.

### Como Iniciar o Backend

Para iniciar o servidor backend, execute o seguinte comando:

```bash
npm run dev


Isso iniciará o servidor e permitirá que você comece a usar o Caderno de Anotações.

Frontend

O frontend deste projeto é responsável por fornecer uma interface de usuário amigável para criar e visualizar suas anotações. Ele foi construído usando React.js e utiliza várias bibliotecas e dependências para uma experiência de usuário agradável. Abaixo, você encontrará informações relevantes sobre o frontend:

Dependências


@mui/material (v5.14.8) - Biblioteca de componentes para criar uma interface de usuário bonita.
axios (v1.5.0) - Biblioteca para fazer requisições HTTP ao backend.
react (v18.2.0) - Biblioteca principal para construir interfaces de usuário em React.
react-dom (v18.2.0) - Renderizador React para a web.
E outras bibliotecas e dependências necessárias.


Como Iniciar o Frontend
Para iniciar o servidor de desenvolvimento do frontend, execute o seguinte comando

npm start

Isso iniciará o servidor de desenvolvimento e abrirá o Caderno de Anotações em seu navegador.


Contribuição
Este projeto é de código aberto, e as contribuições são bem-vindas! Sinta-se à vontade para criar problemas, propor melhorias e enviar solicitações de recebimento.

```

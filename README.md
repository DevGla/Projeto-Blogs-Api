# Boas-vindas ao repositório do projeto API de Blogs!

Neste projeto foi desenvolvido uma API e um banco de dados para a produção de conteúdo para um blog!

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste, qualquer dúvida sinta-se a vontade para entrar em contao comigo. VQV!

Consulte **Instalação** para saber como implantar o projeto.

### 🔧 Instalação

> É necessário ter Docker na sua máquina local para executar os seguintes comandos.

  **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**

- Rode os serviços `node` e `db` com o comando `docker-compose up -d`.
- Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`).

- Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`.
- A partir daqui você pode rodar o container `blogs_api` via CLI ou abri-lo no VS Code.

- Use o comando `docker exec -it blogs_api bash`.
- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

- Use comando `npm start` na raiz do projeto.
- Ele vai subir sua API na porta `3000`

## 🛠️ Construído com

* [Express](https://expressjs.com/pt-br/)
* [Node](https://nodejs.org/pt-br/docs/)
* [Sequelize](https://sequelize.org/)
  

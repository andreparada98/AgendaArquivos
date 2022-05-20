const express = require('express')      // Importação do Express
const db = require('./config/dbConnect')    // Importação do Banco na nuvem
const cors = require('cors')            // Importação do Cors
const routes = require('./routes')

db.on("error", console.log.bind(console, 'Erro de conexão'))  // caso aconteça erro, dirá no terminal.
db.once("open", () => {
    console.log("Conexão com o banco estabelecida com suceso")
})  // Abre conexão com o banco

const app = express();

app.use(
    cors(),             //Habilita o cors
    express.json()      //Diz para o Express que usaremos a estrutura Json
)

routes(app)

module.exports = app
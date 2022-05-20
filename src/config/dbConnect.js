const mongoose = require("mongoose");  // importação do mongoose

mongoose.connect("mongodb+srv://andre:123@agendamentocovid19.edb2x.mongodb.net/AgendamentoCovid19") // conexão com o Banco
let db = mongoose.connection;

module.exports = db     // Exporta o módulo do banco


const app = require('./src/app')

const port = process.env.port || 4000

app.listen(port, () => {                                          // Chama o arquivo App.JS e escuta ele.
    console.log(`Servidor escutando em http://localhost:${port}`)   
});


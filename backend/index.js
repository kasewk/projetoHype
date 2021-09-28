const express = require('express')
const cors = require('cors')
const app = express()

const apiPredios = require('./api/predios')
const apiApartamento = require('./api/apartamentos')


app.use(cors())
app.use(express.json())


app.route('/predios')
    .get(apiPredios.buscarPredios)
    .put(apiPredios.adicionarPredio)

app.route('/predios/:id')
    .get(apiPredios.buscarApartamentosPorPredio)
    .delete(apiPredios.deletarPredio)

app.route('/apartamentos')
    .put(apiApartamento.adicionarApartamentos)

app.route('/apartamentos/:id')
    .delete(apiApartamento.deletarApartamentos)


app.listen(4000, () => console.log('Backend executando...'))
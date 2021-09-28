const { verificaEstaPreenchido, verificaEstaVazio } = require('../helpers/validacao')
const bancoDeDados = require('../config/db')


function buscarPredios(req, res) {
    bancoDeDados('predios')
        .select('id', 'nome', 'sigla', 'endereco', 'cidade', 'estado', 'apartamentos')
        .then(resultado => res.json(resultado))
        .catch(err => res.status(500).send(err))
}

async function buscarApartamentosPorPredio(req, res) {

    let obj = { predio: {}, apartamentos: [] }

    await bancoDeDados('apartamentos').where({ "id_predio": req.params.id })
        .then(apartamentos => obj.apartamentos = apartamentos)
        .catch(err => res.status(500).send(err))

    await bancoDeDados('predios').where({ id: req.params.id }).first()
        .then(predio => obj.predio = predio)

    res.json(obj)
}

function adicionarPredio(req, res) {
    const predio = { ...req.body }

    try {
        verificaEstaPreenchido(predio.nome, 'Erro - Nome incorreto!')
        verificaEstaPreenchido(predio.sigla, 'Erro - Sigla incorreto!')
        verificaEstaPreenchido(predio.endereco, 'Erro - Endereco incorreto!')
        verificaEstaPreenchido(predio.cidade, 'Erro - Cidade incorreto!')
        verificaEstaPreenchido(predio.estado, 'Erro - Estado incorreto!')
        verificaEstaPreenchido(predio.apartamentos, 'Erro - Apartamentos incorretos!')

        bancoDeDados('predios').insert(predio)
            .then(() => res.status(204).send())
            .catch(err => res.status(500).send(err))
    } catch (erro) {
        res.status(400).send(erro)
    }

}

async function deletarPredio(req, res) {

    try {
        let apartamentosVinculados = await bancoDeDados('apartamentos').where({ "id_predio": req.params.id })
        try {
            verificaEstaVazio(apartamentosVinculados, 'O prédio possui apartamentos vinculados')
        } catch (erro) {
            return res.status(400).send(erro)
        }
        const linhasDeletadas = await bancoDeDados('predios').where({ id: req.params.id }).del()
        verificaEstaPreenchido(linhasDeletadas, 'O prédio não foi encontrado')
        res.status(204).send()
    } catch (erro) {
        res.status(500).send(erro)
    }
}

module.exports = { buscarPredios, buscarApartamentosPorPredio, adicionarPredio, deletarPredio }
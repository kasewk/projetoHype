const { verificaEstaPreenchido, verificaEstaVazio } = require('../helpers/validacao')
const bancoDeDados = require('../config/db')

const codigoApartamento = "codigo_apartamento"
const numeroQuartos = "numero_quartos"
const numeroBanheiros = "numero_banheiros"
const numeroSuites = "numero_suites"
const areaTotal = "area_total"
const idPredio = "id_predio"

function adicionarApartamentos(req, res) {
    const apartamento = { ...req.body }

    try {
        verificaEstaPreenchido(apartamento[codigoApartamento], 'Erro - Codigo incorreto!')
        verificaEstaPreenchido(apartamento[numeroQuartos], 'Erro - Número de quartos incorretos!')
        verificaEstaPreenchido(apartamento[numeroBanheiros], 'Erro - Número de banheiros incorretos!')
        verificaEstaPreenchido(apartamento[numeroSuites], 'Erro - Número de suites incorretos!')
        verificaEstaPreenchido(apartamento[areaTotal], 'Erro - Área total incorreta!')
        verificaEstaPreenchido(apartamento[idPredio], 'Erro - ID do prédio incorreto!')

        bancoDeDados('apartamentos').insert(apartamento)
            .then(() => res.status(204).send())
            .catch(err => res.status(500).send(err))
    } catch (erro) {
        res.status(400).send(erro)
    }

}

async function deletarApartamentos(req, res) {
    try {
        const linhasDeletadas = await bancoDeDados('apartamentos').where({ id: req.params.id }).del()
        try {
            verificaEstaPreenchido(linhasDeletadas, 'Apartamento não encontrado')
        } catch (erro) {
            res.status(400).send(erro)
        }

        res.status(204).send()
    } catch (erro) {
        res.status(500).send(erro)
    }
}


module.exports = { adicionarApartamentos, deletarApartamentos }
function verificaPreenchido(obj) {
    const valores = Object.values(obj)
    const msgEstado = "Erro - Estado Incorreto."
    const msgVazio = "Erro - preencha todos valores!"
    valores.forEach(valor => {
        if (typeof valor == 'string') {

            if (!valor || !valor.trim()) throw msgVazio
        }
        if (obj.estado.length > 2 || obj.estado.length === 0) throw msgEstado
    })
}

function isNumero(numero) {
    const msgValido = 'Erro - O apartamento precisa ser um número válido.'
    if (typeof numero !== 'number' || isNaN(numero)) throw msgValido
}

export { verificaPreenchido, isNumero }
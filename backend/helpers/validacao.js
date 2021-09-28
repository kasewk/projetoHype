function verificaEstaPreenchido(valor, msg) {
    if (!valor) throw msg
    if (Array.isArray(valor) && valor.length === 0) throw msg
    if (typeof valor === 'string' && !valor.trim()) throw msg
}

function verificaEstaVazio(valor, msg) {
    try {
        verificaEstaPreenchido(valor, msg)
    } catch (msg) {
        return
    }
    throw msg
}


module.exports = { verificaEstaPreenchido, verificaEstaVazio }
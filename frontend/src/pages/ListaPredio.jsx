import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Tabela from '../components/Tabela'
import Container from '../components/Container'


export default function ListaPredio() {
    const CABECALHO = ['Código', 'Nome', 'Sigla', 'Endereco', 'Cidade', 'Estado', 'Apartamentos']
    const [listaPredios, setListaPredios] = useState([])
    const [deleted, setDeleted] = useState()
    const [mensagemErro, setMensagemErro] = useState('')
    useEffect(() => {
        async function getData() {
            await axios.get('http://localhost:4000/predios')
                .then(resultado => setListaPredios(resultado.data))
                .catch(err => console.log(err.response.data))
        }
        getData()

    }, [deleted])

    async function deletePredio(idPredio) {
        await axios.delete(`http://localhost:4000/predios/${idPredio}`)
            .then(res => {
                setDeleted(res)
            })
            .catch(err => setMensagemErro(err.response.data))
    }


    return (
        <Container>
            <Tabela dados={listaPredios} cabecalho={CABECALHO} predios={true} funcaoDelete={deletePredio} />
            {
                mensagemErro && <div className="alert alert-danger mt-2 ms-2 me-2 text-center" role="alert">{mensagemErro}</div>
            }
        </Container>
    )
}

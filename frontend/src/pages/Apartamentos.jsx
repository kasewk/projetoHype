import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Container from '../components/Container'
import styles from '../styles/Apartamentos.module.css'
import Tabela from '../components/Tabela'

export default function Apartamentos(props) {
    const idPredio = props.match.params.id
    const CABECALHO = ["#", "Código do Apartamento", "Quartos", "Banheiros", "Suítes", "Área", "Código do Prédio"]
    const [apartamentos, setApartamentos] = useState([])
    const [deleted, setDeleted] = useState()
    const [mensagemErro, setMensagemErro] = useState('')


    useEffect(() => {
        async function getData() {
            await axios.get(`http://localhost:4000/predios/${idPredio}`)
                .then(resultado => setApartamentos(resultado.data))
        }
        getData()
    }, [deleted, idPredio])

    async function deletarApartamento(idApartamento) {
        await axios.delete(`http://localhost:4000/apartamentos/${idApartamento}`)
            .then(res => {
                setDeleted(res)
            })
            .catch(err => setMensagemErro('Erro - Não foi possível deletar o arquivo.'))
    }

    return (
        <Container>
            <div className={styles.corpo}>
                {apartamentos.predio ? <div className="card text-center align-middle mt-2" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">Nome do Prédio: {apartamentos.predio.nome}</h5>
                        <h6 className="card-subtitle mb-2 text-muted"> Sigla: {apartamentos.predio.sigla}</h6>
                        <p className="card-text">Endereco: {apartamentos.predio.endereco}</p>
                    </div>
                </div> : null}

                <Tabela cabecalho={CABECALHO} dados={apartamentos.apartamentos} predios={false} funcaoDelete={deletarApartamento} />
                {
                    mensagemErro && <div className="alert alert-danger mt-2 ms-2 me-2 text-center" role="alert">{mensagemErro}</div>
                }
            </div>
        </Container >
    )
}

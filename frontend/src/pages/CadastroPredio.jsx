import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router'
import Container from '../components/Container'
import Button from '../components/form/Button'
import Input from '../components/form/Input'
import styles from '../styles/CadastroPredio.module.css'
import { verificaPreenchido, isNumero } from '../helpers/validacao'
import SelectEstados from '../components/form/SelectEstados'


export default function CadastroPredio() {
    const [nome, setNome] = useState('')
    const [sigla, setSigla] = useState('')
    const [endereco, setEndereco] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [apartamentos, setApartamentos] = useState('')
    const [mensagemErro, setMensagemErro] = useState('')
    const historico = useHistory();

    async function enviaParaAPI() {
        const dados = {
            nome,
            sigla,
            endereco,
            cidade,
            estado,
            apartamentos: parseInt(apartamentos)
        }

        try {
            verificaPreenchido(dados)
            isNumero(dados.apartamentos)

            await axios.put('http://localhost:4000/predios', dados)
                .then(resp => {
                    setMensagemErro('')
                    redirecionaHome()
                })
                .catch(erro => setMensagemErro(erro.response.data))
        } catch (erro) {
            setMensagemErro(erro)
        }

    }

    function redirecionaHome() {
        return (
            historico.push('/')
        )
    }
    return (

        <Container>
            <div className={styles.form}>
                <Input textoLabel="Nome do Prédio" placeholder="Nome" nome="Nome do Prédio" tipo="text" funcaoChange={setNome} />
                <Input textoLabel="Sigla do Prédio" placeholder="Sigla" nome="Sigla" tipo="text" funcaoChange={setSigla} />
                <Input textoLabel="Endereço" placeholder="Endereço" nome="Endereço do Prédio" tipo="text" funcaoChange={setEndereco} />
                <Input textoLabel="Cidade" placeholder="Cidade" nome="Cidade" tipo="text" funcaoChange={setCidade} />
                <SelectEstados funcaoChange={setEstado} />
                <Input textoLabel="Apartamentos" placeholder="Apartamentos" nome="Estado" tipo="text" funcaoChange={setApartamentos} />
                <div className={styles.botoes}>
                    <Button tipo="salvar" nome="Salvar" funcao={enviaParaAPI} />
                    <Button tipo="cancelar" nome="Cancelar" funcao={redirecionaHome} />
                </div>
                {
                    mensagemErro && <div className="alert alert-danger mt-2 text-center" role="alert">{mensagemErro}</div>
                }
            </div>
        </Container>

    )
}

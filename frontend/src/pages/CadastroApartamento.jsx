import Button from '../components/form/Button'
import Container from '../components/Container'
import Input from '../components/form/Input'
import styles from '../styles/CadastroApartamento.module.css'
import SelectPredios from '../components/form/SelectPredios'
import { useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'



export default function CadastroApartamento() {

    const [codigoApartamento, setCodigoApartamento] = useState('')
    const [numeroQuartos, setNumeroQuartos] = useState('')
    const [numeroBanheiros, setNumeroBanheiros] = useState('')
    const [numeroSuites, setNumeroSuites] = useState('')
    const [area, setArea] = useState()
    const [idPredio, setIdPredio] = useState()
    const [mensagemErro, setMensagemErro] = useState('')
    const historico = useHistory();

    async function enviaApartamentos() {
        setNumeroQuartos(parseInt(numeroQuartos))
        setNumeroBanheiros(parseInt(numeroBanheiros))
        setNumeroSuites(parseInt(numeroSuites))
        setArea(parseFloat(area))
        const dados = {
            codigo_apartamento: codigoApartamento,
            numero_quartos: numeroQuartos,
            numero_banheiros: numeroBanheiros,
            numero_suites: numeroSuites,
            area_total: area,
            id_predio: idPredio
        }


        await axios.put('http://localhost:4000/apartamentos', dados)
            .then(resp => historico.push(`/apartamentos/${idPredio}`))
            .catch(e => setMensagemErro(e.response.data.toString()))

    }

    function trocaVirgulaPorPonto(str) {
        return setArea(str.replace(',', '.'))
    }

    function redirecionaHome() {
        return (
            historico.push('/')
        )
    }

    return (
        <Container>
            <div className={styles.form}>
                <Input textoLabel="Código do Apartamento" placeholder="Digite o código do apartamento" nome="codAPT" tipo="text" funcaoChange={setCodigoApartamento} />
                <Input textoLabel="Número de quartos" placeholder="Digite o número de quartos" nome="numQuartos" tipo="text" funcaoChange={setNumeroQuartos} />
                <Input textoLabel="Número de banheiros" placeholder="Digite o número de banheiros" nome="numBanheiros" tipo="text" funcaoChange={setNumeroBanheiros} />
                <Input textoLabel="Número de suítes" placeholder="Digite o número de suítes" nome="numSuites" tipo="text" funcaoChange={setNumeroSuites} />
                <Input textoLabel="Área Total do Apartamento" placeholder="Exemplo: 400.2" nome="area" tipo="text" funcaoChange={trocaVirgulaPorPonto} />
                <SelectPredios textoLabel="Prédio do Apartamento" placeholder="Exemplo: 400.2" nome="area" tipo="text" funcaoChange={setIdPredio} />

                <div className={styles.test}>
                    <div className={styles.botoes}>
                        <Button tipo="salvar" nome="Salvar" funcao={enviaApartamentos} />
                        <Button tipo="cancelar" nome="Cancelar" funcao={redirecionaHome} />
                    </div>
                    {
                        mensagemErro && <div className="alert alert-danger mt-2 mb-0 me-0 ms-0 text-center" role="alert">{mensagemErro}</div>
                    }
                </div>
            </div>
        </Container>
    )
}

import axios from "axios"
import { useState } from "react"
import styles from "../../styles/Input.module.css"

export default function SelectEstados({ funcaoChange }) {
    const [select, setSelect] = useState([])
    async function recebeDados() {
        let auxPredios = []
        await axios.get(`http://localhost:4000/predios/`)
            .then(predios => auxPredios = predios.data)
            .catch(e => console.log(e))

        let predioFormatados = auxPredios.map((predio) => {
            return [predio.id, `${predio.id} - ${predio.nome}`]
        })
        setSelect(predioFormatados)
    }


    return (
        <div className={styles.formulario}>
            <label htmlFor="estados">Prédio do Apartamento</label>
            <select id="estados" defaultValue="Inv" onChange={e => funcaoChange(e.target.value)} onClick={recebeDados}>
                <option value="Inv" disabled>Selecione um prédio...</option>
                {
                    select.map(opcao => {
                        return (
                            <option value={opcao[0]}>{opcao[1]}</option>
                        )
                    })
                }

            </select>
        </div>
    )
}

import styles from "../../styles/Input.module.css"

export default function SelectEstados({ funcaoChange }) {
    return (
        <div className={styles.formulario}>
            <label htmlFor="estados">Estados</label>
            <select id="estados" defaultValue={"Inv"} onChange={e => funcaoChange(e.target.value)}>
                <option key={1} value="Inv" disabled>Selecione um estado...</option>
                <option key={2} value="AC" >Acre</option>
                <option key={3} value="AL">Alagoas</option>
                <option key={4} value="AP">Amapá</option>
                <option key={5} value="AM">Amazonas</option>
                <option key={6} value="BA">Bahia</option>
                <option key={7} value="CE">Ceará</option>
                <option key={8} value="DF">Distrito Federal</option>
                <option key={9} value="ES">Espírito Santo</option>
                <option key={10} value="GO">Goiás</option>
                <option key={11} value="MA">Maranhão</option>
                <option key={12} value="MT">Mato Grosso</option>
                <option key={13} value="MS">Mato Grosso do Sul</option>
                <option key={14} value="MG">Minas Gerais</option>
                <option key={15} value="PA">Pará</option>
                <option key={16} value="PB">Paraíba</option>
                <option key={17} value="PR">Paraná</option>
                <option key={18} value="PE">Pernambuco</option>
                <option key={19} value="PI">Piauí</option>
                <option key={20} value="RJ">Rio de Janeiro</option>
                <option key={21} value="RN">Rio Grande do Norte</option>
                <option key={22} value="RS">Rio Grande do Sul</option>
                <option key={23} value="RO">Rondônia</option>
                <option key={24} value="RR">Roraima</option>
                <option key={25} value="SC">Santa Catarina</option>
                <option key={26} value="SP">São Paulo</option>
                <option key={27} value="TO">Sergipe</option>
                <option key={28} value="PR">Tocantins</option>

            </select>
        </div>
    )
}

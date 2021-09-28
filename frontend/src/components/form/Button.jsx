import styles from '../../styles/Button.module.css'

export default function Button({ tipo, nome, funcao }) {

    return (
        <button onClick={funcao} className={`${styles.botao} ${tipo && styles[tipo]}`}>
            {nome}
        </button>
    )
}

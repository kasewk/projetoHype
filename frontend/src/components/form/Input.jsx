import styles from '../../styles/Input.module.css'

export default function Input({ textoLabel, placeholder, nome, tipo = "text", funcaoChange }) {
    return (
        <div className={styles.formulario}>
            <label htmlFor={nome}>{textoLabel}</label>
            <input type={tipo} id={nome} placeholder={placeholder} onChange={e => funcaoChange(e.target.value)} />
        </div>
    )
}

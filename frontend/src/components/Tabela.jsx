import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/Tabela.module.css'
import { FaTrashAlt, FaBuilding } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert'
import { useState } from 'react'

export default function Tabela({ dados, cabecalho, predios, funcaoDelete }) {
    const [excluir, setExcluir] = useState()

    function renderAlert() {
        return (
            <SweetAlert
                warning
                showCancel
                confirmBtnText="Excluir"
                confirmBtnBsStyle="danger"
                cancelBtnText="Não"
                cancelBtnBsStyle="light"
                title="Você tem certeza?"
                onConfirm={deleteData}
                onCancel={() => setExcluir('')}
                focusCancelBtn
                reverseButtons
            >
                Está ação não poderá ser revertida!
            </SweetAlert>
        )
    }

    async function deleteData() {
        await funcaoDelete(excluir)
        setExcluir('')
    }


    return (
        <div className={styles.tabela}>
            <table className="table text-center table-hover table-bordered align-middle">
                <thead className={styles.cabecalho}>
                    <tr>
                        {cabecalho && cabecalho.map((item, index) => {
                            if (item === "Endereco" || item === "Nome") {
                                return (
                                    <th className={styles.larguraMax} key={index}>{item}</th>
                                )
                            }
                            return (
                                <th key={index}>{item}</th>
                            )
                        })}
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody className={styles.corpo}>
                    {dados && dados.map((dado, index) => {
                        return (
                            <tr key={index}>
                                {Object.values(dado).map((valor, index) => {
                                    return (
                                        <td key={index}>{valor}</td>
                                    )
                                })}
                                <td>{predios && <Link title="Visualizar apartamentos" to={`/apartamentos/${dado.id}`}><FaBuilding /></Link>}
                                    <i title="Excluir Prédio" onClick={e => setExcluir(dado.id)} className={styles.lixeira}><FaTrashAlt /></i></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
            {
                excluir ? renderAlert(excluir) : null
            }
        </div>
    )
}

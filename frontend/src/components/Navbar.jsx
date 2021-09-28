import { Link } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'
import logo from './images/hypeIcon.png'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div><Link to="/"><img src={logo} alt="Logo" /></Link></div>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cadastropredio">Novo Prédio</Link></li>
                <li><Link to="/cadastroapartamento">Novo Apartamento</Link></li>
            </ul>
        </nav>
    )
}

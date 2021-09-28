import styles from '../styles/Container.module.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Container({ children }) {
    return (
        <div className={styles.container}>
            <div className={styles.navbar}><Navbar /></div>
            <div className={styles.content}>{children}</div>
            <div className={styles.footer}><Footer /></div>
        </div>
    )
}

import React from 'react'
import styles from '../styles/Footer.module.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div>
                <FaFacebook />
                <FaInstagram />
                <FaLinkedin />
            </div>
            <div>
                &copy; Desenvolvido por Paulo Paes
            </div>
        </div>
    )
}

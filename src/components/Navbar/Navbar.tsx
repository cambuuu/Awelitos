import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Cuidando Contigo</div>
            <div className={styles.links}>
                <Link href="#" className={styles.link}>Actividades</Link>
                <Link href="#" className={styles.link}>Información para cuidadoras</Link>
                <Link href="#" className={styles.link}>Beneficios</Link>
                <Link href="#" className={styles.link}>Contactos</Link>
            </div>
        </nav>
    );
};

export default Navbar;

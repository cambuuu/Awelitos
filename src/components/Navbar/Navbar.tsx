"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const Navbar = () => {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === '/' && pathname !== '/') return false;
        return pathname === path;
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                    <img src="/logo.png" alt="Inicio" style={{ height: '120px', objectFit: 'contain', cursor: 'pointer' }} />
                </Link>
            </div>
            <div className={styles.links}>
                <Link href="/" className={`${styles.link} ${isActive('/') ? styles.active : ''}`}>Inicio</Link>
                <Link href="/actividades" className={`${styles.link} ${isActive('/actividades') ? styles.active : ''}`}>Actividades</Link>
                <Link href="/apoyo-cuidadores" className={`${styles.link} ${isActive('/apoyo-cuidadores') ? styles.active : ''}`}>Apoyo para cuidadores</Link>
                <Link href="/beneficios" className={`${styles.link} ${isActive('/beneficios') ? styles.active : ''}`}>Beneficios</Link>
                <Link href="/contactanos" className={`${styles.link} ${isActive('/contactanos') ? styles.active : ''}`}>Contáctanos</Link>
            </div>
        </nav>
    );
};

export default Navbar;

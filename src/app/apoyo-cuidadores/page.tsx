import { Metadata } from "next";
import styles from '../actividades/page.module.css';

export const metadata: Metadata = {
    title: "Apoyo para cuidadores | Salud mental sin tabúes",
};

export default function ApoyoCuidadoresPage() {
    return (
        <div className={styles.container}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '50vh',
                textAlign: 'center',
                padding: '1rem'
            }}>
                <h1 className={styles.title} style={{ marginBottom: '1rem' }}>Página en construcción</h1>
                <img
                    src="/construction.png"
                    alt="Monos construyendo"
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        maxHeight: '250px',
                        borderRadius: '16px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}
                />
                <p className={styles.description} style={{ marginTop: '1.5rem' }}>
                    Estamos trabajando para traerte el mejor contenido. ¡Vuelve pronto!
                </p>
            </div>
        </div>
    );
}

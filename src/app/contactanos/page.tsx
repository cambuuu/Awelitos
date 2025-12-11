
import styles from '../actividades/page.module.css';
import { Metadata } from "next";
import ContactForm from './ContactForm';

export const metadata: Metadata = {
    title: "Contáctanos | Salud mental sin tabúes",
};

export default function ContactanosPage() {
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Contáctanos</h1>
                    <p className={styles.description}>
                        Estamos aquí para escucharte. Envíanos un mensaje y te responderemos a la brevedad.
                    </p>
                </div>
                <section className={styles.section}>
                    <div className={styles.card}>
                        <ContactForm />
                    </div>
                </section>
            </div>
        </div>
    );
}

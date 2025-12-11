"use client";

import { useState } from 'react';
import ContactModal from '../ContactModal/ContactModal';
import styles from './CTASection.module.css';

const CTASection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className={styles.cta}>
                <h2 className={styles.title}>¿Necesitas más información?</h2>
                <p className={styles.text}>
                    Si tienes dudas, necesitas orientación o simplemente quieres conversar,
                    no dudes en escribirnos. Estamos contigo.
                </p>
                <button
                    className={styles.button}
                    onClick={() => setIsModalOpen(true)}
                >
                    Contáctanos
                </button>
            </section>
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default CTASection;

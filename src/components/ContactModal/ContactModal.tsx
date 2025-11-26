"use client";

import { useState } from 'react';
import styles from './ContactModal.module.css';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Error submitting form');

            setStatus('success');
            setTimeout(() => {
                onClose();
                setStatus('idle');
                setFormData({ name: '', email: '', message: '' });
            }, 2000);
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>&times;</button>

                {status === 'success' ? (
                    <div className={styles.successMessage}>
                        <h3>¡Mensaje enviado!</h3>
                        <p>Nos pondremos en contacto contigo pronto.</p>
                    </div>
                ) : (
                    <>
                        <h2 className={styles.title}>Contáctanos</h2>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="name">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    className={styles.input}
                                    required
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className={styles.input}
                                    required
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="message">Mensaje</label>
                                <textarea
                                    id="message"
                                    className={styles.textarea}
                                    required
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            {status === 'error' && (
                                <p className={styles.errorMessage}>Hubo un error al enviar el mensaje. Inténtalo de nuevo.</p>
                            )}

                            <button
                                type="submit"
                                className={styles.submitButton}
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default ContactModal;

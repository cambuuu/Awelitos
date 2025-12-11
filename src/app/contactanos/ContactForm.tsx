"use client";

import { useState } from 'react';
import styles from '../../components/ContactModal/ContactModal.module.css';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

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

            if (!response.ok) throw new Error('Error sending message');

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div style={{ padding: '1rem' }}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="page-name" className={styles.label}>Nombre</label>
                    <input
                        type="text"
                        id="page-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}
                        required
                        disabled={status === 'loading'}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="page-email" className={styles.label}>Correo Electrónico</label>
                    <input
                        type="email"
                        id="page-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.input}
                        required
                        disabled={status === 'loading'}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="page-message" className={styles.label}>Mensaje</label>
                    <textarea
                        id="page-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={styles.textarea}
                        required
                        disabled={status === 'loading'}
                    />
                </div>

                <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
                </button>

                {status === 'success' && (
                    <p className={styles.successMessage}>¡Mensaje enviado con éxito!</p>
                )}
                {status === 'error' && (
                    <p className={styles.errorMessage}>Hubo un error al enviar el mensaje.</p>
                )}
            </form>
        </div>
    );
}

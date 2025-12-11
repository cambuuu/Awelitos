"use client";

import { useState } from 'react';
import styles from './contact.module.css';

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
        <div className={styles.formCard}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formHeader}>
                    <h3 className={styles.formTitle}>Envíanos un mensaje</h3>
                    <p className={styles.formSubtitle}>Completa el formulario y nos pondremos en contacto contigo.</p>
                </div>

                <label className={styles.label}>
                    <span className={styles.labelText}>Nombre</span>
                    <div className={styles.inputWrapper}>
                        <input
                            className={styles.input}
                            placeholder="Tu nombre completo"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={status === 'loading'}
                        />
                        <span className={`material-symbols-outlined ${styles.inputIcon}`}>person</span>
                    </div>
                </label>

                <label className={styles.label}>
                    <span className={styles.labelText}>Correo Electrónico</span>
                    <div className={styles.inputWrapper}>
                        <input
                            className={styles.input}
                            placeholder="ejemplo@correo.com"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={status === 'loading'}
                        />
                        <span className={`material-symbols-outlined ${styles.inputIcon}`}>email</span>
                    </div>
                </label>

                <label className={styles.label}>
                    <span className={styles.labelText}>Mensaje</span>
                    <textarea
                        className={styles.textarea}
                        placeholder="Cuéntanos en qué podemos ayudarte..."
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={status === 'loading'}
                    ></textarea>
                </label>

                <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={status === 'loading'}
                >
                    <span>{status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}</span>
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>send</span>
                </button>

                {status === 'success' && (
                    <p className={styles.successMessage}>¡Mensaje enviado con éxito!</p>
                )}
                {status === 'error' && (
                    <p className={styles.errorMessage}>Hubo un error al enviar el mensaje.</p>
                )}

                <p className={styles.disclaimer}>
                    Al enviar este formulario, aceptas nuestra <a className={styles.link} href="#">política de privacidad</a>.
                </p>
            </form>
        </div>
    );
}

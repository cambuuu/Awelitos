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
                        <div className={styles.formHeader}>
                            <h2 className={styles.title}>Contáctanos</h2>
                            <p className={styles.subtitle}>Completa el formulario y nos pondremos en contacto contigo.</p>
                        </div>

                        <form className={styles.form} onSubmit={handleSubmit}>
                            <label className={styles.label}>
                                <span className={styles.labelText}>Nombre</span>
                                <div className={styles.inputWrapper}>
                                    <input
                                        className={styles.input}
                                        placeholder="Tu nombre completo"
                                        type="text"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
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
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
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
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    disabled={status === 'loading'}
                                ></textarea>
                            </label>

                            {status === 'error' && (
                                <p className={styles.errorMessage}>Hubo un error al enviar el mensaje. Inténtalo de nuevo.</p>
                            )}

                            <button
                                type="submit"
                                className={styles.submitButton}
                                disabled={status === 'loading'}
                            >
                                <span>{status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}</span>
                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>send</span>
                            </button>

                            <p className={styles.disclaimer}>
                                Al enviar este formulario, aceptas nuestra <a className={styles.link} href="#">política de privacidad</a>.
                            </p>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default ContactModal;

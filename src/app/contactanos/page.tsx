import styles from './contact.module.css';
import { Metadata } from "next";
import ContactForm from './ContactForm';

export const metadata: Metadata = {
    title: "Contáctanos | Salud mental sin tabúes",
};

export default function ContactanosPage() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                {/* Left Column: Content & Context */}
                <div className={styles.leftColumn}>
                    <div className={styles.headerGroup}>
                        <span className={styles.badge}>
                            Soporte y Ayuda
                        </span>
                        <h1 className={styles.title}>
                            ¿Cómo podemos ayudarte hoy?
                        </h1>
                        <p className={styles.description}>
                            Estamos aquí para apoyarte en tu labor de cuidado. Déjanos tu mensaje y te responderemos con la información que necesitas sobre beneficios, salud mental y actividades.
                        </p>
                    </div>

                    {/* Info Cards */}
                    <div className={styles.infoCards}>
                        <div className={styles.infoCard}>
                            <div className={styles.iconCircle}>
                                <span className="material-symbols-outlined">mail</span>
                            </div>
                            <div>
                                <p className={styles.infoTitle}>Correo Electrónico</p>
                                <p className={styles.infoText}>contacto@cuidadores.org</p>
                                <p className={styles.infoText}>soporte@cuidadores.org</p>
                            </div>
                        </div>
                        <div className={styles.infoCard}>
                            <div className={styles.iconCircle}>
                                <span className="material-symbols-outlined">location_on</span>
                            </div>
                            <div>
                                <p className={styles.infoTitle}>Oficina Central</p>
                                <p className={styles.infoText}>Av. Siempre Viva 123, Oficina 404</p>
                                <p className={styles.infoText}>Santiago, Chile</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.imageContainer}>
                        <img
                            alt="Supportive hands holding together symbolizing care"
                            className={styles.image}
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzKe72HOO7KlDVl9i9WxjGdQzS9RjWt1znf0_JelRHxrp65tFEJwZIxEwoBKkADOk8Kmb2cZ5507ywuu9nz9J-DkCie2VmE2aUc3GnQ1fghVBG0TBTOP9BDoyeAcm4evxy_J_gfmD7Symmo8oNWQ2bLyB2Q2wcZkPcIlBOJJYzIt3mXOnK6KdpXumLvljb1x4oMqnGg0opuo8jU09Ib-0qcHg_RO7h0R3LoqevyQIBuhiaYstNf67qH4sRj1ouaCFtqtcTYpuRLQ"
                        />
                        <div className={styles.imageOverlay}></div>
                    </div>
                </div>

                {/* Right Column: Form Card */}
                <ContactForm />
            </div>
        </main>
    );
}

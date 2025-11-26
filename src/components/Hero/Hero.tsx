import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <h1 className={styles.title}>Recursos y Apoyo para Cuidadoras</h1>
            <p className={styles.subtitle}>
                Encuentra herramientas, comunidad y respaldo para tu invaluable labor.
            </p>
        </section>
    );
};

export default Hero;

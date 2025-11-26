import styles from './Sidebar.module.css';

// Using placeholder images from a reliable source or colored divs if images fail
const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.widget}>
                <h3 className={styles.title}>Nuestro Proyecto</h3>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
                    vestibulum vestibulum. Cras venenatis euismod malesuada.
                </p>
            </div>

            <div className={styles.widget}>
                <h3 className={styles.title}>Fotos</h3>
                <div className={styles.photoGrid}>
                    <div className={styles.photoPlaceholder}>
                        {/* Replace with actual images or Next.js Image component later */}
                        <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&auto=format&fit=crop&q=60" alt="Friends" />
                    </div>
                    <div className={styles.photoPlaceholder}>
                        <img src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=400&auto=format&fit=crop&q=60" alt="Hands" />
                    </div>
                    <div className={styles.photoPlaceholder}>
                        <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&auto=format&fit=crop&q=60" alt="Yoga" />
                    </div>
                    <div className={styles.photoPlaceholder}>
                        <img src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&auto=format&fit=crop&q=60" alt="Walking" />
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;

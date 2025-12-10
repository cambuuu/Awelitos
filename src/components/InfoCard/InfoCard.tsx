import styles from './InfoCard.module.css';



interface InfoCardProps {
    title: string;
    children: React.ReactNode;
}

const InfoCard = ({ title, children }: InfoCardProps) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default InfoCard;

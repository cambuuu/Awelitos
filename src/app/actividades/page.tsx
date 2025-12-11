import { Metadata } from "next";
import styles from './page.module.css';

export const metadata: Metadata = {
    title: "Actividades | Salud mental sin tabúes",
};

export default function ActivitiesPage() {
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                {/* Header Section */}
                <div className={styles.header}>
                    <h1 className={styles.title}>Actividades para el Bienestar</h1>
                    <p className={styles.description}>
                        Descubre actividades diseñadas para cuidadores y sus seres queridos, enfocadas en la estimulación mental, física y emocional.
                    </p>
                </div>

                {/* Section 1: Cognitive */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Actividades para la Mente Activa y Estimulación Cognitiva</h2>
                    <div className={`${styles.grid} ${styles.grid3}`}>
                        <ActivityCard
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDMjIigWlP8M_T659bOlRlI0be4eYVZH0G83JFxnI9liOuJZfA2vU4tZAkXvQz2pYjp5HdEtCYNj1C4XZp6KXNr8rNJShNrE0ji61xQLz1PI1gb9fIHa9g6-HmhMWiQLcllowOZYBJsyRq6FCNxLnb_2pwnq1voyT7ZQHRDtquuo9sWWozXrjQD0yNPuLPTm-89hGG7PBkG3XxyQtLSK8mcKgt-_tUc4lUifxPOJttlijt8QEI4RI-WUKIeaKV1aLMSYwj4NL1qOw"
                            title="Gimnasia Cerebral y Juegos Lógicos"
                            description="Ejercicios diseñados para mantener la mente ágil mediante retos de lógica, memoria y atención."
                        />
                        <ActivityCard
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDlZ-gGAnKnynb6U9h45UT-0YSFBbfV1lX6OPvNlIBqqkXHmQ-eyX6bVc_h8oS1Zi0mafTDOnDwArbPnpaEcMspmmdEffVm-mmttD0PXoqunof47fvSRqt_8SC_gUtrrHBEwao-MgdvNSpEc43eYUNHRXPVyCitIUbqc9aLAu_qSpPu8WxeELNdU-1JQMOHdFWIRgJnUDJ62LLg_1v8-E50iuYd3ye3GyzNY8wYgZnifCmI2TCe83BneuBjgmjX722nE_REwbe8Zw"
                            title="Club de Lectura"
                            description="Espacio para compartir historias, analizar textos y fomentar la conversación enriquecedora."
                        />
                        <ActivityCard
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDrx3vsFaZGEWT6MV0fjCCJoJjmMJqdqZ7hLnz_3Qg2aDy7uwmFcSDOpfFdkbRi7M44tc3MrN_GY-gatn9JytB_DLFHutXTJSnJJ0pMDFtCQ4QpayeJbXhkXR9_VOHRpiFAl-hogqqj0G2eTtbYl9cyT4OYWgnvb_xZqwQkssafTXJckWciY77bAdPbzujN4__0FEddB3kdUL6zYcC4Mr4iebcVNfz25r__NzX2o-lNz1CfZaVInnFPgcHdldBhf8YEqB-SFKt43Q"
                            title="Aprendizaje Creativo"
                            description="Talleres para aprender nuevas habilidades artísticas o manuales que estimulan la creatividad."
                        />
                    </div>
                </section>

                {/* Section 2: Physical */}
                <section className={styles.section}>
                    <h2 className={`${styles.sectionTitle} ${styles.sectionTitleGreen}`}>Actividades Físicas Adaptadas</h2>
                    <div className={`${styles.grid} ${styles.grid4}`}>
                        <ActivityCard
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDh1Md7dPrpzc0BB3wjBtaLXnmFNRAf1LeJqM6aQXPXGbovMoxfGPG1R6C6slCro13bqlxKaHuXT_4FBEFRhS_5uSHoaxO9dAX8dxvVwKyG8d1uB7iB9YM4PTVEFmGcaMCpe01eFm22LZifu8VVonlyxu9GibqP-tgEq02KtModgyzgZtX-jJxkQJRQOFWu-iKkEPxZYNC85qWVq9DkvWnWB9XFc2fVqeC7hfDHAsYCLhzKmbh4YSyS59g1hfa7PTKdmaxqxwak1w"
                            title="Circuito Funcional Adaptado"
                            description="Ejercicios de movilidad suave adaptados a diferentes capacidades físicas."
                            small
                        />
                        <ActivityCard
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuAGH4tfkO698C6PPEzKZkVM73qpvWVZMtnzE9SOaAoUSSdlFVEGffM7txtSJ_BAw-gXT_W9ZJ3Km5HsTDz3HC8M40dUrhrtuMIMjYNH_9Cjnn13nNnvzUAyPlz9M_8GRQOMqjv9gz5LbOPBAWbW2XbP1ErAhUckLnnbVGZbgJwIrprahPFaz7PKOMnTjOBu7hbdJFnfZ3niRUVJGYIkxJwy_RIBoprQferNOguOnFpQptjplfRxUYB_8qYFap4U06v6B-KbPUInyw"
                            title="Body Combat Adaptado"
                            description="Movimientos rítmicos inspirados en artes marciales para liberar energía y estrés."
                            small
                        />
                        <ActivityCard
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuBBS3RXxfohNNLw5eW0D1PrAzxiWHHKJmkxzbOAfnTXrDOYUKo79O2WqK4UBCeUc5PQ8_plGTdf-stkIDfGK4IjrblIniVKuhGb8FXbUPuvVAL1-IARbEDHTByoyHhKZV1SIr7OKrW68b96_9JzJ_0nUdee_Zq4GbbA3isjKVfL9Rw72qIv0Y4xmRQgzRBrmanj1TTdfH2uGih3NzLtLRq9b0LrkZppXXYKGEKWSeXFSpei-FVoposoeopsMDmqvZOEfz1fj9GOPw"
                            title="Paseos Recreativos y Movilidad"
                            description="Caminatas al aire libre para mejorar la circulación y disfrutar de la naturaleza."
                            small
                        />
                        <ActivityCard
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuC-fYL3-9XmFLasm-ii4JVZ_0I08skpF9CZpbmEYniLlu7k6VvZ1RUGz-Px9FWTZrLXVhhmJseZ_v3OEQQ_kdink4m31Y-8HM0Wr73LakMbtV0wIO3NX2uYaDBXaTp-XOjFYA_rjQrBK3DaDAcvqWpMiefhI9zpv-qxQMwPZhLbhDVRS6WI8SQ591Rr60Qi2XdRKWaCUGVpHmxVfIk6ZAqJ6eKhgBlDgz6qEDW4TZFffHbGB4XTWIzNueHZXbpJIZgUIqtzZ9e7Rw"
                            title="Gimnasia de Pausa Activa"
                            description="Breves sesiones de estiramiento para revitalizar el cuerpo durante el día."
                            small
                        />
                    </div>
                </section>

                {/* Section 3: Social */}
                <section className={styles.section}>
                    <h2 className={`${styles.sectionTitle} ${styles.sectionTitlePurple}`}>Actividades de Socialización y Expresión Emocional</h2>
                    <div className={`${styles.grid} ${styles.grid4}`}>
                        <SocialCard
                            icon="forum"
                            title="Conversaciones y Charlas de Experiencias"
                            description="Compartir vivencias en un entorno seguro y de apoyo mutuo."
                        />
                        <SocialCard
                            icon="diversity_3"
                            title="Juegos o Dinámicas Grupales"
                            description="Actividades lúdicas para romper el hielo y fortalecer la cohesión."
                        />
                        <SocialCard
                            icon="groups"
                            title="Participación en Clubes y Programas Comunitarios"
                            description="Integración en redes de apoyo locales y actividades vecinales."
                        />
                        <SocialCard
                            icon="favorite"
                            title="Fomentar Lazos Afectivos"
                            description="Estrategias para profundizar la conexión emocional con los demás."
                        />
                    </div>
                </section>

                {/* Section 4: Thematic Axes */}
                <section className={styles.thematicSection}>
                    <h2 className={styles.thematicTitle}>Ejes Temáticos para Charlas y Talleres</h2>
                    <div className={`${styles.grid} ${styles.grid4}`}>
                        <ThematicCard icon="family_restroom" title="FAMILIA" subtitle="El Bienestar Emocional" />
                        <ThematicCard icon="diversity_1" title="AMISTADES" subtitle="La Importancia de Conectar" />
                        <ThematicCard icon="self_improvement" title="AUTOCUIDADO" subtitle="Mente y Cuerpo" />
                        <ThematicCard icon="sentiment_satisfied" title="EMOCIONES" subtitle="Pensamientos Positivos" />
                    </div>
                </section>

                {/* Section 5: Cube Dynamic */}
                <section className={styles.cubeSection}>
                    <div className={styles.cubeVisual}>
                        <div className={styles.cubeWrapper}>
                            <div className={styles.cube}>
                                <div className={styles.cubeBorder}></div>
                                <div className={styles.cubeText}>
                                    <p>Familia</p>
                                    <p>Amigos</p>
                                    <p>Autocuidado</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cubeContent}>
                        <div>
                            <h2 className={styles.cubeTitle}>Dinámica: El Cubo del Bienestar y las Emociones</h2>
                            <p className={styles.description}>Una herramienta interactiva para explorar diferentes áreas de la vida y fomentar la conversación significativa.</p>
                        </div>

                        <div>
                            <h3 className={styles.guideTitle}>
                                <span className={styles.materialSymbol}>menu_book</span>
                                Guía para el Cuidador (Pasos Prácticos)
                            </h3>
                            <ul className={styles.guideList}>
                                <li>Prepara un ambiente tranquilo y cómodo.</li>
                                <li>Presenta el cubo como un juego divertido.</li>
                                <li>Lanza el cubo y lee la palabra que queda arriba.</li>
                                <li>Usa las preguntas guía para iniciar la charla.</li>
                                <li>Escucha con empatía y sin juzgar.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className={styles.guideTitle}>
                                <span className={styles.materialSymbol}>quiz</span>
                                Preguntas Guía
                            </h3>
                            <div className={styles.questionBox}>
                                "¿Qué recuerdo te viene a la mente con esta palabra? ¿Cómo te hace sentir este aspecto de tu vida hoy? ¿Hay algo pequeño que te gustaría hacer al respecto esta semana?"
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

// Helper Components

function ActivityCard({ image, title, description, small = false }: { image: string; title: string; description: string; small?: boolean }) {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={`${styles.cardImage} ${small ? styles.cardImageSmall : ''}`} />
            <div className={`${styles.cardContent} ${small ? styles.cardContentSmall : ''}`}>
                <h3 className={`${styles.cardTitle} ${small ? styles.cardTitleSmall : ''}`}>{title}</h3>
                <p className={`${styles.cardText} ${small ? styles.cardTextSmall : ''}`}>{description}</p>
            </div>
        </div>
    );
}

function SocialCard({ icon, title, description }: { icon: string; title: string; description: string }) {
    return (
        <div className={styles.socialCard}>
            <div className={styles.iconCircle}>
                <span className={styles.materialSymbol}>{icon}</span>
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardText}>{description}</p>
        </div>
    );
}

function ThematicCard({ icon, title, subtitle }: { icon: string; title: string; subtitle: string }) {
    return (
        <div className={styles.thematicCard}>
            <span className={`${styles.materialSymbol} ${styles.largeIcon}`}>{icon}</span>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardText}>{subtitle}</p>
        </div>
    );
}

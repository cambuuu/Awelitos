import Hero from "@/components/Hero/Hero";
import InfoCard from "@/components/InfoCard/InfoCard";
import Carousel from "@/components/Carousel/Carousel";

import styles from "./page.module.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio | Salud mental sin tabúes",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <div className={styles.container}>
        <Carousel />
        <div className={styles.mainGrid}>
          <div className={styles.contentColumn}>
            <InfoCard title="1-Nuestro Diagnóstico y Misión">
              <p>
                ¿Sabías que la salud mental en los adultos mayores es uno de los desafíos sociales más urgentes en Chile? A pesar de que el envejecimiento activo es una meta de salud pública, aún persisten tabúes, silencios y estigmas profundamente arraigados. Nuestro proyecto nace justamente para romper esas barreras y acompañarte en esta labor tan importante.
              </p>
              <h3>Las cifras que nos movilizan</h3>
              <ul>
                <li>Cerca del 25 % de las personas mayores en Chile presenta síntomas de depresión.</li>
                <li>Sin embargo, solo un 15 % busca atención profesional, principalmente por miedo, desconocimiento o creencias erróneas sobre la salud mental.</li>
                <li>La soledad y el aislamiento social se han convertido en factores críticos que aumentan significativamente el riesgo de deterioro emocional, especialmente en quienes viven solos o han perdido redes de apoyo.</li>
              </ul>
              <h3>Nuestra Misión</h3>
              <p>
                "Rompiendo el silencio: Salud mental sin tabúes" nace como un proyecto de estudiantes de técnico en Trabajo Social que busca ofrecer apoyo, información clara y herramientas prácticas para quienes cuidan de adultos mayores.
              </p>
              <p>
                Creemos que los cuidadores cumplen un rol esencial, y queremos acompañarlos en ese camino para que se sientan más preparados, informados y confiados en su labor.
              </p>
              <p>A través de esta plataforma queremos ayudarte a:</p>
              <ul>
                <li>Reconocer señales tempranas de ansiedad, depresión o cambios emocionales en la persona mayor.</li>
                <li>Fomentar actividades de estimulación, socialización y expresión emocional que favorezcan el bienestar mental.</li>
                <li>Fortalecer los lazos afectivos, reduciendo la soledad y promoviendo un envejecimiento más humano y digno.</li>
                <li>Promover el acceso a ayuda profesional, derribando el miedo, la vergüenza y los estigmas que aún persisten.</li>
              </ul>
            </InfoCard>

            <InfoCard title="2-La Salud Mental en las Personas Mayores">
              <h3>El Impacto del Envejecimiento en la Salud Emocional</h3>
              <p>
                La salud mental es un componente fundamental del bienestar integral en la vejez. A medida que las personas mayores enfrentan cambios físicos, sociales y emocionales, su estabilidad emocional puede verse afectada. Estos cambios no son propios “de la edad”, sino el resultado de múltiples factores que influyen en su calidad de vida. Por eso, es esencial derribar mitos: el malestar emocional NO es parte natural de envejecer y sí puede prevenirse, acompañarse y tratarse.
              </p>
              <p>
                El estado emocional de una persona mayor influye directamente en su capacidad para relacionarse, tomar decisiones, participar socialmente, mantener autonomía y disfrutar de una vida plena.
              </p>
            </InfoCard>

            <InfoCard title="3-Factores que Afectan la Salud Emocional de las Personas Mayores">
              <p>Aquí se explican de manera clara y sencilla los factores que influyen en la salud mental en la vejez, junto con sus principales consecuencias.</p>

              <h3>Pérdida del Vínculo Social</h3>
              <p>
                <strong>Consecuencia:</strong> La jubilación, la partida de los hijos, la disminución de la participación comunitaria o la pérdida de la pareja pueden producir un sentimiento de soledad, inutilidad o vacío emocional. Estos cambios incrementan el riesgo de depresión y desmotivación.
              </p>

              <h3>Resistencia Cultural</h3>
              <p>
                <strong>Consecuencia:</strong> En generaciones mayores persiste la idea de que “estar triste es normal” o que los problemas emocionales no son dignos de atención profesional. Este estigma hace que muchas personas mayores minimicen o nieguen sus síntomas y no busquen ayuda a tiempo.
              </p>

              <h3>Aislamiento Social</h3>
              <p>
                <strong>Consecuencia:</strong> La disminución del contacto con amigos, familia o vecinos aumenta notablemente las probabilidades de deterioro emocional. La soledad prolongada puede afectar la autoestima, la memoria, el ánimo y la salud física.
              </p>

              <h3>Condiciones de Vida y Autonomía</h3>
              <p>
                <strong>Consecuencia:</strong> La salud emocional influye directamente en la calidad de vida. Factores como movilidad reducida, enfermedades crónicas, dificultades económicas o dependencia funcional pueden afectar el bienestar psicológico y generar sentimientos de frustración o angustia.
              </p>
            </InfoCard>

            <InfoCard title="4-Desafíos Emocionales Más Comunes en Adultos Mayores">
              <h3>Depresión</h3>
              <p><strong>Cambios en el Comportamiento:</strong> La persona deja de realizar actividades que antes disfrutaba (anhedonia) y puede mostrar menor energía o interés social.</p>
              <p><strong>Estado de Ánimo:</strong> Predomina una mirada negativa de sí mismo y del entorno, junto con baja autoestima, irritabilidad y alteraciones del sueño (insomnio o sueño excesivo).</p>

              <h3>Ansiedad</h3>
              <p><strong>Síntomas Físicos:</strong> Tensión muscular, sudoración, palpitaciones, sensación de inquietud en el cuerpo.</p>
              <p><strong>Temores Reales para Ellos:</strong> Surgen preocupaciones persistentes (como miedo a enfermar, caerse o estar solo) que pueden parecer irracionales, pero para el adulto mayor son muy significativas.</p>

              <h3>Soledad y Aislamiento Social</h3>
              <p><strong>Desconexión:</strong> La pérdida de amistades, familiares o rutinas puede generar sentimientos de abandono.</p>
              <p><strong>Impacto Emocional:</strong> La soledad prolongada aumenta el riesgo de depresión, ansiedad y deterioro cognitivo.</p>

              <h3>Duelo</h3>
              <p><strong>Pérdidas Significativas:</strong> En la adultez mayor es común enfrentar la muerte de seres queridos, deterioro de la salud o pérdida de autonomía.</p>
              <p><strong>Proceso Emocional:</strong> El duelo puede manifestarse con tristeza profunda, irritabilidad y dificultades para adaptarse a nuevas rutinas.</p>
            </InfoCard>

            <InfoCard title="5-¿Cómo Entienden la Salud Mental las Personas Mayores?">
              <p>De acuerdo con la percepción de muchos adultos mayores, la salud mental se relaciona con aspectos cotidianos de su bienestar emocional. Para ellos, implica:</p>
              <ul>
                <li>Estar bien consigo mismos y con los demás: sentirse valorados, respetados y capaces de relacionarse de manera positiva.</li>
                <li>Poder expresar lo que sienten: tener espacios donde hablar, ser escuchados y compartir emociones sin miedo al juicio.</li>
                <li>Experimentar tranquilidad y paz interna: mantener un estado emocional estable, sin angustias constantes, y con la capacidad de enfrentar las dificultades de manera serena.</li>
              </ul>
            </InfoCard>

            <InfoCard title="6-La Resistencia Cultural y las Cifras Nacionales">
              <p>
                Aunque el envejecimiento activo es una meta importante de la salud pública en Chile, muchos adultos mayores todavía presentan resistencia a reconocer sus problemas de salud mental. Esta negación tiene raíces culturales muy profundas.
              </p>

              <h3>¿Por qué ocurre esta resistencia?</h3>
              <p><strong>Estigma y tabú:</strong> Las enfermedades mentales suelen asociarse a debilidad o “locura”, lo que lleva a minimizar los síntomas y evitar pedir ayuda.</p>
              <p><strong>Falta de información:</strong> Muchos adultos mayores no han recibido educación en salud mental y no identifican cuándo lo que sienten corresponde a depresión, ansiedad u otros malestares emocionales.</p>
              <p><strong>Normalización del sufrimiento emocional:</strong> Existe la creencia de que “sentirse triste, solo o preocupado” es parte inevitable de la vejez, lo que retrasa el diagnóstico y tratamiento.</p>

              <h3>Cifras Nacionales que lo Reflejan</h3>
              <p>Las estadísticas recientes muestran que esta resistencia cultural tiene consecuencias reales:</p>
              <ul>
                <li>En Chile, más de 1,2 millones de adultos mayores presentan síntomas depresivos (CIEDESS).</li>
                <li>La prevalencia de depresión en personas mayores llega al 39,8 %, una de las más altas registradas en el país (SENAMA).</li>
                <li>Un 23,8 % de los adultos mayores declara sentirse solos de manera frecuente, y un 14,5 % siente que es ignorado por los demás (SENAMA).</li>
                <li>A nivel global, la OMS estima que cerca del 14 % de los adultos de 70 años o más vive con algún trastorno mental significativo.</li>
                <li>En Chile, un 64 % de las personas con síntomas depresivos y un 55 % con síntomas de ansiedad no perciben necesidad de tratamiento, incluso cuando lo requieren (DIPRES).</li>
              </ul>

              <h3>¿Por qué es importante abordar este problema?</h3>
              <p>
                Esta resistencia cultural dificulta el acceso oportuno a la atención en salud mental. Sensibilizar, educar y reducir el estigma es clave para mejorar el bienestar de los adultos mayores y promover un envejecimiento digno, activo y saludable.
              </p>

              <h3>¿Por qué es importante intervenir a tiempo?</h3>
              <p>
                La detección temprana permite prevenir el deterioro emocional, fortalecer la autonomía y mejorar la calidad de vida. Un simple acompañamiento, una conversación o una actividad significativa puede marcar una gran diferencia en el bienestar de la persona mayor.
              </p>
            </InfoCard>

            <InfoCard title="7-La Importancia de las Emociones y el Bienestar en las personas mayores">
              <p>
                El bienestar emocional es un componente fundamental de la salud integral de las personas mayores. A medida que avanzan los años, no solo cambian el cuerpo y el estilo de vida: también lo hacen las emociones, la forma de relacionarse con los demás y la manera de enfrentar los desafíos de la vida cotidiana. Por eso, fortalecer la salud mental y mantener una buena gestión emocional contribuye directamente a una mejor calidad de vida.
              </p>

              <h3>¿Por qué son tan importantes las emociones en esta etapa?</h3>
              <p>
                Durante la adultez mayor, las personas pueden experimentar una serie de cambios significativos: jubilación, pérdida de seres queridos, variaciones en la salud física, menor actividad social o modificaciones en el rol familiar. Estos cambios pueden provocar emociones intensas como tristeza, ansiedad, soledad, frustración o miedo.
              </p>
              <p>Reconocer, expresar y gestionar adecuadamente estas emociones es esencial para:</p>
              <ul>
                <li>Mantener relaciones sociales saludables</li>
                <li>Aumentar la autoestima y el sentido de propósito</li>
                <li>Promover un envejecimiento activo y positivo</li>
                <li>Prevenir problemas de salud mental, como la depresión y la angustia emocional</li>
              </ul>

              <h3>El bienestar emocional: más que “sentirse bien”</h3>
              <p>
                El bienestar emocional no significa estar feliz todo el tiempo. Implica tener herramientas internas para comprender lo que sentimos, pedir apoyo cuando es necesario y las emociones. Este bienestar beneficia la memoria, la concentración, la motivación y la capacidad de disfrutar las actividades diarias.
              </p>

              <h3>Beneficios de cuidar las emociones en las personas mayores:</h3>
              <p><strong>Mejor salud física:</strong> Las emociones positivas reducen el estrés, mejoran el sueño, fortalecen el sistema inmune y disminuye el riesgo de enfermedades cardiovasculares.</p>
              <p><strong>Mayor autonomía y funcionalidad:</strong> Una persona emocionalmente estable tiene más energía, motivación y disposición para realizar actividades cotidianas.</p>
              <p><strong>Relaciones más significativas:</strong> Expresar emociones y comunicarse adecuadamente fortalece los vínculos familiares, de amistad y comunitarios.</p>
              <p><strong>Prevención de trastornos mentales:</strong> Promover espacios de conversación, escucha activa y actividades grupales disminuye la incidencia de depresión y ansiedad en la vejez.</p>
            </InfoCard>
          </div>
        </div>
      </div>
    </main>
  );
}

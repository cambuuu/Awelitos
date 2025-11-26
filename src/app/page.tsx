import Hero from "@/components/Hero/Hero";
import InfoCard from "@/components/InfoCard/InfoCard";
import Sidebar from "@/components/Sidebar/Sidebar";
import CTASection from "@/components/CTASection/CTASection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          <InfoCard />
          <Sidebar />
        </div>
        <CTASection />
      </div>
    </main>
  );
}

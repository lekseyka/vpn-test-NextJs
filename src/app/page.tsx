import styles from "./page.module.scss";
import Header from "@/components/header";
import Banner from "@/components/banner";
import StatsOverview from "@/components/statsOverview";
import Benefits from "@/components/benefits";
import ChooseName from "@/components/chooseName";

export default function Home() {
  return (
    <main className={styles.main}>
        <Header />
        <div className={styles.content}>
            <Banner />
            <StatsOverview />
            <Benefits />
            <ChooseName />
        </div>
    </main>
  );
}

import styles from "./style.module.css";
import PlayButton from "../playButton";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <span className={styles.badge}>PLAN YOUR LIFE</span>

        <h1 className={styles.title}>
          Increase your <strong>productivity</strong>
        </h1>

        <p className={styles.text}>
          Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
          atqui laudem an, insolens gubergren similique est cu. Et vel modus
          congue vituperata.
        </p>
        <div className={styles.playWrapper}>
          <PlayButton />
        </div>
      </div>
    </section>
  );
}

export default Hero;

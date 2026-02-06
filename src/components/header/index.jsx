import styles from "./style.module.css";

import facebookIcon from "../../assets/icons/facebook.svg";
import telegramIcon from "../../assets/icons/telegram.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import mediumIcon from "../../assets/icons/medium.svg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.left}>
          <div className={styles.logo} />

          <nav className={styles.nav}>
            <a href="#">Home</a>
            <a href="#">Blog</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Documentation</a>
          </nav>
        </div>

        <div className={styles.right}>
          <div className={styles.socials}>
            <img src={facebookIcon} alt="Facebook" />
            <img src={telegramIcon} alt="Telegram" />
            <img src={twitterIcon} alt="Twitter" />
            <img src={mediumIcon} alt="Medium" />
          </div>

          <button className={styles.button}>Get started</button>
        </div>
      </div>
    </header>
  );
}

export default Header;

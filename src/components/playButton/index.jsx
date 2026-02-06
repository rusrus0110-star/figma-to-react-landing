import styles from "./style.module.css";

import ellipse from "../../assets/images/Ellipse 2.svg";
import polygon from "../../assets/images/Polygon.svg";

function PlayButton() {
  return (
    <button className={styles.button} aria-label="Play video">
      <img src={ellipse} alt="" className={styles.ellipse} />
      <img src={polygon} alt="" className={styles.polygon} />
    </button>
  );
}

export default PlayButton;

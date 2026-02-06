import styles from "./style.module.css";

import bitbucket from "../../assets/logos/bitbucket.svg";
import watch from "../../assets/logos/watch.svg";
import facebook from "../../assets/logos/facebook.svg";
import atlassian from "../../assets/logos/atlassian.svg";
import audi from "../../assets/logos/audi.svg";

function Logos() {
  const logos = [
    { src: bitbucket, alt: "Bitbucket" },
    { src: watch, alt: "Watch" },
    { src: facebook, alt: "Facebook" },
    { src: atlassian, alt: "Atlassian" },
    { src: audi, alt: "Audi" },
  ];

  return (
    <section className={styles.logos}>
      <div className={styles.container}>
        {logos.map((logo) => (
          <img key={logo.alt} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </section>
  );
}

export default Logos;

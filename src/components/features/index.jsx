import styles from "./style.module.css";

// Icons (left → right): Vector 2, Vector 2.4, Vector 2.5, Vector 2.6
import iconOverview from "../../assets/features/Vector 2.svg";
import iconFiles from "../../assets/features/Vector 2.4.svg";
import iconChats from "../../assets/features/Vector 2.5.svg";
import iconSave from "../../assets/features/Vector 2.6.svg";

// Clouds (Ellipse): 1 biggest → 4 smallest
import cloud1 from "../../assets/features/Ellipse (1).svg";
import cloud2 from "../../assets/features/Ellipse (2).svg";
import cloud3 from "../../assets/features/Ellipse (3).svg";
import cloud4 from "../../assets/features/Ellipse (4).svg";

export default function Features() {
  const items = [
    {
      icon: iconOverview,
      title: "Overview",
      text: "Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.",
      active: true,
    },
    {
      icon: iconFiles,
      title: "Files",
      text: "No vim nulla vitae intellegat. Ei enim error ius, solet atomorum conceptam ex has.",
    },
    {
      icon: iconChats,
      title: "Meeting chats",
      text: "Vim ne tacimates neglegentur. Erat diceret omittam at est.",
    },
    {
      icon: iconSave,
      title: "Save events",
      text: "Nisl idque mel ea, nominati voluptatum.",
    },
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <p className={styles.kicker}>ABOUT US</p>
        <h2 className={styles.title}>Read about our app</h2>

        <div className={styles.grid}>
          {items.map((item) => (
            <article
              key={item.title}
              className={`${styles.card} ${item.active ? styles.active : ""}`}
            >
              <div className={styles.iconCircle}>
                <img
                  className={styles.icon}
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                />
              </div>

              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.actions}>
          <button className={`${styles.btn} ${styles.btnRed}`} type="button">
            Read more
          </button>

          <span className={styles.or}> - OR - </span>

          <button className={`${styles.btn} ${styles.btnBlue}`} type="button">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}

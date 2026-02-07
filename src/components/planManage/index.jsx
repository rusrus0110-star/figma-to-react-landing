import styles from "./style.module.css";

import desktop from "../../assets/planManage/Desktop.svg";
import reminderEvents from "../../assets/planManage/Reminder_events.svg";
import reminderSearch from "../../assets/planManage/Reminder_search.svg";

function PlanManage() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.content}>
          <span className={styles.badge}>DESKTOP AND MOBILE APP</span>

          <h2 className={styles.title}>Plan and manage</h2>

          <p className={styles.text}>
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
            atqui laudem an, insolens gubergren similique est cu. Et vel modus
            congue vituperata. Solum patrioque no sea. Mea ex malis mollis
            oporteat. Eum an expetenda consequat.
          </p>

          <div className={styles.actions}>
            <button className={styles.primary}>View video</button>
            <button className={styles.secondary}>See features</button>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.preview}>
          <div className={`${styles.card} ${styles.desktop}`}>
            <img src={desktop} alt="Desktop app preview" />
          </div>

          <div className={`${styles.card} ${styles.mobile}`}>
            <img src={reminderSearch} alt="Mobile reminder events" />
          </div>

          <div className={`${styles.card} ${styles.widget}`}>
            <img src={reminderEvents} alt="Reminder search" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlanManage;

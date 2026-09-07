import styles from "./RequirementExample.module.css";

/** Static marketing illustration. No readiness calculation or product data. */
export function RequirementExample() {
  return (
    <aside className={styles.example} aria-label="An itemized-bill requirement, illustrated">
      <header className={styles.header}>
        <p className={styles.label}>Illustrative synthetic example</p>
        <h3 className={styles.title}>A balance is not an itemized bill.</h3>
        <p className={styles.provenance}>Constructed illustration, not product output.</p>
      </header>
      <ol className={styles.steps}>
        <li className={styles.step}>
          <span className={styles.number} aria-hidden="true">01</span>
          <div>
            <h4 className={styles.stepTitle}>The requirement</h4>
            <p>An itemized bill through July 31, matching the person and provider.</p>
          </div>
        </li>
        <li className={`${styles.step} ${styles.gap}`}>
          <span className={styles.number} aria-hidden="true">02</span>
          <div>
            <h4 className={styles.stepTitle}>What came back</h4>
            <p>Only a <strong>balance summary</strong>. No service dates or line-item charges.</p>
          </div>
        </li>
        <li className={styles.step}>
          <span className={styles.number} aria-hidden="true">03</span>
          <div>
            <h4 className={styles.stepTitle}>Catena’s correction</h4>
            <p>Requests the itemized bill with authorization, then checks the person, provider, dates and charges.</p>
          </div>
        </li>
        <li className={`${styles.step} ${styles.resolution}`}>
          <span className={styles.number} aria-hidden="true">04</span>
          <div>
            <h4 className={styles.stepTitle}>What changed</h4>
            <p>The corrected bill has <strong>dated line items</strong> through July 31, matching the person and provider.</p>
          </div>
        </li>
      </ol>
      <footer className={styles.consequence}>
        <p className={styles.result}>Bill requirement satisfied.<br />File still not Demand Ready.</p>
        <p>Later treatment still needs the firm’s cutoff decision and fresh checks of records and bills. New evidence can reopen readiness.</p>
      </footer>
    </aside>
  );
}

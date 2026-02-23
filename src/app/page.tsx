import styles from "./page.module.css";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <Image
            src="/logo-bee.svg"
            alt="InNature logo"
            width={32}
            height={32}
          />
        </div>

        <span className={styles.logoText}>InNature</span>

        <button className={styles.menu}>☰</button>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <Image
          src="/hero-bee.jpg"
          alt="Bee on flower"
          fill
          priority
          className={styles.heroImage}
        />
      </section>

      {/* Why bees */}
      <section className={styles.greenSection}>
        <div className={styles.card}>
          <h2>WARUM BIENEN WICHTIG SIND?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <Image
          src="/lavender.png"
          alt="Lavender"
          width={180}
          height={260}
          className={styles.lavender}
        />
      </section>

      {/* Wild bees dangers */}
      <section className={styles.greenSection}>
        <div className={styles.card}>
          <h2>GEFAHREN VON WILDBIENEN</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className={styles.soil}>
          <span>🌼</span>
          <span>🌸</span>
          <span>🌷</span>
        </div>
      </section>

      {/* About */}
      <section className={styles.about}>
        <div>
          <h2>ÜBER UNS</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className={styles.aboutImage}>
          <Image
            src="/about.jpg"
            alt="About project"
            width={420}
            height={280}
          />
        </div>
      </section>
    </main>
  );
}

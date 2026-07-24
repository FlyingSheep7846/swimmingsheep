import styles from "./SideRain.module.css";

const drops = Array.from({ length: 40 });

export default function SideRain({ side }) {
  return (
    <div
      className={`${styles.rain} ${styles[side]}`}
      aria-hidden="true"
    >
      {drops.map((_, index) => (
        <span
          key={index}
          className={styles.drop}
          style={{
            "--x": `${(index * 37) % 100}%`,
            "--delay": `${-(index * 0.43)}s`,
            "--duration": `${2.5 + (index % 5) * 0.35}s`,
            "--length": `${12 + (index % 4) * 8}px`,
          }}
        />
      ))}
    </div>
  );
}
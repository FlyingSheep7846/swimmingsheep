import Header from "@/components/Header/NewHeader";
import Footer from "@/components/Footer/Footer";
import styles from "./Layout.module.css";

export default function Layout({ children, sidebar = null }) {
  return (
    <div className={styles.page}>
      <div className={styles.topStrip} />

      <Header />

      <div className={styles.site}>
        <div
          className={
            sidebar
              ? styles.bodyWithSidebar
              : styles.body
          }
        >
          {sidebar && (
            <aside className={styles.sidebar}>
              {sidebar}
            </aside>
          )}

          <main className={styles.content}>
            {children}
          </main>
        </div>

      </div>
      
      <Footer />
    </div>
  );
}
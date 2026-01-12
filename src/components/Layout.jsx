import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const styles = {
  App: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flex: 1,
  }
};

export default function Layout({ children }) {
  return (
    <div style={styles.App}>
      <Header />
      <div style={styles.content}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
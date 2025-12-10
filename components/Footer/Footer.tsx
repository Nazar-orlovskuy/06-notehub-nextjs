import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} NoteHub. All rights reserved.
        </p>
        <div className={styles.info}>
          <p>Developer: Nazar Orlovskyi</p>
          <p>
            Contact us: <a href="mailto:student@notehub.app">student@notehub.app</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

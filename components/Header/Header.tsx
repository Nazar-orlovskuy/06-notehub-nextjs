import styles from './Header.module.css';
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" aria-label="Home" className={styles.logo}>
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/notes">Notes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

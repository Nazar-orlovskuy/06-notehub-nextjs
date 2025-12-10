import styles from './Home.module.css';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to NoteHub</h1>
        <p className={styles.description}>
          NoteHub is a simple and efficient application designed for managing personal notes.
        </p>
        <p className={styles.description}>
          Write, edit and organize notes in one clean interface.
        </p>
      </div>
    </main>
  );
}

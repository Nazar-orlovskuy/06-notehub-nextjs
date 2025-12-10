"use client";

import styles from './NoteDetail.module.css';
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "../../../lib/api";

interface NoteDetailsClientProps {
  id: string;
}

export default function NoteDetailsClient({ id }: NoteDetailsClientProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });

  if (isLoading) return <p className={styles.content}>Завантаження...</p>;
  if (error) return <p className={styles.content}>Помилка завантаження нотатки</p>;
  if (!data) return <p className={styles.content}>Нотатку не знайдено</p>;

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.header}>
            <h2>{data.title}</h2>
            <span className={styles.tag}>{data.tag}</span>
          </div>
          <p className={styles.content}>{data.content}</p>
          <p className={styles.date}>{data.createdAt}</p>
        </div>
      </div>
    </main>
  );
}

"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "../../../lib/api";

interface NoteDetailsClientProps {
  id: string;
}

export default function NoteDetailsClient({ id }: NoteDetailsClientProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  if (isLoading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка завантаження нотатки</p>;

  if (!data) return <p>Дані не знайдено</p>; // <-- фіксує TS18048

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p> {/* <-- правильне поле API */}
    </div>
  );
}

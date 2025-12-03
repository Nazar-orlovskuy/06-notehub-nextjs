"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "../../../lib/api";

export default function NoteDetailsClient() {
  const { id } = useParams();

  const { data: note, isLoading, error } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id as string),
  });

  if (isLoading) return <p>Loading, please wait...</p>;
  if (error || !note) return <p>Something went wrong.</p>;

  return (
    <div>
      <div>
        <div>
          <h2>{note.title}</h2>
        </div>
        <p>{note.content}</p>
        <p>{note.createdAt}</p>
      </div>
    </div>
  );
}

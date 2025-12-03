import axios from "axios";
import type { FetchNotesResponse, FetchNotesParams } from "../types/noteApi";
import type { Note } from "../types/note";

const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const api = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchNotes = async ({
  page = 1,
  perPage = 12,
  search = "",
}: FetchNotesParams): Promise<FetchNotesResponse> => {
  const { data } = await api.get("/notes", { params: { page, perPage, search } });
  return data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const { data } = await api.get(`/notes/${id}`);
  return data;
};

export const createNote = async (
  note: Omit<Note, "id" | "createdAt" | "updatedAt">
) => {
  const { data } = await api.post("/notes", note);
  return data;
};

export const deleteNote = async (id: string) => {
  const { data } = await api.delete(`/notes/${id}`);
  return data;
};

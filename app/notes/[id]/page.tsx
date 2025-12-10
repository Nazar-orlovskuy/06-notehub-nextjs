import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import getQueryClient from "../../../lib/getQueryClient";
import { fetchNoteById } from "../../../lib/api";
import NoteDetailsClient from "./NoteDetails.client";

interface NoteDetailsPageProps {
  params: {
    id: string;
  };
}

export default async function NoteDetailsPage({ params }: NoteDetailsPageProps) {
  const { id } = params;
  const queryClient = getQueryClient();

  // Prefetch note data on the server
  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <NoteDetailsClient id={id} />
    </HydrationBoundary>
  );
}

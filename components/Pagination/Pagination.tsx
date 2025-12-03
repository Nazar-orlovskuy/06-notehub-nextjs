import ReactPaginate from "react-paginate";

export default function Pagination({
  pageCount,
  currentPage,
  onPageChange,
}: {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={currentPage - 1}
      previousLabel="<"
      nextLabel=">"
      onPageChange={(e) => onPageChange(e.selected + 1)}
    />
  );
}

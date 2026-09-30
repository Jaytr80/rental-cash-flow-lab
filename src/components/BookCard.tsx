import { books } from "@/lib/books";
export function BookCard({
  book,
  index,
}: {
  book: (typeof books)[number];
  index: number;
}) {
  return (
    <article className="book-card">
      <div className={`book-art ${book.color}`} aria-hidden="true">
        <div className="book-spine" />
        <span className="cover-series">
          RENTAL CASH FLOW LAB / {String(index + 1).padStart(2, "0")}
        </span>
        <strong>{book.title}</strong>
        <span className="cover-author">JAY ADAMS</span>
      </div>
      <p className="eyebrow">{book.goal}</p>
      <h3>{book.title}</h3>
      <p>{book.text}</p>
      <a
        className="text-link"
        href={`https://www.amazon.com/dp/${book.id}`}
        target="_blank"
        rel="noopener noreferrer sponsored"
      >
        View on Amazon ↗
      </a>
    </article>
  );
}

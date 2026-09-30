import Image from "next/image";
import { books } from "@/lib/books";
export function BookCard({ book }: { book: (typeof books)[number] }) {
  return (
    <article className="book-card">
      <a
        className="book-cover"
        href={`https://www.amazon.com/dp/${book.id}`}
        target="_blank"
        rel="noopener noreferrer sponsored"
        aria-label={`View ${book.title} on Amazon`}
      >
        <Image
          src={book.cover}
          alt={`${book.title} by Jay Adams — book cover`}
          width={1000}
          height={1500}
          sizes="(max-width: 760px) 280px, 320px"
        />
      </a>
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

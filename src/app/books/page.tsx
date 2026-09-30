import { books } from "@/lib/books";
import { BookCard } from "@/components/BookCard";
import { PageIntro } from "@/components/PageIntro";
export const metadata = { title: "Books by Jay Adams" };
export default function Books() {
  return (
    <section className="wrap section">
      <PageIntro tag="THE BOOKSHELF" title="Six books. Your next chapter.">
        <p>
          Build your understanding one topic at a time. Every book is by Jay
          Adams.
        </p>
      </PageIntro>
      <p className="fine affiliate">Amazon links may be affiliate links.</p>
      <div className="three-grid book-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}

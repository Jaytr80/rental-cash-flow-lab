import Link from "next/link";
import { BookCard } from "@/components/BookCard";
import { books } from "@/lib/books";
import { PageIntro } from "@/components/PageIntro";
export const metadata = { title: "Start here" };
const goals = [
  { name: "I’m exploring my first deal", i: 0 },
  { name: "I want to build monthly rental income", i: 1 },
  { name: "I want to understand more cash flow", i: 2 },
  { name: "I want to recycle capital with BRRRR", i: 3 },
  { name: "I want to work out my freedom number", i: 4 },
  { name: "I want to prepare for a conversation with my CPA", i: 5 },
];
export default function Start() {
  return (
    <section className="wrap section narrow">
      <PageIntro tag="START WHERE YOU ARE" title="What are you working toward?">
        <p>
          Choose the question on your mind. There’s a starting point for each.
        </p>
      </PageIntro>
      <p className="fine">Amazon links may be affiliate links.</p>
      <div className="start-books">
        {goals.map(({ name, i }) => (
          <section className="start-book" key={books[i].id}>
            <h2>{name}</h2>
            <BookCard book={books[i]} />
          </section>
        ))}
      </div>
      <Link className="button" href="/free-deal-analyzer">
        Put your learning on paper →
      </Link>
    </section>
  );
}

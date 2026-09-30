import Link from "next/link";
import { books } from "@/lib/books";
import { PageIntro } from "@/components/PageIntro";
export const metadata = { title: "Start here" };
const goals = [
  { name: "I’m exploring my first deal", i: 0 },
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
      <div className="chooser">
        {goals.map(({ name, i }) => (
          <a
            href={`https://www.amazon.com/dp/${books[i].id}`}
            key={i}
            target="_blank"
            rel="noopener noreferrer sponsored"
          >
            <span>
              <h2>{name}</h2>
              <p>{books[i].title}</p>
            </span>
            <span>↗</span>
          </a>
        ))}
      </div>
      <div className="callout">
        <h3>Thinking about the ongoing work of owning rentals?</h3>
        <p>
          Start with <em>Passive Income with Rental Properties</em> for the
          systems behind rental income.
        </p>
        <a
          className="text-link"
          href="https://www.amazon.com/dp/B0GQQM5S6T"
          rel="sponsored noopener noreferrer"
          target="_blank"
        >
          View on Amazon ↗
        </a>
      </div>
      <Link className="button" href="/free-deal-analyzer">
        Put your learning on paper →
      </Link>
    </section>
  );
}

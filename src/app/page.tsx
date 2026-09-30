import Link from "next/link";
import { ArrowUpRight, BookOpen, FileSpreadsheet, Layers } from "lucide-react";
import { books } from "@/lib/books";
import { BookCard } from "@/components/BookCard";
export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="dot" /> RENTAL INVESTING, WITH THE NUMBERS IN VIEW
          </p>
          <h1>
            Good deals start
            <br />
            with better
            <br />
            <em>questions.</em>
          </h1>
          <p className="intro">
            Learn to look past the listing. Explore books and practical tools
            for understanding rental cash flow, weighing risk, and making a plan
            of your own.
          </p>
          <div className="actions">
            <Link className="button" href="/free-deal-analyzer">
              Get the free deal analyzer <ArrowUpRight size={18} />
            </Link>
            <Link className="text-link" href="/start-here">
              Find your starting point →
            </Link>
          </div>
          <p className="micro">
            By Jay Adams · Education, without the return promises.
          </p>
        </div>
        <div className="hero-art">
          <div className="art-caption">
            <span>THE CONSERVATIVE APPROACH</span>
            <span>FIG. 01</span>
          </div>
          <div className="worksheet">
            <div className="sheet-top">
              <span>RENTAL CASH FLOW LAB</span>
              <span>↗</span>
            </div>
            <p className="eyebrow">A BETTER FIRST LOOK</p>
            <h2>
              Run the numbers.
              <br />
              Question the assumptions.
            </h2>
            <div className="sheet-row">
              <span>Rental income</span>
              <span>+ ____</span>
            </div>
            <div className="sheet-row">
              <span>Vacancy & operating costs</span>
              <span>− ____</span>
            </div>
            <div className="sheet-row">
              <span>Debt service & reserves</span>
              <span>− ____</span>
            </div>
            <div className="sheet-result">
              <span>Estimated cash flow</span>
              <span>= ____</span>
            </div>
            <p>Your inputs. A clearer picture.</p>
          </div>
          <div className="art-note">
            <span className="note-mark">↳</span>
            <span>
              The asking price is only
              <br />
              the beginning of the story.
            </span>
          </div>
        </div>
      </section>
      <div className="principles">
        <span>CONSERVATIVE ASSUMPTIONS</span>
        <span>REAL EXPENSES</span>
        <span>ROOM FOR UNCERTAINTY</span>
        <span>A PLAN BEFORE A PURCHASE</span>
      </div>
      <section className="wrap section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">BUILD YOUR FOUNDATION</p>
            <h2>A little clarity goes a long way.</h2>
          </div>
          <p>
            Start with a question.
            <br />
            Choose the resource that helps you explore it.
          </p>
        </div>
        <div className="three-grid">
          <Link className="path-card" href="/books">
            <BookOpen />
            <span className="card-number">01 / LEARN</span>
            <h3>Find your next read.</h3>
            <p>
              Six books, from your first rental to portfolio planning and better
              CPA conversations.
            </p>
            <span className="text-link">Explore the books ↗</span>
          </Link>
          <Link className="path-card" href="/free-deal-analyzer">
            <FileSpreadsheet />
            <span className="card-number">02 / PRACTICE</span>
            <h3>Give a deal a closer look.</h3>
            <p>
              A free, one-page worksheet and blank CSV to organize your own
              assumptions.
            </p>
            <span className="text-link">Get the free analyzer ↗</span>
          </Link>
          <Link className="path-card" href="/toolkit">
            <Layers />
            <span className="card-number">03 / GO DEEPER</span>
            <h3>Build a repeatable process.</h3>
            <p>
              The upcoming toolkit brings deal screening, BRRRR planning, and
              portfolio review together.
            </p>
            <span className="text-link">Preview the toolkit ↗</span>
          </Link>
        </div>
      </section>
      <section className="book-section">
        <div className="wrap section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE JAY ADAMS BOOKSHELF</p>
              <h2>Learn for the stage you’re in.</h2>
            </div>
            <Link className="text-link" href="/books">
              See all six books →
            </Link>
          </div>
          <p className="fine affiliate">
            Amazon links may be affiliate links. Cover graphics below are
            editorial representations.
          </p>
          <div className="three-grid">
            {books.slice(0, 3).map((book, index) => (
              <BookCard key={book.id} book={book} index={index} />
            ))}
          </div>
        </div>
      </section>
      <section className="wrap closing">
        <p className="eyebrow">START WITH ONE PROPERTY. AND A BLANK PAGE.</p>
        <h2>
          Less guesswork.
          <br />
          More thoughtful underwriting.
        </h2>
        <Link className="button" href="/free-deal-analyzer">
          Get your free worksheet ↗
        </Link>
        <p className="micro">No purchase required. Use your own numbers.</p>
      </section>
    </>
  );
}

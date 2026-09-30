import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
export const metadata = { title: "About Jay Adams" };
export default function About() {
  return (
    <section className="wrap section narrow">
      <PageIntro tag="ABOUT THE AUTHOR" title="Jay Adams">
        <p>
          Author of six books on residential real estate investing, rental cash
          flow, BRRRR, financial planning, and tax topics to discuss with a CPA.
        </p>
      </PageIntro>
      <div className="prose">
        <h2>A place to think through the numbers.</h2>
        <p>
          Rental Cash Flow Lab brings those books together with practical
          worksheets. The purpose is straightforward: help readers ask better
          questions, organize assumptions, and understand the work and
          uncertainty behind rental ownership.
        </p>
        <p>
          A listing can start a conversation. It cannot answer every question
          about vacancy, maintenance, financing, local conditions, or your own
          goals. These resources encourage a slower, more deliberate look.
        </p>
        <p>
          Jay Adams provides education. He is not a broker, lender, tax
          preparer, attorney, or investment adviser. Work with appropriately
          qualified professionals for guidance specific to your situation.
        </p>
        <Link className="button" href="/books">
          Explore the six books →
        </Link>
      </div>
    </section>
  );
}

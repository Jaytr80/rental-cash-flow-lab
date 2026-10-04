import { PageIntro } from "@/components/PageIntro";
import { SignupForm } from "@/components/SignupForm";
export const metadata = { title: "Free Conservative Rental Deal Analyzer" };
export default function Free() {
  return (
    <section className="wrap section split">
      <div>
        <PageIntro
          tag="THE FREE STARTING POINT"
          title="A clearer first look at a rental deal."
        >
          <p>
            The Conservative Rental Deal Analyzer puts the key assumptions on
            one page, so you can see what needs another question.
          </p>
        </PageIntro>
        <ul className="feature-list">
          <li>Purchase price, rent, vacancy, and operating costs</li>
          <li>NOI, debt service, and estimated cash flow</li>
          <li>
            Cap rate and cash-on-cash, plus optional DSCR and break-even
            occupancy
          </li>
          <li>An Excel file that does the math, and a printable worksheet</li>
        </ul>
        <p>
          The Excel file does the math from the numbers you type. The PDF
          is the same sheet to print and fill by hand. Use documented
          estimates, and pass when the rent or the loan is still a guess.
        </p>
        <p>
          <a className="button" href="/downloads/conservative-rental-deal-analyzer.xlsx">
            Download the Excel
          </a>
        </p>
        <p>
          <a className="text-link" href="/downloads/conservative-rental-deal-analyzer.pdf">
            Download the printable PDF
          </a>
        </p>
        <p className="fine">
          Illustrative and educational only. Results depend on your inputs; they
          are not a valuation, loan approval, or investment recommendation.
        </p>
      </div>
      <SignupForm />
    </section>
  );
}

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
          <li>A printable worksheet and a blank CSV for your spreadsheet</li>
        </ul>
        <p>
          This is a worksheet you fill in, not an automated calculator. Use
          documented estimates, include reserves, and test what happens when
          conditions change.
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

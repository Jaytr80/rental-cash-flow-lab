import { PageIntro } from "@/components/PageIntro";
export const metadata = { title: "Educational disclaimer" };
export default function Disclaimer() {
  return (
    <section className="wrap section narrow prose">
      <PageIntro tag="PLEASE READ" title="Education, with clear limits.">
        <p>
          These resources help you explore questions. They do not make decisions
          for you.
        </p>
      </PageIntro>
      <h2>Educational use only</h2>
      <p>
        The site, books, emails, worksheets, and toolkit provide general
        education, not individualized investment, financial, lending, legal, or
        tax advice. Jay Adams and Rental Cash Flow Lab are not a broker, lender,
        tax preparer, attorney, or investment adviser.
      </p>
      <h2>Estimates are not promises</h2>
      <p>
        Real estate investing involves risk, including loss of capital. Rent,
        occupancy, costs, interest rates, property values, financing
        availability, and regulations can change. No return, refinance,
        appreciation, tax outcome, or income level is promised.
      </p>
      <h2>Your inputs and your diligence</h2>
      <p>
        Tools use the reader’s own inputs and are educational estimates. Check
        formulas, time periods, definitions, and source documents independently.
        Simplified worksheets cannot account for every cost or circumstance.
        Consult qualified local professionals and your lender before relying on
        an analysis.
      </p>
      <h2>Tax and financing questions</h2>
      <p>
        Tax content is intended to help you prepare questions for a CPA.
        Financing measures may differ from a lender’s definitions and do not
        establish eligibility or approval.
      </p>
      <h2>External links</h2>
      <p>
        Amazon links may be affiliate links. Purchases may result in a
        commission. Prices, availability, and terms on external sites are
        controlled by those providers.
      </p>
    </section>
  );
}

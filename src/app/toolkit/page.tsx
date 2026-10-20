import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
export const metadata = {
  title: "Rental Deal Analyzer Pro",
  description:
    "One Excel workbook for long-term rental, BRRRR, short-term rental, and creative financing math. $29 one-time.",
};
export const dynamic = "force-dynamic";
const tabs = [
  ["Deal Inputs", "Enter the property once. Every tab reads from it."],
  ["Long-Term Rental", "Cash left each month, cap rate, cash-on-cash, debt coverage, break-even occupancy."],
  ["Scenarios", "Conservative, expected, and stress side by side: rent down, vacancy up, rate up, rehab over."],
  ["BRRRR Refi", "All-in cost, the refinance, cash left in the deal, and an exit-first check."],
  ["Short-Term Rental", "Month-by-month nightly rate and occupancy, cleaning and platform costs, STR vs. long-term."],
  ["Creative Financing", "Seller financing with a balloon, loan assumption, lease option, private money cost."],
  ["Offer Calculator", "The highest price that still meets your cash-flow, debt-coverage, and cash limits."],
  ["Compare 3 Deals", "Three properties on the same conservative math."],
];
const bonus = [
  "Cash Flow Underwriting & Portfolio Toolkit (printable PDF)",
  "Multi-deal pipeline CSV and PDF index",
  "Freedom Number worksheet, market screening and underwriting checklists",
  "Stress test, BRRRR exit-first, rehab walk, and refinance timeline worksheets",
  "Annual portfolio review, management scorecard, and questions for your CPA",
];
const faqs = [
  ["What do I need to open it?", "Microsoft Excel 2016 or later, or Google Sheets. No software account."],
  ["Is it a subscription?", "No. $29 one time."],
  ["How do I get the files?", "After checkout you get an email with your download link and a quick-start guide."],
  ["Does it do taxes or tell me what to buy?", "No. It does the math on your own numbers. No tax calculations, no promised returns, no recommendations."],
  ["Refunds?", "[refund policy: TBD]"],
];
export default function Toolkit() {
  let checkout: string | undefined;
  try {
    const url = new URL(process.env.MAILERTLITE_CHECKOUT_URL || "");
    if (url.protocol === "https:") checkout = url.href;
  } catch {}
  const Buy = ({ label }: { label: string }) =>
    checkout ? (
      <a className="button" href={checkout} rel="noopener noreferrer">
        {label}
      </a>
    ) : (
      <>
        <button className="button" disabled>
          Coming soon
        </button>
        <p className="fine">
          Checkout opens soon.{" "}
          <Link className="text-link" href="/free-deal-analyzer">
            Get the free analyzer
          </Link>{" "}
          and you will hear by email when Pro is ready.
        </p>
      </>
    );
  return (
    <section className="wrap section">
      <div className="split">
        <div>
          <PageIntro tag="RENTAL DEAL ANALYZER PRO" title="Same house. Four ways to run it.">
            <p>
              The free analyzer gives you one property’s core numbers. Pro runs
              the same property as a long-term rental, a BRRRR, a short-term
              rental, and a seller-financed deal, with a stress test and an
              offer ceiling, in one conservative Excel workbook.
            </p>
          </PageIntro>
          <p>
            Built for newer investors looking at a real property who want to
            compare strategies on the same numbers before making an offer.
            Green cells for your inputs, tan cells that fill in, and a worked
            example on every tab.
          </p>
        </div>
        <div className="price-card">
          <p className="eyebrow">RENTAL DEAL ANALYZER PRO</p>
          <h2>
            $29 <span>one-time</span>
          </h2>
          <p>Excel workbook, quick-start PDF, and the worksheet toolkit as a bonus.</p>
          <Buy label="Get Analyzer Pro — $29 ↗" />
          <p className="fine">Refunds: [refund policy: TBD]</p>
        </div>
      </div>
      <div className="section">
        <h2>Eight tabs, one set of inputs.</h2>
        <ul className="toolkit-list">
          {tabs.map(([t, d], i) => (
            <li key={t}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <strong>{t}.</strong>&nbsp;{d}
            </li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h2>Bonus: the worksheet toolkit.</h2>
        <ul className="feature-list">
          {bonus.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
      <div className="callout">
        <h2>Pairs with the books.</h2>
        <p>
          The BRRRR tab follows <em>Buy, Rehab, Rent, Refinance, Repeat</em>.
          The short-term tab follows <em>The Short-Term Rental Blueprint</em>.
          The creative financing tab follows{" "}
          <em>Creative Financing for Real Estate Investors</em>.
        </p>
        <Link className="text-link" href="/books">
          See all eight books →
        </Link>
      </div>
      <div className="section">
        <h2>Questions</h2>
        {faqs.map(([q, a]) => (
          <div key={q}>
            <h3>{q}</h3>
            <p>{a}</p>
          </div>
        ))}
        <Buy label="Get Analyzer Pro — $29 ↗" />
        <p className="fine">
          Educational estimates using your own inputs. Real estate investing
          involves risk. Jay Adams is not a broker, lender, tax preparer,
          attorney, or investment adviser.
        </p>
      </div>
    </section>
  );
}

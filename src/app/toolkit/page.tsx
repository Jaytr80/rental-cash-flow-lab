import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
export const metadata = { title: "Cash Flow Underwriting & Portfolio Toolkit" };
export const dynamic = "force-dynamic";
const contents = [
  "Multi-deal pipeline CSV and PDF index",
  "Freedom Number worksheet",
  "Market screening and conservative underwriting checklists",
  "Annual portfolio review and management scorecard",
  "Investment policy statement prompts",
  "Stress-test worksheet",
  "BRRRR exit-first worksheet",
  "Rehab walk and appraisal prep checklists",
  "Refinance timeline checklist",
  "Questions for a CPA — no tax calculator or tax-savings projections",
];
export default function Toolkit() {
  let checkout: string | undefined;
  try {
    const url = new URL(process.env.MAILERTLITE_CHECKOUT_URL || "");
    if (url.protocol === "https:") checkout = url.href;
  } catch {}
  return (
    <section className="wrap section">
      <div className="split">
        <div>
          <PageIntro
            tag="YOUR NEXT LAYER OF PREPARATION"
            title="A process you can come back to."
          >
            <p>
              The Cash Flow Underwriting & Portfolio Toolkit helps you organize
              the work before a purchase—and the reviews that come after.
            </p>
          </PageIntro>
          <p>
            Printable worksheets, practical checklists, and a blank pipeline
            CSV. Fill them with your own research and assumptions. No software
            account or custom calculator required.
          </p>
        </div>
        <div className="price-card">
          <p className="eyebrow">THE COMPLETE TOOLKIT</p>
          <h2>
            $29 <span>one-time</span>
          </h2>
          <p>
            Working price. Not a guaranteed offer until checkout is connected.
            The final price and terms will appear at checkout.
          </p>
          {checkout ? (
            <a className="button" href={checkout} rel="noopener noreferrer">
              Continue to checkout ↗
            </a>
          ) : (
            <button className="button" disabled>
              Checkout is not connected yet
            </button>
          )}
          <p className="fine">
            No payment is collected on this page. Purchase confirmation and file
            delivery must be connected before sales begin.
          </p>
        </div>
      </div>
      <div className="section">
        <h2>From first screen to annual review.</h2>
        <ul className="toolkit-list">
          {contents.map((x, i) => (
            <li key={x}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              {x}
            </li>
          ))}
        </ul>
      </div>
      <div className="callout">
        <h2>Free is the first look. The toolkit is the wider process.</h2>
        <p>
          The free analyzer covers one property’s core numbers. The paid pack
          adds deal comparison, market research, personal criteria, stress
          scenarios, rehab and refinance planning, and ongoing portfolio review.
        </p>
        <Link className="text-link" href="/free-deal-analyzer">
          Start with the free analyzer →
        </Link>
      </div>
    </section>
  );
}

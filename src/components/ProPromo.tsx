import Link from "next/link";
export function ProPromo({ lead }: { lead: string }) {
  return (
    <div className="callout pro-promo">
      <p className="eyebrow">RENTAL DEAL ANALYZER PRO · $29</p>
      <h2>{lead}</h2>
      <p>
        One Excel workbook: long-term rental, stress scenarios, BRRRR refi,
        short-term rental, creative financing, an offer calculator, and a
        3-deal comparison. The worksheet toolkit PDFs are included as a bonus.
      </p>
      <Link className="button" href="/toolkit">
        See what is inside →
      </Link>
    </div>
  );
}

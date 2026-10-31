import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const points = [
  "Run one property as a long-term rental, a BRRRR, a short-term rental, and a seller-financed deal.",
  "Conservative, expected, and stress scenarios side by side: rent down, vacancy up, rate up, rehab over.",
  "An offer calculator: the highest price that still meets your cash-flow, debt-coverage, and cash limits.",
  "Compare three deals on the same conservative math, plus the worksheet toolkit as a bonus.",
];

export function ProFeature() {
  let checkout: string | undefined;
  try {
    const url = new URL(process.env.MAILERTLITE_CHECKOUT_URL || "");
    if (url.protocol === "https:") checkout = url.href;
  } catch {}
  return (
    <section className="pro-feature" id="analyzer-pro">
      <div className="wrap pro-feature-inner">
        <div className="pro-feature-art">
          <Image
            src="/analyzer-pro-product.png"
            alt="Rental Deal Analyzer Pro workbook"
            width={1200}
            height={1200}
            sizes="(max-width: 860px) 90vw, 440px"
          />
        </div>
        <div className="pro-feature-copy">
          <p className="eyebrow">
            <span className="dot" /> RENTAL DEAL ANALYZER PRO
          </p>
          <h2>
            Same house. <em>Four ways</em> to run it.
          </h2>
          <p className="intro">
            The free analyzer gives you one property’s core numbers. Pro runs
            the same property four ways, with a stress test and an offer
            ceiling, in one conservative Excel workbook.
          </p>
          <ul className="pro-feature-list">
            {points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div className="pro-feature-price">
            <strong>$29</strong>
            <span>one-time · 14-day money-back guarantee</span>
          </div>
          <div className="actions">
            {checkout ? (
              <a className="button" href={checkout} rel="noopener noreferrer">
                Get Analyzer Pro — $29 <ArrowUpRight size={18} />
              </a>
            ) : (
              <Link className="button" href="/toolkit">
                Get Analyzer Pro — $29 <ArrowUpRight size={18} />
              </Link>
            )}
            <Link className="text-link" href="/toolkit">
              See what’s inside →
            </Link>
          </div>
          <p className="micro">
            Excel 2016+ or Google Sheets. Educational estimates on your own numbers.
          </p>
        </div>
      </div>
    </section>
  );
}

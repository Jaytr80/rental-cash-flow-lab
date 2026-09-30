import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://rentalcashflowlab.com"),
  title: {
    default: "Rental Cash Flow Lab | Jay Adams",
    template: "%s | Rental Cash Flow Lab",
  },
  description:
    "Books, practical worksheets, and conservative rental investing education by Jay Adams.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <header>
          <div className="nav-wrap">
            <Link className="brand" href="/">
              <Image
                className="brand-logo"
                src="/brand/logo-rising-bars.jpg"
                alt="Rental Cash Flow Lab"
                width={1280}
                height={720}
                priority
              />
            </Link>
            <nav aria-label="Main navigation">
              <Link href="/start-here">Start here</Link>
              <Link href="/books">Books</Link>
              <Link href="/toolkit">The toolkit</Link>
              <Link href="/about">About</Link>
            </nav>
            <Link className="button small" href="/free-deal-analyzer">
              Free deal analyzer <span>↗</span>
            </Link>
          </div>
        </header>
        <main id="main">{children}</main>
        <footer>
          <div className="footer-top">
            <div>
              <Link className="footer-brand" href="/">
                Rental Cash Flow Lab
              </Link>
              <p>
                Clearer thinking. More deliberate decisions.
                <br />
                Rental investing education by Jay Adams.
              </p>
            </div>
            <div className="footer-links">
              <Link href="/books">Books</Link>
              <Link href="/free-deal-analyzer">Free analyzer</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/disclaimer">Disclaimer</Link>
            </div>
          </div>
          <p className="fine">
            Jay Adams and Rental Cash Flow Lab are not a broker, lender, tax
            preparer, attorney, or investment adviser. Real estate investing
            involves risk. Tools use the reader’s own inputs and are educational
            estimates.
          </p>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Rental Cash Flow Lab</span>
            <span>Education first. Always.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}

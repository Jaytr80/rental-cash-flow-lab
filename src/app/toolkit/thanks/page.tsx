import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
export const metadata = {
  title: "Toolkit next steps",
  robots: { index: false, follow: false },
};
export default function Thanks() {
  return (
    <section className="wrap section narrow">
      <PageIntro tag="TOOLKIT NEXT STEPS" title="Thank you for your interest.">
        <p>
          This page does not confirm a purchase. No payment or order has been
          verified here.
        </p>
      </PageIntro>
      <p>
        If you completed a connected checkout, refer to the receipt and delivery
        instructions from that provider. Toolkit files are only delivered after
        a real purchase is confirmed. There are no download links on this page.
      </p>
      <Link className="button" href="/toolkit">
        Back to the toolkit →
      </Link>
    </section>
  );
}

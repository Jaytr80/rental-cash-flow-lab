import { PageIntro } from "@/components/PageIntro";
export const metadata = { title: "Privacy" };
export default function Privacy() {
  return (
    <section className="wrap section narrow prose">
      <PageIntro tag="PRIVACY NOTE" title="A simple signup. A clear purpose.">
        <p>
          Your first name and email are used to send the free file and a short
          educational series, including a toolkit offer. Unsubscribe anytime
          using the link in an email.
        </p>
      </PageIntro>
      <h2>What happens when you sign up</h2>
      <p>
        When email delivery is connected, the form sends your first name and
        email to MailerLite, our email service provider. This site does not
        maintain a separate subscriber database. When delivery is not connected,
        the form accepts your request without saving your details or sending
        email, and tells you so.
      </p>
      <h2>Service providers</h2>
      <p>
        Our hosting provider may process ordinary request information, such as
        IP addresses and browser details, to serve and protect the site.
        MailerLite processes subscriber information and may record email
        delivery and engagement activity according to its settings and privacy
        practices. We do not sell your signup details.
      </p>
      <p>
        Fonts are loaded from Google Fonts. Your browser sends ordinary request
        information, including your IP address, to Google when fetching those
        font files.
      </p>
      <h2>Your choices</h2>
      <p>
        Unsubscribe from the emails at any time. Once the series is active, you
        can also reply to an email to request correction or deletion of
        subscriber information. Unsubscribed addresses may be retained by the
        email provider to honor your choice.
      </p>
      <h2>Cookies and other sites</h2>
      <p>
        We have not added advertising pixels or analytics cookies. Amazon and
        any connected checkout have their own privacy policies. Payment
        information is handled by the checkout provider, not by this site.
      </p>
    </section>
  );
}

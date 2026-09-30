"use client";
import { useState, type FormEvent } from "react";
export function SignupForm() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      const result = await res.json();
      setMessage(result.message);
      setState(res.ok ? "success" : "error");
    } catch {
      setMessage("We couldn’t connect. Please try again.");
      setState("error");
    }
  }
  if (state === "success")
    return (
      <div className="success" role="status">
        <h2>Your worksheet is ready.</h2>
        <p>{message}</p>
        <a
          className="button"
          href="/downloads/conservative-rental-deal-analyzer.pdf"
          download
        >
          Download the PDF ↗
        </a>
        <p>
          <a
            className="text-link"
            href="/downloads/conservative-rental-deal-analyzer.csv"
            download
          >
            Download the blank CSV →
          </a>
        </p>
      </div>
    );
  return (
    <form onSubmit={submit}>
      <p className="eyebrow">FREE PDF + CSV</p>
      <h2>Start with your numbers.</h2>
      <label htmlFor="firstName">First name</label>
      <input
        id="firstName"
        name="firstName"
        autoComplete="given-name"
        required
        maxLength={80}
      />
      <label htmlFor="email">Email address</label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
        maxLength={254}
      />
      <div className="honey" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="consent">
        <input type="checkbox" name="consent" required />{" "}
        <span>
          Send me the analyzer and the short educational email series, including
          the toolkit offer. I can unsubscribe anytime.
        </span>
      </label>
      <button className="button" disabled={state === "loading"} type="submit">
        {state === "loading" ? "Connecting…" : "Get the free analyzer ↗"}
      </button>
      <p className="fine">
        See our <a href="/privacy">privacy note</a>. No purchase required.
      </p>
      <p role="alert">{state === "error" ? message : ""}</p>
    </form>
  );
}

import { NextResponse } from "next/server";
export async function POST(request: Request) {
  const reply = (message: string, status = 200) =>
    NextResponse.json(
      { message },
      { status, headers: { "Cache-Control": "no-store" } },
    );
  if (
    request.headers.get("origin") &&
    request.headers.get("origin") !== new URL(request.url).origin
  )
    return reply("Please submit the form from this site.", 403);
  if (!request.headers.get("content-type")?.includes("application/json"))
    return reply("Please submit the signup form.", 415);
  let data;
  try {
    const text = await request.text();
    if (text.length > 4096) return reply("The form is too large.", 413);
    data = JSON.parse(text);
  } catch {
    return reply("Please check the form and try again.", 400);
  }
  if (!data || typeof data !== "object")
    return reply("Please check the form.", 400);
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const name = typeof data.firstName === "string" ? data.firstName.trim() : "";
  if (
    !name ||
    name.length > 80 ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    data.consent !== "on"
  )
    return reply(
      "Please enter your first name, a valid email address, and confirm the email subscription.",
      400,
    );
  if (data.website) return reply("Please leave the website field empty.", 400);
  const key = process.env.MAILERTLITE_API_KEY;
  const group = process.env.MAILERTLITE_GROUP_ID;
  if (!key || !group)
    return reply(
      "Delivery is being connected. Your form was accepted, but your details were not saved and no email was sent. Download your files below; sign up again once email delivery is available.",
    );
  try {
    const response = await fetch(
      "https://connect.mailerlite.com/api/subscribers",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, fields: { name }, groups: [group] }),
        signal: AbortSignal.timeout(10000),
      },
    );
    if (!response.ok)
      return reply(
        "We couldn’t complete your subscription. Please try again later.",
        502,
      );
    return reply(
      "Your signup was accepted. Download your files below. Email delivery depends on the connected email series; if you previously unsubscribed, you may need to confirm your subscription again.",
    );
  } catch {
    return reply(
      "The email service is temporarily unavailable. Please try again later.",
      503,
    );
  }
}

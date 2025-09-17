import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(5000),
  company: z.string().optional().transform(v => v?.trim() ?? ""),
});

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const parsed = ContactSchema.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
    }
    const { name, email, message, company } = parsed.data;

    if (company) {
      return NextResponse.json({ ok: true });
    }

    const to = process.env.CONTACT_TO!;
    const from = process.env.CONTACT_FROM!;

    await resend.emails.send({
      from,
      to,
      subject: `New portfolio message from ${name}`,
      reply_to: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

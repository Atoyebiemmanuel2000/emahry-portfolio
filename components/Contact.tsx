
"use client";

import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  CheckCircle2,
} from "lucide-react";
import { social } from "@/lib/data";

export default function Contact() {
  const [err, setErr] = useState<Record<string, string>>({});
  const [state, setState] = useState<
    "idle" | "sending" | "ok" | "fail"
  >("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const fd = new FormData(form);

    const d = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };

    const x: Record<string, string> = {};

    if (!d.name) {
      x.name = "Enter your name.";
    }

    if (!/^\S+@\S+\.\S+$/.test(d.email)) {
      x.email = "Enter a valid email address.";
    }

    if (d.message.length < 10) {
      x.message = "Write at least 10 characters.";
    }

    setErr(x);

    if (Object.keys(x).length > 0) return;

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setState("fail");
      return;
    }

    setState("sending");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: d.name,
            email: d.email,
            message: d.message,
            subject: `Portfolio message from ${d.name}`,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error("Message delivery failed");
      }

      setState("ok");
      setErr({});
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      setState("fail");
    }
  }

  const field =
    "w-full rounded-xl border border-line bg-ink/60 px-4 py-3 outline-none transition focus:border-iris";

  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-5 py-24"
    >
      <div className="grid gap-10 border-t border-line pt-12 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
            Have an idea? Let's build it.
          </h2>

          <a
            href={`mailto:${social.email}`}
            className="mt-6 inline-flex items-center gap-2 text-amber"
          >
            <Mail size={18} />
            {social.email}
          </a>

          <div className="mt-6 flex gap-4 text-mute">
            <a
              aria-label="GitHub"
              href={social.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>

            <a
              aria-label="LinkedIn"
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>

            <a
              aria-label="X"
              href="https://x.com/emahryy"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter />
            </a>
          </div>
        </div>

        <form
          onSubmit={submit}
          noValidate
          className="space-y-4"
        >
          {(["name", "email", "message"] as const).map((k) => (
            <div key={k}>
              <label
                htmlFor={k}
                className="mb-1 block text-sm capitalize text-mute"
              >
                {k}
              </label>

              {k === "message" ? (
                <textarea
                  id={k}
                  name={k}
                  rows={4}
                  required
                  className={field}
                  aria-invalid={!!err[k]}
                />
              ) : (
                <input
                  id={k}
                  name={k}
                  type={k === "email" ? "email" : "text"}
                  required
                  className={field}
                  aria-invalid={!!err[k]}
                />
              )}

              {err[k] && (
                <p
                  role="alert"
                  className="mt-1 text-sm text-red-400"
                >
                  {err[k]}
                </p>
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={state === "sending"}
            className="w-full rounded-full bg-iris py-3 font-medium text-ink transition hover:scale-[1.02] disabled:opacity-60"
          >
            {state === "sending"
              ? "Sending…"
              : "Send message"}
          </button>

          {state === "ok" && (
            <p
              role="status"
              className="flex items-center gap-2 text-emerald-400"
            >
              <CheckCircle2 size={18} />
              Message sent successfully! I'll reply soon.
            </p>
          )}

          {state === "fail" && (
            <p role="alert" className="text-red-400">
              Couldn't send your message. Please try again
              or email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

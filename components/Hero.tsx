"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const lines = ["Building digital", "experiences that", "actually matter."];

export default function Hero() {
  const ref = useRef<HTMLHeadingElement>(null);
  const [time, setTime] = useState("");

  useEffect(() => {
    const t = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "Africa/Lagos",
          hour: "2-digit",
          minute: "2-digit",
        })
      );

    t();
    const id = setInterval(t, 30000);

    const el = ref.current;

    if (
      !el ||
      window.matchMedia(
        "(pointer: coarse), (prefers-reduced-motion: reduce)"
      ).matches
    ) {
      return () => clearInterval(id);
    }

    const chars = Array.from(
      el.querySelectorAll<HTMLElement>(".ch")
    );

    let raf = 0;

    const move = (e: MouseEvent) => {
      cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        chars.forEach((c) => {
          const r = c.getBoundingClientRect();

          const d = Math.hypot(
            e.clientX - (r.left + r.width / 2),
            e.clientY - (r.top + r.height / 2)
          );

          c.style.fontWeight = String(
            Math.round(400 + 350 * Math.max(0, 1 - d / 200))
          );
        });
      });
    };

    window.addEventListener("mousemove", move, { passive: true });

    return () => {
      clearInterval(id);
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="top"
      className="mx-auto flex min-h-screen max-w-6xl flex-col justify-end px-5 pb-14 pt-36"
    >
      <p className="flex flex-wrap items-center gap-x-3 font-mono text-xs text-mute">
        <i className="h-2 w-2 rounded-full bg-emerald-400" />
        Available for opportunities
        <span className="text-line">/</span>
        Nigeria
        {time && <> · {time} WAT</>}
      </p>

      <h1
        ref={ref}
        aria-label={lines.join(" ")}
        className="mt-8 text-[clamp(2rem,9vw,7rem)] leading-[.95] tracking-tight"
        style={{ fontWeight: 400 }}
      >
        {lines.map((l, i) => (
          <span
            key={i}
            className="block overflow-hidden whitespace-nowrap pb-[.08em]"
            aria-hidden="true"
          >
            <motion.span
              className="block"
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.1 + i * 0.12,
                duration: 0.8,
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              {Array.from(l).map((c, j) => (
                <span
                  key={j}
                  className="ch"
                  style={{
                    fontWeight: 400,
                    transition: "font-weight .15s",
                  }}
                >
                  {c}
                </span>
              ))}
            </motion.span>
          </span>
        ))}
      </h1>

      <div className="mt-12 grid gap-8 border-t border-line pt-8 md:grid-cols-[1fr_auto] md:items-end">
        <p className="max-w-xl text-lg text-mute">
          I'm Emahry. I design, build and ship web products, from the interface
          to the cloud underneath, with a growing side of AI and Web3.
        </p>

        <div className="flex gap-3">
          <a
            href="#projects"
            className="rounded-full bg-iris px-6 py-3 font-medium text-ink transition hover:scale-105"
          >
            View my work
          </a>

          <a
            href="https://wa.me/2347033054705"
            className="rounded-full border border-line px-6 py-3 transition hover:border-iris"
          >
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}
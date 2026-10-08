"use client";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { timeline } from "@/lib/data";
export default function Experience(){
  const ref=useRef(null); const {scrollYProgress}=useScroll({target:ref,offset:["start 70%","end 60%"]});
  return <section id="experience" className="mx-auto max-w-3xl px-5 py-24"><h2 className="mb-12 text-4xl font-semibold tracking-tight">The journey so far</h2>
    <ol ref={ref} className="relative ml-3 space-y-10 border-l border-line pl-8">
      <motion.span style={{scaleY:scrollYProgress}} className="absolute -left-px top-0 h-full w-0.5 origin-top bg-iris"/>
      {timeline.map(t=><li key={t.year} className="relative"><i className="absolute -left-[39px] top-1.5 h-3 w-3 rounded-full border-2 border-iris bg-ink"/>
        <p className="font-mono text-xs text-amber">{t.year}</p><h3 className="text-xl font-semibold">{t.title} <span className="text-mute font-normal">· {t.place}</span></h3><p className="mt-1 text-mute">{t.text}</p></li>)}</ol></section>;
}

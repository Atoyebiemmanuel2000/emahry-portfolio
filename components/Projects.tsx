"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects, slug } from "@/lib/data";
const filters=["All","Web","SaaS","AI","Web3"];
export default function Projects(){
  const [f,setF]=useState("All"); const list=projects.filter(p=>f==="All"||p.cat===f);
  return <section id="projects" className="mx-auto max-w-6xl px-5 py-28">
    <div className="mb-12 flex flex-wrap items-end justify-between gap-6"><h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Selected work</h2>
      <div role="group" aria-label="Filter projects" className="flex gap-5 font-mono text-sm">{filters.map(x=><button key={x} aria-pressed={f===x} onClick={()=>setF(x)} className={`pb-1 transition ${f===x?"border-b border-iris text-iris":"text-mute hover:text-bone"}`}>{x}</button>)}</div></div>
    <div className="group/list border-b border-line"><AnimatePresence mode="popLayout" initial={false}>
      {list.map(p=><motion.article layout key={p.name} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="grid items-center gap-6 border-t border-line py-8 transition-opacity duration-300 group-hover/list:opacity-40 hover:!opacity-100 md:grid-cols-[1fr_13rem]">
        <div><div className="flex items-baseline gap-4"><h3 className="text-4xl font-semibold tracking-tight md:text-6xl"><Link href={`/projects/${slug(p.name)}`} className="hover:text-iris">{p.name}</Link></h3><span className="font-mono text-xs text-mute">{p.cat}</span></div>
          <p className="mt-3 max-w-xl text-mute">{p.desc}</p><p className="mt-3 font-mono text-xs text-bone/70">{p.tech.join(", ")}</p>
          <div className="mt-5 flex gap-6 text-sm"><Link href={`/projects/${slug(p.name)}`} className="inline-flex items-center gap-1 hover:text-iris">Case study<ArrowUpRight size={16}/></Link><a href="#" className="inline-flex items-center gap-1 text-mute hover:text-iris">Live demo<ArrowUpRight size={16}/></a></div></div>
        <div className="hidden h-32 overflow-hidden rounded-lg md:block" aria-hidden><div className="h-full w-full transition duration-500 hover:scale-110" style={{background:`conic-gradient(from ${p.hue}deg at 30% 70%,hsl(${p.hue} 70% 55%),hsl(${p.hue+70} 60% 25%),hsl(${p.hue} 70% 55%))`}}/></div>
      </motion.article>)}</AnimatePresence></div></section>;
}

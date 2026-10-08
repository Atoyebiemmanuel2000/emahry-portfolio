"use client";
import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/data";
export default function Navbar(){
  const [open,setOpen]=useState(false);
  const {scrollYProgress}=useScroll(); const w=useSpring(scrollYProgress,{stiffness:120,damping:25});
  const href=(n:string)=>n==="Home"?"#top":"#"+n.toLowerCase();
  return <header className="fixed inset-x-0 top-3 z-50 px-3">
    <nav aria-label="Main" className="glass mx-auto flex max-w-5xl items-center justify-between px-5 py-3 relative overflow-hidden">
      <a href="#top" className="font-mono text-sm font-semibold">emahry<span className="text-iris">.dev</span></a>
      <ul className="hidden gap-7 text-sm text-mute md:flex">{nav.map(n=><li key={n}><a className="transition hover:text-bone" href={href(n)}>{n}</a></li>)}</ul>
      <button className="md:hidden" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
      <motion.div style={{scaleX:w}} className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-gradient-to-r from-iris to-amber"/>
    </nav>
    {open&&<ul className="glass mx-auto mt-2 max-w-5xl space-y-1 p-3 md:hidden">{nav.map(n=><li key={n}><a onClick={()=>setOpen(false)} className="block rounded-lg px-3 py-3 hover:bg-line/50" href={href(n)}>{n}</a></li>)}</ul>}
  </header>;
}

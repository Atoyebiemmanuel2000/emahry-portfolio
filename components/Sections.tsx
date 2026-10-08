"use client";
import { useEffect, useState } from "react";
import { ghUser } from "@/lib/data";
const wrap="mx-auto max-w-6xl px-5 py-28";
export function About(){
  return <section id="about" className={wrap}>
    <p className="max-w-4xl text-[clamp(1.6rem,3.6vw,3rem)] leading-[1.15] tracking-tight">I'm a software engineer in Nigeria who likes products that are quick, clear and quietly well made. <span className="text-mute">I build for the web, run it on the cloud, and test AI and Web3 against one question: is this actually useful?</span></p>
    <p className="mt-8 max-w-md text-mute">I started with HTML and curiosity. I'm still learning something new most weeks, and I like working with people who are too.</p></section>;
}
export function GitHubStats(){
  const [s,setS]=useState<{public_repos:number;followers:number;following:number}|null>(null);
  useEffect(()=>{fetch(`https://api.github.com/users/${ghUser}`).then(r=>r.ok?r.json():null).then(setS).catch(()=>{})},[]);
  const stats=[["Repositories",s?.public_repos],["Followers",s?.followers],["Following",s?.following]] as const;
  return <section className={wrap} aria-labelledby="gh"><h2 id="gh" className="mb-10 text-3xl font-semibold tracking-tight md:text-4xl">On GitHub</h2>
    <dl className="grid grid-cols-3 border-y border-line">{stats.map(([l,v])=><div key={l} className="py-8 pr-4"><dd className="text-5xl font-semibold md:text-7xl">{v??"—"}</dd><dt className="mt-2 font-mono text-xs text-mute">{l}</dt></div>)}</dl>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img loading="lazy" className="mt-8 w-full opacity-80" src={`https://ghchart.rshah.org/f2b84b/${ghUser}`} alt={`${ghUser}'s GitHub contribution graph`}/></section>;
}
export function Building(){
  const items=[["AI-powered products","prototyping"],["Modern web applications","shipping"],["Cloud infrastructure","learning"],["Web3 experiments","exploring"]];
  return <section className={wrap}><h2 className="mb-10 text-3xl font-semibold tracking-tight md:text-4xl">Currently building</h2>
    <ul className="border-b border-line">{items.map(([t,st])=><li key={t} className="flex items-baseline justify-between gap-4 border-t border-line py-5 text-2xl transition hover:pl-3 md:text-4xl">{t}<span className="font-mono text-xs text-iris">{st}</span></li>)}</ul></section>;
}

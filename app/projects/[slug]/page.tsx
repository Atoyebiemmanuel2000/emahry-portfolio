import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, caseStudies, slug } from "@/lib/data";
import Footer from "@/components/Footer";
export const generateStaticParams=()=>projects.map(p=>({slug:slug(p.name)}));
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
  const p=projects.find(x=>slug(x.name)===(await params).slug); return p?{title:`${p.name} — Case study | Emahry.dev`,description:p.desc}:{};
}
export default async function Page({params}:{params:Promise<{slug:string}>}){
  const s=(await params).slug; const i=projects.findIndex(x=>slug(x.name)===s); const c=caseStudies[s];
  if(i<0||!c) notFound(); const p=projects[i]; const next=projects[(i+1)%projects.length];
  return <><main className="mx-auto max-w-5xl px-5 pb-24 pt-10">
    <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-mute hover:text-iris"><ArrowLeft size={16}/>All work</Link>
    <p className="mt-16 font-mono text-xs text-mute">{p.cat} · {c.year} · {c.role}</p>
    <h1 className="mt-3 text-[clamp(3rem,10vw,8rem)] font-semibold leading-none tracking-tight">{p.name}</h1>
    <p className="mt-6 max-w-2xl text-xl text-mute">{p.desc}</p>
    <div className="mt-12 h-64 rounded-xl md:h-96" aria-hidden style={{background:`conic-gradient(from ${p.hue}deg at 30% 70%,hsl(${p.hue} 70% 55%),hsl(${p.hue+70} 60% 25%),hsl(${p.hue} 70% 55%))`}}/>
    <dl className="mt-16 grid grid-cols-3 border-y border-line">{c.results.map(([v,l])=><div key={l} className="py-8 pr-3"><dd className="text-4xl font-semibold md:text-6xl text-iris">{v}</dd><dt className="mt-2 text-sm text-mute">{l}</dt></div>)}</dl>
    <div className="mt-16 grid gap-12 md:grid-cols-2">
      <section><h2 className="mb-3 font-mono text-sm text-mute">The problem</h2><p className="text-xl leading-snug">{c.problem}</p></section>
      <section><h2 className="mb-3 font-mono text-sm text-mute">What I built</h2><p className="text-xl leading-snug">{c.approach}</p></section></div>
    <p className="mt-12 font-mono text-sm text-bone/70">{p.tech.join(", ")}</p>
    <div className="mt-6 flex gap-6"><a href="#" className="inline-flex items-center gap-1 text-iris">Live demo<ArrowUpRight size={16}/></a><a href="#" className="inline-flex items-center gap-1 text-mute hover:text-iris">Source<ArrowUpRight size={16}/></a></div>
    <Link href={`/projects/${slug(next.name)}`} className="mt-24 block border-t border-line pt-8"><span className="font-mono text-xs text-mute">Next project</span><span className="mt-2 block text-4xl font-semibold transition hover:text-iris md:text-6xl">{next.name}</span></Link>
  </main><Footer/></>;
}

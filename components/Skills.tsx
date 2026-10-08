import { skills } from "@/lib/data";
export default function Skills(){
  return <section id="skills" className="mx-auto max-w-6xl px-5 py-28"><h2 className="mb-14 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">The tools I reach for first.</h2>
    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">{skills.map(g=><div key={g.group}>
      <h3 className="mb-5 border-b border-line pb-3 font-mono text-sm text-mute">{g.group}</h3>
      <ul className="space-y-2 text-2xl">{g.items.map(([n])=><li key={n} className="text-bone/80 transition hover:translate-x-1 hover:text-iris">{n}</li>)}</ul></div>)}</div></section>;
}

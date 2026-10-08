import { nav, social } from "@/lib/data";
export default function Footer(){
  return <footer className="border-t border-line px-5 py-10 text-sm text-mute"><div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
    <p className="font-mono text-bone">emahry<span className="text-iris">.dev</span></p>
    <ul className="flex flex-wrap gap-5">{nav.map(n=><li key={n}><a className="hover:text-bone" href={n==="Home"?"/#top":"/#"+n.toLowerCase()}>{n}</a></li>)}<li><a href={social.github}>GitHub</a></li></ul>
    <p className="font-mono">© {new Date().getFullYear()} · <span className="text-amber">{"// built with care in Nigeria"}</span></p></div></footer>;
}

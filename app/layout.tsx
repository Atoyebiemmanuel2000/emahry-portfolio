import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";
const display = Bricolage_Grotesque({ subsets:["latin"], variable:"--font-display" });
const mono = JetBrains_Mono({ subsets:["latin"], variable:"--font-mono" });
export const metadata: Metadata = {
  metadataBase: new URL("https://emahry.dev"),
  title: "Emahry.dev — Software Engineer & Web Developer",
  description: "Software engineer from Nigeria building web, cloud, AI and Web3 products.",
  openGraph:{title:"Emahry.dev",description:"Building digital experiences that actually matter.",url:"https://emahry.dev",type:"website"},
  twitter:{card:"summary_large_image",title:"Emahry.dev",description:"Software engineer: web, cloud, AI, Web3."},
};
export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en" className={`${display.variable} ${mono.variable}`}><body className="font-display">{children}</body></html>;
}

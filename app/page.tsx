import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { About, Building, GitHubStats } from "@/components/Sections";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Glow from "@/components/Glow";
export default function Page(){
  return <><Glow/><Navbar/><main><Hero/><About/><Skills/><Projects/><Experience/><GitHubStats/><Building/><Contact/></main><Footer/></>;
}

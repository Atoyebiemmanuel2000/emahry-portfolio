"use client";
import { useEffect } from "react";
export default function Glow(){
  useEffect(()=>{ if(matchMedia("(pointer:coarse)").matches) return;
    const m=(e:MouseEvent)=>{document.body.style.setProperty("--mx",e.clientX+"px");document.body.style.setProperty("--my",e.clientY+"px")};
    addEventListener("mousemove",m,{passive:true}); return()=>removeEventListener("mousemove",m)},[]);
  return null;
}

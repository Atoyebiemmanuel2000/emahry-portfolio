import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.tsx","./components/**/*.tsx"],
 theme:{extend:{colors:{ink:"#0b0d12",panel:"#141729",line:"#262a44",bone:"#ece9f5",mute:"#9a9db8",iris:"#f2b84b",amber:"#f2b84b"},
 fontFamily:{display:["var(--font-display)"],mono:["var(--font-mono)"]}}},plugins:[]} satisfies Config;

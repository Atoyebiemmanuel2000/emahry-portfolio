export const nav = ["Home","About","Skills","Projects","Experience","Contact"];
export const social = { github:"https://github.com/emahry", linkedin:"https://linkedin.com/in/emahry", x:"https://x.com/emahry", email:"hello@emahry.dev" };
export const skills = [
 {group:"Frontend",items:[["HTML",5],["CSS",5],["JavaScript",5],["TypeScript",4],["React",5],["Next.js",4],["Tailwind CSS",5]]},
 {group:"Backend",items:[["Node.js",4],["APIs",4],["Databases",3]]},
 {group:"Cloud / DevOps",items:[["Git",5],["GitHub",5],["Docker",3],["Cloud platforms",3]]},
 {group:"Other",items:[["AI",3],["Web3",3],["UI/UX",4],["System design",3]]},
] as const;
export const projects = [
 {name:"Ledgerly",cat:"SaaS",desc:"Invoicing and cash-flow dashboard for freelancers, with live currency conversion.",tech:["Next.js","Postgres","Stripe"],hue:260},
 {name:"Pulse Docs",cat:"AI",desc:"Chat with your documents. Upload a PDF, ask questions, get cited answers.",tech:["TypeScript","LLM API","pgvector"],hue:30},
 {name:"ChainWatch",cat:"Web3",desc:"Wallet tracker that explains on-chain activity in plain language.",tech:["React","ethers.js","Node.js"],hue:170},
 {name:"Studio Lagos",cat:"Web",desc:"Fast, accessible marketing site for a creative agency, built to score 100 on Lighthouse.",tech:["Next.js","Tailwind","Motion"],hue:330},
 {name:"Deployr",cat:"SaaS",desc:"One-command Docker deploys to a VPS with zero-downtime rollouts.",tech:["Docker","Node.js","GitHub Actions"],hue:210},
 {name:"MintBoard",cat:"Web3",desc:"NFT minting page with allowlist checks and gasless claims.",tech:["Solidity","Next.js","wagmi"],hue:90},
];
export const timeline = [
 {year:"2025 – now",title:"Software Engineer",place:"Company name",text:"Building web products end to end, from UI to cloud infrastructure."},
 {year:"2023 – 2025",title:"Freelance Web Developer",place:"Independent",text:"Shipped sites and web apps for clients across Nigeria and abroad."},
 {year:"2022",title:"Started with Web3 and AI",place:"Self-directed",text:"Built first smart contracts and LLM-powered prototypes."},
 {year:"2021",title:"Wrote my first line of code",place:"HTML, CSS, JavaScript",text:"Fell for building things people can click."},
];
export const ghUser="emahry";
export const slug=(n:string)=>n.toLowerCase().replace(/\s+/g,"-");
// Placeholder case studies: replace every sentence and number with your real project details.
export const caseStudies:Record<string,{year:string;role:string;problem:string;approach:string;results:[string,string][]}>={
 ledgerly:{year:"2025",role:"Design and full-stack build",problem:"Freelancers paid in several currencies kept losing track of what clients owed them and when cash would actually arrive.",approach:"One dashboard that converts every invoice to the user's home currency, flags late payments, and forecasts the next 90 days of cash flow. Built on Next.js and Postgres, with Stripe handling payment links.",results:[["3 min","to send a first invoice"],["-40%","late payments after reminders"],["120","beta users in month one"]]},
 "pulse-docs":{year:"2025",role:"Solo build",problem:"Teams had hundreds of PDFs and nobody could find the answer buried on page 63.",approach:"Documents are split, embedded into pgvector and searched at question time. Every answer cites the page it came from, so people can verify it rather than trust it.",results:[["<4s","median answer time"],["92%","answers with a correct citation"],["2k","pages indexed in testing"]]},
 chainwatch:{year:"2024",role:"Frontend and indexing",problem:"Wallet explorers show raw hashes. Most people cannot tell what a transaction actually did.",approach:"A small indexer decodes common contract calls and the React UI describes each one in a sentence, such as 'Swapped 0.5 ETH for USDC'.",results:[["12","protocols decoded"],["1.1s","wallet page load"],["300+","weekly users"]]},
 "studio-lagos":{year:"2024",role:"Design and development",problem:"A creative agency's old site was slow and hard to read on phones, where most visitors arrived.",approach:"A static-first Next.js site with optimised images and a type-led layout. Content lives in Markdown so the team can edit it without a developer.",results:[["100","Lighthouse performance"],["-65%","page weight"],["2x","enquiries from mobile"]]},
 deployr:{year:"2024",role:"Solo build",problem:"Deploying a Dockerised app to a cheap VPS meant a page of manual SSH steps.",approach:"A CLI that builds, pushes and swaps containers behind a proxy, with health checks and automatic rollback if the new version fails.",results:[["1","command to deploy"],["0s","downtime on rollout"],["<30s","typical deploy"]]},
 mintboard:{year:"2023",role:"Smart contract and frontend",problem:"Allowlist mints were failing for users who didn't have enough gas or hit confusing wallet errors.",approach:"A Merkle-proof allowlist contract and a mint page that explains each wallet step, with gasless claiming through a relayer.",results:[["98%","mint success rate"],["1,500","wallets minted"],["0","support tickets on gas"]]},
};

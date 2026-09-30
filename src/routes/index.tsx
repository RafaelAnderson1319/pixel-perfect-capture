import { createFileRoute } from "@tanstack/react-router";
import { Menu, ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";
import bottle from "@/assets/bottle.png";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "[WINERY NAME] — The Art of the Vine" }, { name: "description", content: "An editorial luxury wine story shaped by place, patience and craft." }] }),
  component: WineryPage,
});

const photos = {
  harvest: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1000&q=82",
  cellar: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=1000&q=82",
  barrels: "https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&w=1000&q=82",
  vineyard: "https://images.unsplash.com/photo-1464638681273-096f04f3bfa3?auto=format&fit=crop&w=1000&q=82",
};

function useScroll() {
  const [y,setY]=useState(0);
  useEffect(()=>{const f=()=>setY(window.scrollY);f();window.addEventListener("scroll",f,{passive:true});return()=>window.removeEventListener("scroll",f)},[]);
  return y;
}
function Header(){
  const [open,setOpen]=useState(false);
  return <header className="wine-header">
    <button className="menu-button" onClick={()=>setOpen(!open)}><Menu size={17} strokeWidth={1}/> <span>Menu</span></button>
    <div className="crumb">Home <span>›</span> Line <span>›</span> Product</div>
    <a className="crest" href="#top">W</a>
    <nav className={open?"nav-links is-open":"nav-links"}><a href="#experience">TOUR</a><a href="#line">SHOP</a></nav>
  </header>;
}
function Bottle({className="",style}:{className?:string;style?:CSSProperties}){return <img className={`wine-bottle ${className}`} style={style} src={bottle} alt="[WINERY NAME] wine bottle"/>}

function WineryPage(){
 const scroll=useScroll(), hero=Math.min(scroll/700,1), featured=Math.min(Math.max((scroll-5200)/900,0),1);
 const process=[["Harvest",photos.harvest,"Fruit is gathered at first light, when freshness and concentration meet."],["Decanting",photos.cellar,"Gentle handling preserves the perfume of the vineyard from cellar to barrel."],["Aging",photos.barrels,"Time in oak brings structure, spice and a softer architecture."],["Maturation",photos.vineyard,"The final months are quiet: a wine settling into its own voice."]];
 return <main id="top" className="winery-page"><div className="paper-texture"/><Header/>
  <section className="hero story-section"><div className="hero-copy"><p className="eyebrow">EST. 1961 · VALLEY OF ORIGIN</p><h1>Terra<br/><em>Antica</em></h1><p className="hero-tagline">A wine shaped by altitude, stone and the quiet passage of time.</p><a className="scroll-cue" href="#tasting"><ArrowDown size={14}/> SCROLL TO DISCOVER</a></div><div className="hero-word">TERROIR</div><div className="hero-bottle-wrap" style={{transform:`translate3d(${hero*-27}vw,${hero*3}vh,0) rotate(${-7-hero*12}deg)`}}><Bottle/></div></section>

  <section id="tasting" className="tasting story-section"><div className="pinned-bottle"><Bottle style={{transform:`rotate(${-9+Math.min(scroll/120,25)}deg)`}}/><span className="bottle-caption">CABERNET · 61</span></div><div className="tasting-content"><p className="eyebrow">01 / TASTING NOTES</p><h2>Precision in<br/><em>every layer.</em></h2><div className="note-grid"><div><span>VINIFICATION</span><p>Hand-picked fruit, gentle extraction and slow fermentation in small French oak vessels. Every decision follows the character of the vintage.</p></div><div><span>PAIRINGS</span><p>Roasted root vegetables, wild mushrooms, aged cheese and long evenings around a generous table.</p></div></div></div></section>

  <section className="sensory story-section"><div className="botanical">✦</div><p className="eyebrow sensory-label">02 / SENSORY PROFILE</p><div className="sensory-bottle"><Bottle/></div><div className="sensory-grid">{[["COLOR","Garnet","Deep ruby at the core, catching the light with a copper edge."],["APPEARANCE","Clear","Polished, luminous and remarkably precise in the glass."],["AROMA","Wild","Blackcurrant, cedar leaf, dried violet and warm stone."],["TASTE","Long","Silken tannin, mineral tension and a finish that keeps unfolding."]].map(([label,title,copy])=><div key={label}><span>{label}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></section>

  <section className="statement"><p>From the vine to the bottle,<br/>a long <span>journey</span>.</p></section>

  <section className="process story-section"><div className="section-heading"><p className="eyebrow">03 / THE PROCESS</p><h2>Made slowly.<br/><em>Made with intent.</em></h2></div><div className="process-row">{process.map(([title,image,copy],i)=><article className="process-card" key={title} style={{transform:`translateY(${Math.sin((scroll-2500+i*110)/500)*12}px)`}}><img src={image} alt={title}/><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section>

  <section id="line" className="line story-section"><div className="line-name">LINE '61</div><div className="line-intro"><p className="eyebrow">04 / THE COLLECTION</p><p>A family of expressions from one place, each bottle carrying a different rhythm of the same soil.</p></div><div className="product-line">{["Terra Antica","Cuvée 61","Riserva"].map((name,i)=><article className="line-product" key={name} style={{transform:`translateY(${Math.max(0,100-(scroll-3400)*.13+i*18)}px)`}}><Bottle/><h3>{name}</h3><span>VINTAGE 2021</span></article>)}</div></section>

  <section id="experience" className="experience story-section"><div className="experience-image"><img src={photos.cellar} alt="Historic wine cellar"/></div><div className="experience-copy"><p className="eyebrow">05 / EXPERIENCE</p><h2>The authentic<br/>experience of<br/><em>the valley.</em></h2><p>Walk beneath old stone, follow the cool air into the cellar and taste the place before you taste the wine. Our doors open onto a living archive of craft.</p><a className="underlink" href="#footer">DISCOVER <ArrowUpRight size={14}/></a></div></section>

  <section className="featured story-section"><div className="featured-name">Cuvée<br/><em>Imperiale</em><br/>Brut</div><div className="featured-bottle" style={{transform:`translateY(${Math.max(0,180-featured*180)}px) rotate(-4deg)`}}><Bottle/></div><p className="eyebrow">06 / FEATURED WINE · BRUT</p></section>

  <footer id="footer" className="wine-footer"><div className="map-lines"/><a className="crest footer-crest" href="#top">W</a><p>[WINERY NAME]</p><span>THE ART OF THE VINE · EST. 1961</span></footer>
 </main>;
}

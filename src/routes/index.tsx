import { createFileRoute } from "@tanstack/react-router";
import { User, Heart, ShoppingCart, ArrowRight, Menu } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import bottle from "@/assets/bottle.png";
import glassHand from "@/assets/glass-hand.png";
import grapes from "@/assets/grapes.png";
import boxBlack from "@/assets/box-black.png";
import boxWood from "@/assets/box-wood.png";
import swirl from "@/assets/swirl-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wine Box — Monthly Wine Surprises" },
      {
        name: "description",
        content:
          "Wine Box delivers handpicked surprise wines to your door every month. Discover unique flavors and stories from vineyards around the world.",
      },
      { property: "og:title", content: "Wine Box — Monthly Wine Surprises" },
      {
        property: "og:description",
        content:
          "Unwrap a new adventure with each delivery. Monthly surprise wine boxes from around the world.",
      },
    ],
  }),
  component: Index,
});

const boxes = [
  { name: "Essential Elegance Box", price: "25.00$", img: boxBlack },
  { name: "Vineyard Voyager Box", price: "35.00$", img: boxBlack },
  { name: "Luxury Reserve Box", price: "45.00$", img: boxWood },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["HOME", "ABOUT US", "CONTACT US"];
  return (
    <header className="relative z-20 mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-6 md:px-10">
      <a href="/" className="font-serif text-2xl font-bold tracking-tight">
        <span className="text-wine">Wine</span> <span className="text-foreground">Box</span>
      </a>

      <nav className="hidden items-center gap-8 md:flex">
        {links.map((l, i) => (
          <a
            key={l}
            href="#"
            className={`font-serif text-xs tracking-widest transition-colors hover:text-wine ${
              i === 0 ? "text-wine" : "text-foreground"
            }`}
          >
            {l}
          </a>
        ))}
      </nav>

      <div className="hidden items-center gap-6 md:flex">
        <User className="size-5 stroke-[1.5] text-foreground transition-colors hover:text-wine" />
        <Heart className="size-5 stroke-[1.5] text-foreground transition-colors hover:text-wine" />
        <ShoppingCart className="size-5 stroke-[1.5] text-wine" />
      </div>

      <button
        aria-label="Menu"
        onClick={() => setOpen((v) => !v)}
        className="justify-self-end md:hidden"
      >
        <Menu className="size-6 stroke-[1.5]" />
      </button>

      {open && (
        <nav className="col-span-2 flex flex-col gap-4 border-t border-border pt-4 md:hidden">
          {links.map((l, i) => (
            <a
              key={l}
              href="#"
              className={`font-serif text-xs tracking-widest ${i === 0 ? "text-wine" : ""}`}
            >
              {l}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* soft blurred wine-swirl backdrop */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[900px] overflow-hidden">
        <img
          src={swirl}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1200}
          className="h-full w-full scale-110 object-cover opacity-45 blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      <Navbar />

      {/* HERO */}
      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 pt-6 pb-20 md:grid-cols-2 md:px-10 md:pt-10 md:pb-28">
        <Reveal>
          <h1 className="text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Monthly <span className="text-wine">Wine</span>
            <br />
            Surprises
          </h1>
          <p className="mt-7 max-w-md font-serif text-lg leading-relaxed font-bold sm:text-xl">
            It's time to enjoy the surprise, wine-der and be delighted!
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed font-light text-foreground/70">
            Explore the world of undiscovered wines with our Wine Surprise Boxes. Unwrap a new
            adventure with each delivery, discovering unique flavors and stories from around the
            world.
          </p>
          <button className="mt-9 bg-wine px-8 py-3.5 text-xs font-medium tracking-widest text-white transition-colors hover:bg-wine-deep">
            SUBSCRIBE NOW
          </button>
        </Reveal>

        <Reveal delay={150} className="relative h-[420px] sm:h-[520px] lg:h-[620px]">
          <img
            src={bottle}
            alt="Cabernet Sauvignon bottle"
            width={800}
            height={1408}
            className="absolute bottom-6 left-1/2 h-[88%] w-auto -translate-x-1/2 object-contain drop-shadow-2xl"
          />
          <img
            src={glassHand}
            alt="Hand holding a glass of splashing red wine"
            loading="lazy"
            width={912}
            height={912}
            className="absolute right-0 bottom-10 w-[58%] object-contain"
          />
          <img
            src={grapes}
            alt="Bunch of grapes"
            loading="lazy"
            width={928}
            height={720}
            className="absolute bottom-16 left-0 w-[42%] object-contain sm:left-2"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </Reveal>
      </section>

      {/* DISCOVER */}
      <section className="relative mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <img
          src={grapes}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={928}
          height={720}
          className="pointer-events-none absolute -left-24 top-10 w-[420px] opacity-10 blur-[1px]"
        />

        <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
          <Reveal className="relative z-10 md:text-left">
            <h2 className="text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl">
              Discover
              <br />
              New Wine
            </h2>
            <p className="mt-6 max-w-xs text-sm leading-relaxed font-light text-foreground/70">
              Join us to uncover fresh wine experiences each month. Elevate your palate with
              handpicked selections from around the world
            </p>
          </Reveal>

          <Reveal delay={100} className="relative mx-auto w-[280px] sm:w-[360px]">
            <img
              src={glassHand}
              alt="Glass of red wine splashing"
              loading="lazy"
              width={912}
              height={912}
              className="w-full object-contain"
            />
            <img
              src={grapes}
              alt=""
              aria-hidden="true"
              loading="lazy"
              width={928}
              height={720}
              className="absolute -bottom-6 -left-10 w-[55%] object-contain"
            />
          </Reveal>

          <Reveal delay={200} className="relative z-10 md:mt-48">
            <h2 className="text-5xl font-bold tracking-tight sm:text-6xl">Adventures</h2>
            <div className="mt-7 flex items-center gap-4">
              <a href="#" className="text-xs font-medium tracking-widest hover:text-wine">
                CONTACT US
              </a>
              <a
                href="#"
                aria-label="Contact us"
                className="grid size-11 place-items-center rounded-full border border-dashed border-foreground/50 transition-colors hover:border-wine hover:text-wine"
              >
                <ArrowRight className="size-4 stroke-[1.5]" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WINE BOXES */}
      <section className="mx-auto max-w-7xl px-5 pt-12 pb-24 md:px-10 md:pt-20">
        <Reveal className="text-center">
          <h2 className="text-5xl font-bold tracking-tight sm:text-6xl">Wine Boxes</h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed font-light text-foreground/70">
            Explore the world of undiscovered wines with our Wine Surprise Boxes. Unwrap a new
            adventure with each delivery, discovering unique flavors and stories from around the
            world.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {boxes.map((b, i) => (
            <Reveal key={b.name} delay={i * 120}>
              <article className="grid grid-cols-[minmax(0,40%)_minmax(0,1fr)] items-center gap-4 rounded-lg bg-blush p-5 transition-transform duration-300 hover:-translate-y-2">
                <img
                  src={b.img}
                  alt={b.name}
                  loading="lazy"
                  width={912}
                  height={912}
                  className="w-full object-contain"
                />
                <div className="min-w-0">
                  <h3 className="font-serif text-xl leading-snug font-bold">{b.name}</h3>
                  <p className="mt-3 text-xl font-bold text-wine">{b.price}</p>
                  <a
                    href="#"
                    className="mt-3 inline-block text-xs font-light text-foreground/70 hover:text-wine"
                  >
                    Subscribe Now
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

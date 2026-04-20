import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Star, MapPin, Heart, Dog, Users, Sandwich, Beef, Cookie,
  Soup, Wheat, Flame, Mountain, Sun, Smile, Sparkles, Navigation,
  Facebook, Instagram, Clock, UtensilsCrossed, Menu as MenuIcon,
} from "lucide-react";
import { useState } from "react";

import hero from "@/assets/hero.jpg";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import dishBirria from "@/assets/dish-birria.jpg";
import dishBbq from "@/assets/dish-bbq.jpg";
import dishPastor from "@/assets/dish-pastor.jpg";
import dishShawarma from "@/assets/dish-shawarma.jpg";
import dishSlawDog from "@/assets/dish-slaw-dog.jpg";
import gTruck from "@/assets/gallery-truck-evening.jpg";
import gSeating from "@/assets/gallery-seating-day.jpg";
import gHonduran from "@/assets/gallery-honduran.jpg";
import gLights from "@/assets/gallery-lights.jpg";

const ADDRESS = "15173 Forest Rd, Forest, VA 24551";
const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(ADDRESS);
const MAP_EMBED =
  "https://www.google.com/maps?q=" + encodeURIComponent(ADDRESS) + "&output=embed";

const navLinks = [
  { href: "#trucks", label: "Trucks" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
];

const cuisines = [
  { icon: Beef, name: "Tacos", note: "Al Pastor · Birria · Asada" },
  { icon: Soup, name: "Honduran", note: "Carne asada plates" },
  { icon: Flame, name: "BBQ", note: "Smoked low & slow" },
  { icon: Sandwich, name: "Sandwiches", note: "Wraps & paninis" },
  { icon: Wheat, name: "Shawarma", note: "Mediterranean wraps" },
  { icon: UtensilsCrossed, name: "Grill & Fries", note: "Comfort classics" },
  { icon: Cookie, name: "Sweets", note: "Desserts & treats" },
  { icon: Sparkles, name: "Rotating", note: "New trucks weekly" },
];

const favorites = [
  { img: dishBbq, name: "Pulled Pork BBQ Sandwich", tag: "Smokehouse" },
  { img: dishBirria, name: "Birria Tacos", tag: "Tacos" },
  { img: dishPastor, name: "Al Pastor Tacos", tag: "Tacos" },
  { img: dishShawarma, name: "Shawarma Wrap", tag: "Mediterranean" },
  { img: dishSlawDog, name: "Slaw Dog", tag: "Classic" },
];

const reasons = [
  { icon: UtensilsCrossed, title: "A truck for every craving", body: "From birria to BBQ to baklava — variety that keeps groups happy." },
  { icon: Mountain, title: "Mountain-view seating", body: "Picnic tables, open sky, and Blue Ridge backdrops." },
  { icon: Dog, title: "Pups welcome", body: "Bring the whole family — leashed dogs always invited." },
  { icon: Smile, title: "Friendly service", body: "Local owners, real smiles, easy conversations." },
  { icon: Sun, title: "Made for sunny days", body: "Perfect for weekend lunches and evening hangs." },
  { icon: Heart, title: "A real hidden gem", body: "Forest's worst-kept secret — and the locals love it." },
];

const reviews = [
  { name: "Whitney H.", body: "So many options that everyone in our group found something to love. The patio vibe is unbeatable.", stars: 5 },
  { name: "Marcus T.", body: "Birria tacos were unreal. Sat outside at golden hour with our dog — felt like a little vacation.", stars: 5 },
  { name: "Lena R.", body: "Friendly people, fair prices, beautiful view. We come back every Friday now.", stars: 4 },
  { name: "Jorge P.", body: "Authentic Honduran plate that took me right home. Plantains, beans, rice — all on point.", stars: 5 },
];

const hours = [
  { day: "Monday", time: "Closed", closed: true },
  { day: "Tuesday", time: "3 – 9 PM" },
  { day: "Wednesday", time: "3 – 9 PM" },
  { day: "Thursday", time: "3 – 9 PM" },
  { day: "Friday", time: "12 – 9:30 PM" },
  { day: "Saturday", time: "12 – 10 PM" },
  { day: "Sunday", time: "3 – 9 PM" },
];

const Stars = ({ n = 5 }: { n?: number }) => (
  <div className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={i < n ? "fill-gold text-gold" : "text-muted-foreground/30"}
        size={16}
      />
    ))}
  </div>
);

const Index = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-forest text-cream">
              <UtensilsCrossed size={18} />
            </span>
            <span className="font-display text-lg font-semibold leading-none">
              The BackYard <span className="text-accent">·</span> Forest VA
            </span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors">
                {l.label}
              </a>
            ))}
            <Button asChild className="bg-forest text-primary-foreground hover:bg-forest-deep">
              <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer">
                <Navigation /> Get Directions
              </a>
            </Button>
          </nav>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid h-10 w-10 place-items-center rounded-md border border-border"
            aria-label="Open menu"
          >
            <MenuIcon size={18} />
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border/60 bg-background">
            <div className="container flex flex-col gap-1 py-3">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2 text-sm font-medium hover:bg-secondary">
                  {l.label}
                </a>
              ))}
              <Button asChild className="mt-2 bg-forest text-primary-foreground hover:bg-forest-deep">
                <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer">
                  <Navigation /> Get Directions
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={hero}
            alt="Outdoor food court at golden hour with picnic tables, string lights, and food trucks beneath Blue Ridge mountains"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/70 via-forest-deep/40 to-forest-deep/85" />
        </div>

        <div className="container flex min-h-[88vh] flex-col justify-end pb-16 pt-28 text-cream md:min-h-[92vh]">
          <div className="max-w-3xl animate-fade-up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <Mountain size={14} className="text-gold" />
              Forest, Virginia · Open-air food court
            </div>
            <h1 className="font-display text-5xl font-semibold leading-[1.02] text-balance sm:text-6xl md:text-7xl">
              Forest's Favorite <span className="italic text-gold">Outdoor</span> Food Court
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-cream/85 md:text-xl">
              Great food, great views, and a welcoming place to relax with friends, family, and pets.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-warm">
                <a href="#trucks">See Today's Food Trucks</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-cream/40 bg-cream/5 text-cream hover:bg-cream hover:text-forest">
                <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer">
                  <Navigation /> Get Directions
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-cream/90">
              <li className="flex items-center gap-2">
                <Star size={16} className="fill-gold text-gold" /> 4.5 Stars
              </li>
              <li className="hidden h-1 w-1 rounded-full bg-cream/40 sm:block" />
              <li className="flex items-center gap-2"><Users size={16} className="text-gold" /> Family Friendly</li>
              <li className="hidden h-1 w-1 rounded-full bg-cream/40 sm:block" />
              <li className="flex items-center gap-2"><Dog size={16} className="text-gold" /> Dog Friendly</li>
              <li className="hidden h-1 w-1 rounded-full bg-cream/40 sm:block" />
              <li className="flex items-center gap-2"><Heart size={16} className="text-gold" /> Local Favorite</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 md:py-28">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="grid grid-cols-5 grid-rows-5 gap-3 sm:gap-4">
              <img src={about1} alt="Picnic tables under string lights with food trucks and mountain backdrop"
                loading="lazy" className="col-span-3 row-span-5 h-full w-full rounded-2xl object-cover shadow-card" />
              <img src={about2} alt="Family with a dog enjoying tacos at an outdoor picnic table"
                loading="lazy" className="col-span-2 row-span-3 h-full w-full rounded-2xl object-cover shadow-card" />
              <div className="col-span-2 row-span-2 rounded-2xl bg-forest p-5 text-cream shadow-card flex flex-col justify-between">
                <Mountain className="text-gold" />
                <div>
                  <p className="font-display text-2xl leading-none">Blue Ridge</p>
                  <p className="text-xs text-cream/70 mt-1">views from your table</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">About the BackYard</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.05] sm:text-5xl text-balance">
              A charming little spot where good food and good company collide.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Tucked into Forest, Virginia, The BackYard is an open-air food court built for slow afternoons,
              date nights, and easy family dinners. Pull up to a picnic table, watch the sun dip behind the
              mountains, and let everyone in your group order something different.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Dog-friendly, community-focused, and proudly local — it's the kind of place neighbors meet
              neighbors and travelers stumble into a new favorite.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { k: "★ 4.5", v: "Avg. rating" },
                { k: "8+", v: "Rotating trucks" },
                { k: "All ages", v: "& all good dogs" },
              ].map((s) => (
                <div key={s.v} className="rounded-xl border border-border bg-card p-4 text-center shadow-soft">
                  <div className="font-display text-2xl font-semibold text-forest">{s.k}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUCKS / VARIETY */}
      <section id="trucks" className="bg-gradient-cream py-20 md:py-28 grain">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">Today's Lineup</p>
            <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl text-balance">
              A new flavor at every truck.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The lineup changes weekly. Tacos, BBQ, Honduran plates, shawarma, sandwiches, sweets — pick
              one, share a few, repeat.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {cuisines.map((c) => (
              <div key={c.name}
                className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-terracotta-soft text-accent">
                  <c.icon size={20} />
                </div>
                <div className="mt-4 font-display text-xl font-semibold">{c.name}</div>
                <div className="text-sm text-muted-foreground">{c.note}</div>
              </div>
            ))}
          </div>

          {/* Crowd favorites */}
          <div className="mt-20">
            <div className="flex items-end justify-between gap-4">
              <h3 className="font-display text-3xl font-semibold">Crowd favorites</h3>
              <p className="hidden text-sm text-muted-foreground sm:block">The dishes regulars order on repeat.</p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {favorites.map((f) => (
                <Card key={f.name} className="overflow-hidden border-border shadow-card transition-transform hover:-translate-y-1">
                  <div className="aspect-square overflow-hidden">
                    <img src={f.img} alt={f.name} loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                  </div>
                  <CardContent className="p-4">
                    <div className="text-[11px] font-medium uppercase tracking-wider text-accent">{f.tag}</div>
                    <div className="mt-1 font-display text-base font-semibold leading-snug">{f.name}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">Why people love it</p>
            <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl text-balance">
              Six reasons The BackYard sticks with you.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-forest text-cream">
                  <r.icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{r.title}</h3>
                <p className="mt-2 text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-forest text-cream py-20 md:py-28">
        <div className="container">
          <div className="grid items-end gap-8 md:grid-cols-[1fr_auto] md:gap-12">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold">Reviews</p>
              <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl text-balance">
                Loved by neighbors, regulars, and first-timers alike.
              </h2>
            </div>
            <div className="flex items-center gap-3 rounded-full bg-cream/10 px-5 py-3 backdrop-blur">
              <Stars n={5} />
              <span className="font-display text-lg">4.5★ across platforms</span>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-2xl bg-cream/[0.06] border border-cream/15 p-6 backdrop-blur">
                <Stars n={r.stars} />
                <blockquote className="mt-4 text-cream/90 leading-relaxed">"{r.body}"</blockquote>
                <figcaption className="mt-5 text-sm text-cream/70">— {r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">Gallery</p>
            <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl text-balance">
              Day or dusk, it just feels good here.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-4 grid-rows-2 gap-3 sm:gap-4 h-[420px] sm:h-[560px] md:h-[640px]">
            <img src={gSeating} alt="Daytime view of picnic tables under umbrellas with mountains beyond"
              loading="lazy" className="col-span-2 row-span-2 h-full w-full rounded-2xl object-cover shadow-card" />
            <img src={gTruck} alt="Food truck at dusk with customers waiting" loading="lazy"
              className="col-span-2 row-span-1 h-full w-full rounded-2xl object-cover shadow-card" />
            <img src={gHonduran} alt="Honduran plate with carne asada, rice, beans, and plantains"
              loading="lazy" className="col-span-1 row-span-1 h-full w-full rounded-2xl object-cover shadow-card" />
            <img src={gLights} alt="String lights glowing at twilight over picnic area"
              loading="lazy" className="col-span-1 row-span-1 h-full w-full rounded-2xl object-cover shadow-card" />
          </div>
        </div>
      </section>

      {/* HOURS & LOCATION */}
      <section id="visit" className="bg-secondary/60 py-20 md:py-28">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">Plan your visit</p>
            <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl text-balance">
              Hours & location.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Drop in for an early dinner or stay until the lights come on. Closed Mondays — see you the rest of the week.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <div className="flex items-center gap-2 border-b border-border bg-background/50 px-5 py-3">
                <Clock size={16} className="text-accent" />
                <span className="text-sm font-medium uppercase tracking-wider">Hours</span>
              </div>
              <ul>
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className={`flex items-center justify-between px-5 py-3 text-sm border-b border-border/60 last:border-0 ${
                      h.closed ? "bg-muted/40 text-muted-foreground" : ""
                    }`}
                  >
                    <span className="font-medium">{h.day}</span>
                    <span className={h.closed ? "italic" : "font-mono"}>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-card p-5 shadow-soft">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 text-accent" />
                <div>
                  <div className="font-display text-lg font-semibold">{ADDRESS.split(",")[0]}</div>
                  <div className="text-muted-foreground text-sm">
                    {ADDRESS.split(",").slice(1).join(",").trim()}
                  </div>
                </div>
              </div>
              <Button asChild className="mt-5 w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer">
                  <Navigation /> Get Directions
                </a>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-card min-h-[400px]">
            <iframe
              title="Map to The BackYard Forest VA"
              src={MAP_EMBED}
              loading="lazy"
              className="h-full w-full min-h-[400px]"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* BIG CTA */}
      <section className="relative overflow-hidden bg-gradient-dusk py-20 text-cream md:py-28">
        <div className="absolute inset-0 -z-10 opacity-25">
          <img src={gLights} alt="" aria-hidden className="h-full w-full object-cover" />
        </div>
        <div className="container text-center">
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl text-balance">
            Come enjoy great food & great company at The BackYard.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-cream/80">
            Bring your people, bring your pup. We'll handle the rest.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-warm">
              <a href="#trucks">See Today's Trucks</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-cream/40 bg-cream/5 text-cream hover:bg-cream hover:text-forest">
              <a href="#visit">Plan Your Visit</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-forest-deep text-cream/80">
        <div className="container py-14 grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-cream text-forest">
                <UtensilsCrossed size={18} />
              </span>
              <span className="font-display text-lg font-semibold text-cream">The BackYard Forest VA</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              An outdoor food-court experience with rotating trucks, picnic-table seating, and Blue Ridge views.
            </p>
          </div>

          <div>
            <h4 className="font-display text-cream text-base">Visit</h4>
            <p className="mt-3 text-sm">{ADDRESS}</p>
            <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-sm text-gold hover:underline">
              <Navigation size={14} /> Get directions
            </a>
          </div>

          <div>
            <h4 className="font-display text-cream text-base">Follow along</h4>
            <div className="mt-3 flex gap-3">
              <a href="#" aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 hover:bg-cream/10 transition">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 hover:bg-cream/10 transition">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-cream/10">
          <div className="container py-5 text-xs text-cream/60 flex flex-col sm:flex-row gap-2 justify-between">
            <span>© {new Date().getFullYear()} The BackYard Forest VA. All rights reserved.</span>
            <span>Made with care in Forest, Virginia.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

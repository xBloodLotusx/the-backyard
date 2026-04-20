
# The BackYard Forest VA — Landing Page

A warm, modern, single-page site capturing the relaxed outdoor food-court vibe with mountain views, dog-friendly energy, and a rotating lineup of food trucks.

## Design Direction
- **Mood:** Warm, outdoorsy, hand-crafted. Think string lights at dusk, picnic blankets, and golden hour over the Blue Ridge.
- **Palette:** Deep forest green, warm cream, sun-baked terracotta, soft charcoal accents.
- **Type:** A friendly display serif for headlines (e.g. Fraunces) paired with a clean humanist sans for body (e.g. Inter).
- **Texture:** Subtle grain, generous spacing, rounded cards, soft shadows — never glossy or corporate.

## Page Sections

1. **Sticky Nav Bar** — Logo wordmark, anchor links (Trucks, About, Gallery, Visit), prominent "Get Directions" button.

2. **Hero**
   - Full-bleed image of picnic tables / food trucks at golden hour
   - Headline: *"Forest's Favorite Outdoor Food Court"*
   - Subhead and dual CTAs (See Today's Food Trucks, Get Directions)
   - Trust badge row: ★ 4.5 Stars · Family Friendly · Dog Friendly · Local Favorite

3. **About** — Two-column: warm story copy + image collage. Emphasizes mountain views, open-air seating, community feel.

4. **Food Truck Variety**
   - Cuisine category grid (Tacos, Honduran, BBQ, Sandwiches, Wraps, Sweets…) with icons
   - "Crowd Favorites" card row featuring Pulled Pork BBQ, Birria Tacos, Al Pastor, Shawarma Wrap, Slaw Dog

5. **Why People Love The BackYard** — Icon + text bullet grid (6 reasons).

6. **Reviews** — 4 paraphrased testimonial cards with star ratings, plus aggregate "4.5★ across platforms" highlight.

7. **Photo Gallery** — Asymmetric masonry grid mixing day/evening shots of seating, trucks, dishes.

8. **Hours & Location**
   - Left: structured hours table (closed Mondays styled distinctly)
   - Right: embedded Google Map + address + "Get Directions" button

9. **Big CTA Banner** — High-contrast forest green band: *"Come Enjoy Great Food & Great Company at The BackYard!"* with two buttons.

10. **Footer** — Business name, address, social icons (Facebook, Instagram), copyright.

## Technical Notes
- Single-page React (Vite + Tailwind + shadcn) with smooth-scroll anchor navigation.
- Full design system in `index.css` + `tailwind.config.ts` (HSL tokens for forest/cream/terracotta, custom fonts via Google Fonts).
- Responsive mobile-first; hero stacks, cuisine grid becomes 2-col, hours/map stack on small screens.
- Map via embedded Google Maps iframe for the address.
- Stock-style hero, gallery, and dish imagery generated to fit the warm outdoor aesthetic.
- Lucide icons for cuisine categories, trust badges, and feature bullets.

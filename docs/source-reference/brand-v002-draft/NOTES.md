# AMA Solutions logo: clean vector rebuild v002 DRAFT

Status: **DRAFT for founder review.** This replaces the v001 pixel traces as the working SVGs. The `Original-Cutout` PNGs remain the faithful version of the metallic artwork.

## What changed from v001

| | v001 trace | v002 rebuild |
|---|---|---|
| Badge | ~32,000 paths, 11 MB | 29 paths + 67 circles, 75 KB |
| Monogram | ~15,000 paths, 5.5 MB | 18 paths + 62 circles, 80 KB |
| Shading | stepped flat-colour patches | ~30 linear gradients (one per face) + one shared radial gradient for the dots |
| Dots | traced blobs | true circles, centre and radius measured from the artwork |

No file embeds a raster image.

## Files

- `AMA_Brand_Badge_Vector_v002_DRAFT.svg`: full-colour badge, 796 × 796.
- `AMA_Brand_Monogram_Vector_v002_DRAFT.svg`: full-colour standalone emblem, 695 × 475. It is rebuilt from its own render, which has different perspective and side walls from the badge.
- `AMA_Brand_Lockup-Horizontal_Vector_EN_v002_DRAFT.svg` (editable text) and `…-Outlined_…` (text as shapes): the v002 badge plus the wordmark, **for light backgrounds only**.
- `AMA_Brand_Badge_Flat-2Tone_Proposal_v002_DRAFT.svg` and `AMA_Brand_Favicon_Flat_Proposal_v002_DRAFT.svg`: small-size proposals, **needing approval** (see below).
- `*_Preview_*.png`: transparent renders of each SVG.
- `*_Original-Cutout_*.png`: the original artwork pixels with the background removed (unchanged from v001).
- `check_*.png`: side-by-side, small-size and 3× comparisons.

## How it was built

- **Outlines:** the gold areas were separated from the black enamel by colour, cleaned, and traced as smooth curves. Outer and opening edges sit within about 1–2 px of the artwork.
- **Faces:** the ribbons were split along the straight seam lines visible in the artwork (13 seams on the badge, 9 on the monogram). Each face carries its own gold gradient, fitted to the artwork's colours along its direction of light. The visible seams are drawn as thin dark lines, plus a thin pale bevel line along the gold edges.
- **Rim:** two concentric bands with a fine groove at r = 394 and a dark inner edge, as measured from the artwork. The rim gradient (light top, bronze bottom) uses colours sampled from the rim.
- **Dots:** 62 in each file (badge: 28 centre, 17 left, 17 right). These are the same dots as the artwork, at their measured positions and sizes. None were added, moved or removed. Faint render specks under about 1 px are kept as tiny dots. **The artwork has 62 dots, not 144.**
- **Wordmark:** Roboto Regular. Its metrics match the lockup exactly at default spacing, so it is very likely the original typeface. Confirm with whoever made the lockup. Colours: "AMA" #1B1A17, "SOLUTIONS" #C89C4B, sampled from the artwork.

## Where v002 is an interpretation, not a copy

The source is a photoreal render, so any clean vector has to make choices. Please check these spots in particular:

1. **Lighting.** Each face has one linear gradient, so the brushed texture, soft reflections and specular streaks are simplified. The result reads cleaner and slightly flatter than the render, most noticeably on the centre X and the flaps.
2. **Left flap pocket (badge).** The shadowed area between the left flap and the X ribbon is kept as a separate darker-gold sliver, as the artwork shows it. Its edges are less crisp than the rest.
3. **Right flap edge (badge).** The flap's left edge was straightened to the line visible in the artwork, because the shadow there confused the colour separation.
4. **Bottom edges (monogram).** The black extrusion walls along the base are slightly uneven where the render's contact shadow meets them.
5. **Rim.** The real rim has a dimensional highlight that changes all the way round. v002 uses a top-to-bottom gradient.

A designer pass in Illustrator (refining gradients and the spots above) is the expected next step before an APPROVED master.

## Small-size proposals: these change the mark, so they need approval

- **Flat two-tone badge:** gold #DDB270 (the artwork's mid-gold) on #141210. It keeps the 26 largest dots (radius ≥ 6 px), each enlarged 1.25×, and drops the 36 small ones. Faces are separated by 4.5 px black lines so the interlace still reads.
- **Flat favicon:** the monogram only, with no ring and no dots, on a rounded black square.
- From the size check: dots are effectively gone below 48 px in every version, so at 16–32 px only the favicon proposal keeps a recognisable shape.
- Not made yet: one-colour versions and a dark-background lockup.

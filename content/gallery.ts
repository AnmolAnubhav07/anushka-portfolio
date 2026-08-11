/* THE PEOPLE BEHIND THE WORK — the personal archive.
 *
 * ⚠ SOURCING: every frame is one of Anushka's own supplied photographs —
 * candids and one group photo from Heritage Institute of Technology,
 * Kolkata. Nothing is stock, generated, substituted or repeated. Only 8
 * real photographs were supplied (photo-01 through photo-08), so the rail
 * runs 8 frames instead of the original 14 — nothing is padded to match
 * the old count.
 *
 * `ar` is each file's TRUE aspect ratio (measured from the actual image
 * dimensions), so a frame is only ever cropped by object-fit, never scaled
 * non-uniformly.
 *
 * `scale` and `y` are the curation: a little rhythm so the rail reads as a
 * hung archive rather than a filmstrip. photo-04 (a close portrait) and
 * photo-08 (the group photo outside Heritage Institute of Technology) sit
 * at the centre of the sequence and carry the largest scale — the two
 * centrepieces, same role g09/g10 played in the original layout. */

export type Frame = {
  id: string;
  src: string;
  ar: number; /* true width / height */
  scale: number; /* relative height on the rail */
  y: number; /* vertical offset in px, for rhythm */
  hero?: boolean; /* the centrepieces */
};

export const FRAMES: Frame[] = [
  { id: "p01", src: "/images/anushka/photo-01.jpg", ar: 0.75, scale: 0.94, y: -18 },
  { id: "p02", src: "/images/anushka/photo-02.jpg", ar: 0.75, scale: 0.88, y: 30 },
  { id: "p03", src: "/images/anushka/photo-03.jpg", ar: 0.75, scale: 1.0, y: -34 },
  /* — the centre of the archive — */
  { id: "p04", src: "/images/anushka/photo-04.jpg", ar: 1, scale: 1.14, y: 0, hero: true },
  { id: "p08", src: "/images/anushka/photo-08.jpg", ar: 1.3333, scale: 1.14, y: 0, hero: true },
  /* — */
  { id: "p05", src: "/images/anushka/photo-05.jpg", ar: 0.7525, scale: 0.92, y: -30 },
  { id: "p06", src: "/images/anushka/photo-06.jpg", ar: 0.5622, scale: 0.87, y: 26 },
  { id: "p07", src: "/images/anushka/photo-07.jpg", ar: 0.75, scale: 1.0, y: -14 },
];

import React from 'react';

/* ─── Royal Golden Corner Flourish (Traditional Indian Filigree) ─── */
export function RoyalCornerFlourish({ size = 64, className = '' }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer corner framing curves */}
      <path
        d="M 6 82 C 6 45 10 20 20 12 C 28 6 52 6 82 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M 6 62 C 8 36 18 18 36 10 C 44 6 56 6 68 6"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 3"
        strokeLinecap="round"
      />

      {/* Corner tip flourish */}
      <circle cx="6" cy="88" r="2.5" fill="currentColor" />
      <circle cx="88" cy="6" r="2.5" fill="currentColor" />
      <circle cx="6" cy="6" r="3" fill="currentColor" />

      {/* Ornate Paisley & Floral Center */}
      <path
        d="M 6 6 C 18 18 24 32 25 42 C 26 50 20 56 14 54 C 8 52 8 42 16 34 C 24 26 36 24 48 24 C 54 24 58 28 56 34 C 54 40 46 44 40 40"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Radiating Lotus Petals from diagonal */}
      <path
        d="M 22 22 Q 38 14 46 22 Q 38 30 22 22 Z"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M 22 22 Q 14 38 22 46 Q 30 38 22 22 Z"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M 22 22 Q 36 36 48 48 Q 42 32 22 22 Z"
        fill="currentColor"
        fillOpacity="0.35"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      {/* Decorative accent dots */}
      <circle cx="48" cy="48" r="2" fill="currentColor" />
      <circle cx="56" cy="56" r="1.5" fill="currentColor" />
      <circle cx="63" cy="63" r="1.2" fill="currentColor" />

      {/* Delicate inner scrolls */}
      <path
        d="M 12 12 Q 28 20 32 32"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <circle cx="33" cy="18" r="1.2" fill="currentColor" />
      <circle cx="18" cy="33" r="1.2" fill="currentColor" />
    </svg>
  );
}

/* ─── Royal 8-Petal Mandala Floral Motif (for Dividers & Crests) ─── */
export function RoyalMandala({ size = 22, className = '' }) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Central jewel */}
      <circle cx="24" cy="24" r="3" fill="currentColor" />
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5 2" />

      {/* 8 Symmetry Petals */}
      <g stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.2">
        {/* Top & Bottom */}
        <path d="M 24 18 C 21 12 21 7 24 3 C 27 7 27 12 24 18 Z" />
        <path d="M 24 30 C 21 36 21 41 24 45 C 27 41 27 36 24 30 Z" />
        {/* Left & Right */}
        <path d="M 18 24 C 12 21 7 21 3 24 C 7 27 12 27 18 24 Z" />
        <path d="M 30 24 C 36 21 41 21 45 24 C 41 27 36 27 30 24 Z" />

        {/* Diagonals */}
        <path d="M 19.7 19.7 C 14.8 14.8 11.2 11.2 9 9 C 11.2 11.2 14.8 14.8 19.7 19.7 Z" />
        <path d="M 19.7 19.7 Q 13 15 8.5 8.5 Q 15 13 19.7 19.7 Z" />
        <path d="M 28.3 19.7 Q 35 13 39.5 8.5 Q 33 15 28.3 19.7 Z" />
        <path d="M 19.7 28.3 Q 13 35 8.5 39.5 Q 15 33 19.7 28.3 Z" />
        <path d="M 28.3 28.3 Q 35 33 39.5 39.5 Q 33 35 28.3 28.3 Z" />
      </g>

      {/* Outer Tip Pearls */}
      <circle cx="24" cy="2" r="1.3" fill="currentColor" />
      <circle cx="24" cy="46" r="1.3" fill="currentColor" />
      <circle cx="2" cy="24" r="1.3" fill="currentColor" />
      <circle cx="46" cy="24" r="1.3" fill="currentColor" />
    </svg>
  );
}

/* ─── Royal Lotus (Kamal) Emblem ─── */
export function RoyalLotus({ size = 42, className = '' }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Center Main Petal */}
      <path
        d="M 32 10 C 26 22 26 36 32 46 C 38 36 38 22 32 10 Z"
        fill="currentColor"
        fillOpacity="0.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Inner Petal Vein */}
      <path d="M 32 14 L 32 44" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />

      {/* Left Inner Petal */}
      <path
        d="M 30 20 C 18 26 14 38 22 46 C 26 40 28 32 30 20 Z"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      {/* Right Inner Petal */}
      <path
        d="M 34 20 C 46 26 50 38 42 46 C 38 40 36 32 34 20 Z"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      {/* Left Outer Petal */}
      <path
        d="M 24 30 C 10 34 6 44 14 50 C 20 46 22 38 24 30 Z"
        fill="currentColor"
        fillOpacity="0.18"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      {/* Right Outer Petal */}
      <path
        d="M 40 30 C 54 34 58 44 50 50 C 44 46 42 38 40 30 Z"
        fill="currentColor"
        fillOpacity="0.18"
        stroke="currentColor"
        strokeWidth="1.3"
      />

      {/* Lotus Base / Pod */}
      <path
        d="M 18 48 C 24 54 40 54 46 48 C 42 51 22 51 18 48 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      {/* Base Curls / Water Waves */}
      <path
        d="M 12 53 C 20 56 26 53 32 55 C 38 53 44 56 52 53"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="32" cy="7" r="1.8" fill="currentColor" />
    </svg>
  );
}

/* ─── Royal Floral Vine Flourish ─── */
export function RoyalFloralVine({ size = 42, className = '' }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Main graceful arching stem */}
      <path
        d="M 8 56 C 14 42 22 28 38 18 C 46 13 54 12 58 14 C 60 16 58 22 52 24 C 42 26 34 36 28 56"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Decorative Leaves */}
      <path
        d="M 22 42 Q 14 36 18 30 Q 24 36 22 42 Z"
        fill="currentColor"
        fillOpacity="0.3"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M 32 28 Q 28 18 36 14 Q 38 22 32 28 Z"
        fill="currentColor"
        fillOpacity="0.3"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M 44 18 Q 48 8 54 8 Q 52 16 44 18 Z"
        fill="currentColor"
        fillOpacity="0.3"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M 30 46 Q 38 48 42 42 Q 36 40 30 46 Z"
        fill="currentColor"
        fillOpacity="0.3"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      {/* Vine Pearls */}
      <circle cx="58" cy="14" r="2.2" fill="currentColor" />
      <circle cx="16" cy="30" r="1.5" fill="currentColor" />
      <circle cx="36" cy="14" r="1.5" fill="currentColor" />
      <circle cx="8" cy="56" r="2" fill="currentColor" />
    </svg>
  );
}

/* ─── Royal Golden Filigree Butterfly ─── */
export function RoyalButterfly({ size = 32, className = '' }) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Body & Head */}
      <ellipse cx="24" cy="25" rx="1.6" ry="9" fill="#8b1a2b" stroke="#d4af37" strokeWidth="1" />
      <circle cx="24" cy="14" r="2" fill="#d4af37" />

      {/* Antennae */}
      <path
        d="M 23 13 C 20 8 16 7 14 9"
        stroke="#d4af37"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="14" cy="9" r="1" fill="#d4af37" />
      <path
        d="M 25 13 C 28 8 32 7 34 9"
        stroke="#d4af37"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="34" cy="9" r="1" fill="#d4af37" />

      {/* Left Top Wing */}
      <path
        d="M 23 20 C 14 10 4 14 4 23 C 4 30 14 31 23 25 Z"
        fill="#f5e6cb"
        fillOpacity="0.85"
        stroke="#b8965a"
        strokeWidth="1.4"
      />
      {/* Left Wing Lace Detailing */}
      <path
        d="M 22 21 C 15 16 8 19 8 24 C 11 26 17 26 22 23"
        stroke="#b8965a"
        strokeWidth="0.9"
        fill="#d4af37"
        fillOpacity="0.25"
      />
      <circle cx="10" cy="22" r="1.3" fill="#8b1a2b" />

      {/* Right Top Wing */}
      <path
        d="M 25 20 C 34 10 44 14 44 23 C 44 30 34 31 25 25 Z"
        fill="#f5e6cb"
        fillOpacity="0.85"
        stroke="#b8965a"
        strokeWidth="1.4"
      />
      {/* Right Wing Lace Detailing */}
      <path
        d="M 26 21 C 33 16 40 19 40 24 C 37 26 31 26 26 23"
        stroke="#b8965a"
        strokeWidth="0.9"
        fill="#d4af37"
        fillOpacity="0.25"
      />
      <circle cx="38" cy="22" r="1.3" fill="#8b1a2b" />

      {/* Left Bottom Wing */}
      <path
        d="M 23 26 C 14 27 10 34 13 40 C 16 44 22 38 23 31 Z"
        fill="#f5e6cb"
        fillOpacity="0.75"
        stroke="#b8965a"
        strokeWidth="1.2"
      />
      {/* Right Bottom Wing */}
      <path
        d="M 25 26 C 34 27 38 34 35 40 C 32 44 26 38 25 31 Z"
        fill="#f5e6cb"
        fillOpacity="0.75"
        stroke="#b8965a"
        strokeWidth="1.2"
      />
    </svg>
  );
}

/* ─── Royal Blossom Flower (for Petals) ─── */
export function RoyalBlossomPetal({ size = 26, className = '' }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="3" fill="#b8965a" />
      <g fill="#f43f5e" fillOpacity="0.7" stroke="#b8965a" strokeWidth="0.8">
        <circle cx="16" cy="10" r="4" />
        <circle cx="22" cy="14" r="4" />
        <circle cx="20" cy="21" r="4" />
        <circle cx="12" cy="21" r="4" />
        <circle cx="10" cy="14" r="4" />
      </g>
      <circle cx="16" cy="16" r="1.5" fill="#fef08a" />
    </svg>
  );
}

/* ─── Royal Golden Leaf (for Petals) ─── */
export function RoyalGoldenLeaf({ size = 24, className = '' }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M 6 26 C 10 16 18 10 26 6 C 22 16 16 22 6 26 Z"
        fill="#b8965a"
        fillOpacity="0.65"
        stroke="#8b1a2b"
        strokeWidth="0.8"
      />
      <path d="M 6 26 Q 16 16 26 6" stroke="#f4ede4" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Central content model for the ADCC Croatia website.
 * Keeping copy + structured data here keeps the .astro components presentational.
 */

export const site = {
  name: 'ADCC Croatia',
  legalName: 'ADCC Croatian Submission Fighting Organization',
  domain: 'adcc-croatia.com',
  url: 'https://adcc-croatia.com',
  locale: 'hr_HR',
  lang: 'hr',
  description:
    'Službeno predstavništvo ADCC-a u Hrvatskoj — nacionalna prvenstva, otvoreni kupovi, ' +
    'pravila i divizije submission grapplinga te svjetski prvak Luka Vuksan.',
  manager: 'Damir Šalina',
  phone: '+385 91 721 4737',
  email: 'info@adcc-croatia.com',
  locations: 'Zadar / Zagreb, Hrvatska',
} as const;

export const nav = [
  { label: 'O Savezu', href: '/#about' },
  { label: 'Svjetski Prvak', href: '/#champion' },
  { label: 'Natjecanja', href: '/#tournaments' },
  { label: 'Pravila', href: '/pravila' },
  { label: 'Galerija', href: '/#gallery' },
] as const;

export const links = {
  adcombat: 'https://adcombat.com/',
  smoothcomp: 'https://smoothcomp.com/en/event/31839',
  smoothcompGlobal: 'https://smoothcomp.com/',
  facebook: 'https://www.facebook.com/adcccroatia',
  pixieset: 'https://rolljiujitsu.pixieset.com/adcczadar2026/',
  hoo: 'https://www.hoo.hr/post/etiru-odlija-jiujitsu-boraca-na-spu-u-bankoku-luka-vuksan-svjetski-prvak',
  zupanija:
    'https://www.zadarska-zupanija.hr/novosti-arhiva/item/3778-ponos-zadra-dodijeljene-nagrade-najboljim-sportasima-zadarske-zupanije-za-2025-godinu',
  schetka: 'https://schetka.studio',
} as const;

export const heroStats = [
  { num: '20+', label: 'Godina Tradicije' },
  { num: '500+', label: 'Registriranih Boraca' },
  { num: '1', label: 'Svjetski Prvak' },
] as const;

export const champion = {
  name: 'Luka Vuksan',
  photo: '/images/luka-vuksan.jpg',
  awards: [
    {
      title: '🥇 Zlato na SP Bangkok',
      desc: 'Svjetski prvak u jiu-jitsu borbama pod okriljem Hrvatskog olimpijskog odbora.',
    },
    {
      title: '🏆 Najbolji Sportaš Županije',
      desc: 'Godišnja nagrada Zadarske županije za vrhunska sportska dostignuća u 2025.',
    },
  ],
} as const;

export type EventItem = {
  date: string;
  title: string;
  location: string;
  image: string;
  position?: string;
  cta: { label: string; href: string };
};

export const events: EventItem[] = [
  {
    date: '4. srpnja 2026. • Zadar',
    title: 'ADCC Croatia Open 2026',
    location: 'ŠC Višnjik, Dvorana Krešimir Ćosić, Zadar',
    image: '/images/adcc-croatia-open-2026-poster.jpg',
    position: 'center center',
    cta: { label: 'Smoothcomp Ždrijeb & Rezultati ↗', href: links.smoothcomp },
  },
  {
    date: 'Jesen 2026 • Zagreb',
    title: 'ADCC Prvenstvo Hrvatske',
    location: 'Dom Sportova, Zagreb',
    image: '/images/e486d98b-5386-4643-b1c8-3f628a6573b0.jpg',
    position: 'center 45%',
    cta: { label: 'Službeni Detalji', href: links.smoothcompGlobal },
  },
  {
    date: 'ADCC Europe & Middle East',
    title: 'ADCC European Trials',
    location: 'Kvalifikacije za Svjetsko Prvenstvo',
    image: '/images/1bd918d6-26ec-45a8-91bb-0867c27d6647.jpg',
    position: 'center 15%',
    cta: { label: 'Pravila & Kriteriji', href: links.adcombat },
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  position?: string;
};

export const gallery: GalleryItem[] = [
  {
    src: '/images/2aaa70e1-c6c5-49e2-975b-549f2a67f9b4.jpg',
    alt: 'Nika Šalina — 1. mjesto na Europskom prvenstvu',
    position: 'center 15%',
  },
  {
    src: '/images/84cb54c2-3d09-4cc6-91da-2a8f653a9283.jpg',
    alt: 'Zlatno odličje i diploma na Europskom prvenstvu',
    position: 'center 15%',
  },
  {
    src: '/images/808f0f99-89b3-48c6-8aab-74f17e90a8bd.jpg',
    alt: 'Srebrno odličje — Europsko prvenstvo',
    position: 'center 15%',
  },
  {
    src: '/images/luka-vuksan-award-stage.jpg',
    alt: 'Luka Vuksan — preuzimanje nagrade Ponos Zadra',
    position: 'center 20%',
  },
  {
    src: '/images/6172bd54-196f-4cb0-80c5-e27b46db4a07.jpg',
    alt: 'Tim i reprezentacija ADCC Croatia',
    position: 'center 28%',
  },
  {
    src: '/images/369acc18-7972-4e7b-8f4b-246cd257281b.jpg',
    alt: 'Zadar Youth Open 2026 medalje',
    position: 'center 60%',
  },
  {
    src: '/images/92821a95-a25b-49be-846a-45c2861c82a5.jpg',
    alt: 'Jiu Jitsu Summer Camp Zadar — mladi borci',
    position: 'center 35%',
  },
  {
    src: '/images/e486d98b-5386-4643-b1c8-3f628a6573b0.jpg',
    alt: 'Službene ADCC medalje',
    position: 'center 45%',
  },
];

export const affiliates = [
  { label: '🌐 ADCombat.com (Global)', href: links.adcombat },
  { label: '🥋 Smoothcomp / Sub.Fight.org', href: links.smoothcomp },
  { label: '📱 Facebook: ADCC Croatia', href: links.facebook },
];

/** Weight divisions (Men's Pro) — used on the rules page. */
export const divisions = [
  { category: '-66 kg', limit: 'do 65.9 kg', format: '6 min (3 min no points)' },
  { category: '-77 kg', limit: 'do 76.9 kg', format: '6 min (3 min no points)' },
  { category: '-88 kg', limit: 'do 87.9 kg', format: '6 min (3 min no points)' },
  { category: '-99 kg', limit: 'do 98.9 kg', format: '6 min (3 min no points)' },
  { category: '+99 kg', limit: 'preko 99.0 kg', format: '6 min (3 min no points)' },
  { category: 'Absolute', limit: 'Otvorena kategorija', format: '8 min (4 min no points)' },
];

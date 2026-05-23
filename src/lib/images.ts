export interface GalleryItem {
  src: string;
  title: string;
  category: string;
}

export const IMAGES = {
  hero: {
    home: "https://www.impresamichielan.com/wp-content/uploads/2025/11/SFONDO-HOME-IMPRESA-MICHIELAN.jpg",
    servizi: "https://www.impresamichielan.com/wp-content/uploads/2025/11/rifacimento-tetti-rio-san-martino-scaled.jpg",
    chiSiamo: "https://www.impresamichielan.com/wp-content/uploads/2025/11/rifacimento-tetti-scorze-scaled.jpg",
    opere: "https://www.impresamichielan.com/wp-content/uploads/2025/11/risanamento-terrazza-scaled.jpg",
    contatti: "https://www.impresamichielan.com/wp-content/uploads/2025/11/terrazze-rio-san-martino.jpg",
  },
  logo: "https://www.impresamichielan.com/wp-content/uploads/2025/11/logo-trasp.png",
  logoHouse: "https://www.impresamichielan.com/wp-content/uploads/2025/11/logo-casetta.png",
  logoHouse2: "https://www.impresamichielan.com/wp-content/uploads/2025/11/logo-casetta2.png",
  logoHouseRGB: "https://www.impresamichielan.com/wp-content/uploads/2025/11/logo-casetta-RGB.png",
  about: {
    history: "https://www.impresamichielan.com/wp-content/uploads/2025/12/impresa-michielan.jpeg",
    workshop: "https://www.impresamichielan.com/wp-content/uploads/2025/11/IMG-20250801-WA0016.jpg",
    soa: "https://www.impresamichielan.com/wp-content/uploads/2025/12/Logo_Soa23.jpg",
  },
  materials: {
    izonil: "https://www.impresamichielan.com/wp-content/uploads/2025/11/izonilogo.avif",
    basalt: "https://images.unsplash.com/photo-1581579438747-104c53d7fbc2?w=800&q=80",
  },
  services: {
    restoration: "https://www.impresamichielan.com/wp-content/uploads/2025/11/IMG-20250801-WA0016.jpg",
    insulation: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    roofing: "https://www.impresamichielan.com/wp-content/uploads/2025/11/rifacimento-tetti-1-scaled.jpg",
    drywall: "https://www.impresamichielan.com/wp-content/uploads/2025/11/controsoffitti.jpg",
    materials: "https://www.impresamichielan.com/wp-content/uploads/2025/11/izonilogo.avif",
    renovation: "https://www.impresamichielan.com/wp-content/uploads/2025/11/rifacimento-tetti-scorze3-scaled.jpg",
  },
  gallery: [
    { src: "https://www.impresamichielan.com/wp-content/uploads/2025/11/Terrazze-riparate.jpg", title: "Terrazze Riparate", category: "Terrazzi" },
    { src: "https://www.impresamichielan.com/wp-content/uploads/2025/11/terrazze.jpg", title: "Rifacimento Terrazze", category: "Terrazzi" },
    { src: "https://www.impresamichielan.com/wp-content/uploads/2025/11/rifacimento-tetti-1-scaled.jpg", title: "Rifacimento Tetto", category: "Tetti" },
    { src: "https://www.impresamichielan.com/wp-content/uploads/2025/11/sistemazione-tetti-3.jpg", title: "Sistemazione Tetti", category: "Tetti" },
    { src: "https://www.impresamichielan.com/wp-content/uploads/2025/11/controsoffitti.jpg", title: "Lavori in Cartongesso", category: "Cartongessi" },
    { src: "https://www.impresamichielan.com/wp-content/uploads/2025/11/controsoffitti3.jpg", title: "Controsoffitti Moderni", category: "Cartongessi" },
    { src: "https://www.impresamichielan.com/wp-content/uploads/2025/11/rifacimento-tetti-rio-san-martino-scaled.jpg", title: "Tetto Rio San Martino", category: "Tetti" },
    { src: "https://www.impresamichielan.com/wp-content/uploads/2025/11/rifacimento-tetti-scorze-scaled.jpg", title: "Tetto Scorzè", category: "Tetti" },
    { src: "https://www.impresamichielan.com/wp-content/uploads/2025/11/risanamento-terrazza-scaled.jpg", title: "Risanamento Terrazza", category: "Terrazzi" },
    { src: "https://www.impresamichielan.com/wp-content/uploads/2025/11/sistemazione-tetti-2.jpg", title: "Manutenzione Tetto", category: "Tetti" },
    { src: "https://www.impresamichielan.com/wp-content/uploads/2025/11/rifacimento-tetti-scorze5-scaled.jpg", title: "Cantiere Scorzè", category: "Tetti" },
    { src: "https://www.impresamichielan.com/wp-content/uploads/2025/11/controsoffitti2.jpg", title: "Finiture Interne", category: "Cartongessi" },
  ] as GalleryItem[],
  testimonial: {
    bg: "https://www.impresamichielan.com/wp-content/uploads/2025/11/rifacimento-tetti-scorze-scaled.jpg",
    placeholder: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&q=80",
  },
} as const;

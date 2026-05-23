import { IMAGES } from "./images";

export const COMPANY = {
  name: "Impresa Edile Michielan",
  nameShort: "Impresa Michielan",
  slogan: "Trasformiamo la tua casa in un ambiente salubre",
  address: "Via Onaro 2/4, Scorzè (Ve), Venice, Italy",
  phone: "+39 3463482617",
  email: "impresa.michielan@gmail.com",
  vat: "IT04687550279",
  certification: "Attestazione SOA23 - OG1",
  years: "oltre 30 anni",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=100054213112306",
    instagram: "https://www.instagram.com/impresamichielan/",
  },
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.5!2d12.15!3d45.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDM0JzEyLjAiTiAxMsKwMDknMDAuMCJF!5e0!3m2!1sit!2sit!4v1",
};

export interface ServiceItem {
  id: string;
  href: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  details: string[];
  image: string;
  icon: string;
  benefits: string[];
  projects: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "restauri",
    href: "/servizi/restauri",
    title: "Restauri e pitture edili",
    shortDesc: "Oltre 30 anni di esperienza nel restauro e nella pittura edile.",
    fullDesc: "L'Impresa Michielan opera da oltre 30 anni nel settore delle ristrutturazioni e dei restauri edili. Offriamo interventi a 360° avvalendosi di manodopera attenta e precisa, con un profondo rispetto per l'opera originale. L'obiettivo è preservare il valore dell'immobile nel tempo attraverso l'uso di materiali innovativi e tecniche all'avanguardia.",
    benefits: [
      "Preservazione del Valore: Interventi che mantengono e accrescono il valore commerciale dell'immobile.",
      "Efficienza Energetica: Il rifacimento delle facciate migliora l'isolamento termico.",
      "Protezione: Maggiore resistenza agli agenti atmosferici e protezione strutturale.",
      "Estetica Rinnovata: Soluzioni che uniscono bellezza visiva e funzionalità.",
    ],
    details: [
      "Rifacimento facciate con materiali certificati.",
      "Utilizzo di pitture edili di alta qualità per esterni ed interni.",
      "Interventi di restauro conservativo nel rispetto delle strutture originali.",
      "Risanamento di superfici ammalorate",
      "Finiture decorative di pregio",
      "Utilizzo di materiali a basso impatto ambientale",
    ],
    projects: [
      "Tessera: Intervento di restauro completo e rifacimento del tetto eseguito con precisione nei tempi e costi previsti.",
      "Treviso: Restauro con focus sulla salubrità degli ambienti e isolamento interno.",
    ],
    image: IMAGES.services.restoration,
    icon: "Paintbrush",
  },
  {
    id: "isolamenti",
    href: "/servizi/isolamenti",
    title: "Isolamenti e cappotti",
    shortDesc: "Rivestimenti termici a basso spessore con soluzioni esclusive e innovative.",
    fullDesc: "Specializzati in rivestimenti termici a basso spessore e soluzioni per il risanamento da umidità di risalita. L'impresa propone sistemi innovativi in esclusiva per trasformare la casa in un ambiente salubre, eliminando definitivamente i problemi di muffa e infiltrazioni. I nostri interventi consentono di ottimizzare i costi energetici e ridurre l'inquinamento acustico.",
    benefits: [
      "Risparmio Energetico: Ottimizzazione dei costi di riscaldamento e raffrescamento.",
      "Comfort Acustico: Riduzione significativa del rumore proveniente dall'esterno.",
      "Salubrità: Eliminazione definitiva dell'umidità di risalita e delle muffe.",
      "Spazi Ottimizzati: Grazie ai rivestimenti a basso spessore, si perde pochissimo spazio interno.",
    ],
    details: [
      "Pannelli in fibra di basalto: Soluzione innovativa per isolamento termico e acustico.",
      "Sistemi anti-umidità: Interventi rapidi ed efficaci per murature degradate.",
      "Materiali traspiranti: Uso di fibre naturali che permettono alla casa di 'respirare'.",
      "Cappotti termici a basso spessore",
      "Soluzioni isolanti innovative in esclusiva",
      "Materiali certificati e garantiti",
    ],
    projects: [
      "Treviso: Isolamento interno delle pareti con pannelli in fibra di basalto e Nobilium, con miglioramento immediato del comfort abitativo.",
    ],
    image: IMAGES.services.insulation,
    icon: "ThermometerSnowflake",
  },
  {
    id: "tetti",
    href: "/servizi/tetti",
    title: "Rifacimento tetti e terrazzi",
    shortDesc: "Ristrutturazione completa di tetti con tegole classiche, lamiera coibentata e impermeabilizzazioni.",
    fullDesc: "L'impresa esegue il rifacimento completo di coperture, dai sistemi classici alle soluzioni più moderne in metallo. Si occupa inoltre dell'impermeabilizzazione di superfici piane come terrazze e poggioli, garantendo la massima tenuta nel tempo. Ogni intervento è eseguito con la massima cura e professionalità.",
    benefits: [
      "Impermeabilizzazione Totale: Protezione garantita contro infiltrazioni d'acqua.",
      "Durata nel Tempo: Utilizzo di materiali resistenti come il coppo, la tegola o la lamiera coibentata.",
      "Integrazione Tecnologica: Possibilità di integrare impianti fotovoltaici durante il rifacimento.",
    ],
    details: [
      "Sistemi a coppo o tegola tradizionale.",
      "Coperture in lamiera grecata, anche in versione coibentata per isolamento termico.",
      "Opere di lattoneria: grondaie, pluviali e rivestimenti metallici.",
      "Impermeabilizzazione di grandi superfici (terrazze e lastrici solari).",
      "Manutenzione straordinaria e ordinaria",
      "Isolamento termico della copertura",
    ],
    projects: [
      "Olmo di Martellago: Rifacimento urgente del tetto con successiva installazione di impianto fotovoltaico.",
      "Calcroci di Camponogara: Opere di ristrutturazione del tetto a seguito di eventi atmosferici intensi.",
    ],
    image: IMAGES.services.roofing,
    icon: "Building2",
  },
  {
    id: "cartongessi",
    href: "/servizi/cartongessi",
    title: "Cartongessi e contropareti",
    shortDesc: "Pareti divisorie, controsoffitti, pareti insonorizzate. Soluzioni su misura per il tuo comfort.",
    fullDesc: "Soluzioni versatili per la ridistribuzione degli spazi interni e il miglioramento del comfort. L'uso del cartongesso permette di creare pareti divisorie, controsoffitti e contropareti con un occhio di riguardo al design e alle prestazioni tecniche. Le nostre soluzioni offrono versatilità e velocità di posa.",
    benefits: [
      "Versatilità di Design: Creazione di forme e volumi personalizzati per valorizzare gli interni.",
      "Isolamento Acustico: Creazione di barriere efficaci contro il rumore tra le stanze.",
      "Velocità di Posa: Interventi puliti e rapidi rispetto alla muratura tradizionale.",
    ],
    details: [
      "Pareti divisorie e contropareti isolate acusticamente.",
      "Controsoffitti tecnici e decorativi.",
      "Integrazione di sistemi di illuminazione e impianti all'interno delle strutture.",
      "Pareti insonorizzate per massimo comfort",
      "Soluzioni su misura per ogni ambiente",
      "Finiture di pregio e stuccature perfette",
    ],
    projects: [
      "Gardigiano: Interventi di demolizione e ricostruzione interna con ridistribuzione dei locali.",
    ],
    image: IMAGES.services.drywall,
    icon: "Layers",
  },
  {
    id: "materiali",
    href: "/servizi/materiali",
    title: "Materiali innovativi in esclusiva",
    shortDesc: "IZONIL e pannelli in fibra di basalto per isolamento termico e acustico d'avanguardia.",
    fullDesc: "L'Impresa Michielan si distingue per l'utilizzo di materiali all'avanguardia, spesso in esclusiva, che garantiscono prestazioni superiori rispetto ai prodotti standard del mercato edile. Questi materiali sono fondamentali per il risanamento e l'efficientamento energetico.",
    benefits: [
      "Casa Salubre: Materiali naturali e certificati che migliorano la qualità dell'aria.",
      "Alte Prestazioni: Maggiore resistenza termica e capacità di assorbimento acustico.",
      "Sostenibilità: Rispetto dell'ambiente grazie a materiali eco-compatibili.",
    ],
    details: [
      "IZONIL: Miscela di intonaco che crea una membrana impermeabile traspirante.",
      "Fibra di Basalto: Pannelli per isolamento termo-acustico ad alta efficienza.",
      "Nobilium: Fibre naturali per un isolamento termico che favorisce il benessere.",
      "Soluzioni esclusive sul territorio",
      "Certificazioni di qualità e prestazioni",
      "Consulenza tecnica personalizzata",
    ],
    projects: [
      "Treviso e Mestre: Applicazione sistematica di questi materiali per risolvere problemi di filtrazioni e umidità.",
    ],
    image: IMAGES.services.materials,
    icon: "FlaskConical",
  },
  {
    id: "ristrutturazioni",
    href: "/servizi/ristrutturazioni",
    title: "Ristrutturazioni complete chiavi in mano",
    shortDesc: "Progetti di ristrutturazione completi con materiali certificati e qualità garantita.",
    fullDesc: "Un servizio completo che solleva il cliente da ogni preoccupazione. L'impresa segue ogni fase, dalla progettazione alla consegna finale, coordinando tutte le figure professionali necessarie per trasformare il progetto in realtà. Trasformiamo la vostra casa in un ambiente salubre e accogliente.",
    benefits: [
      "Unico Interlocutore: Gestione centralizzata di tutte le maestranze.",
      "Costi e Tempi Certi: Rispetto rigoroso dei preventivi e delle scadenze.",
      "Qualità Certificata: Utilizzo di materiali di ultima generazione e tecnologie eco-friendly.",
    ],
    details: [
      "Sviluppo progetti di ripristino per edifici civili.",
      "Coordinamento di demolizioni, ricostruzioni e smaltimento inerti.",
      "Presenza costante del titolare in cantiere per la direzione lavori.",
      "Materiali certificati di alta qualità",
      "Rispetto dei tempi e del budget",
      "Garanzia sui lavori eseguiti",
    ],
    projects: [
      "Mestre: Ripristino completo di appartamento a seguito di gravi filtrazioni.",
      "Gardigiano: Ristrutturazione completa inclusiva di sgombero locali e smaltimento.",
    ],
    image: IMAGES.services.renovation,
    icon: "Home",
  },
];

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  stars: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Miatto Massimiliano",
    location: "Gardigiano",
    text: "Servizio eccellente per la demolizione e ricostruzione. Il team ha gestito con cura anche lo smaltimento dei rifiuti. Professionalità e puntualità dimostrate in ogni fase del lavoro.",
    stars: 5,
  },
  {
    name: "Rizzato Michele",
    location: "Olmo di Martellago",
    text: "Urgente rifacimento del tetto e installazione fotovoltaico. L'intervento è stato tempestivo e la qualità del lavoro è stata superiore alle aspettative. Consiglio vivamente.",
    stars: 5,
  },
  {
    name: "Crivellari Avellino",
    location: "Calcroci di Camponogara",
    text: "Affidato a loro molteplici lavori di ristrutturazione. Il titolare Donato è sempre stato presente in cantiere, seguito personalmente ogni fase. Massima serietà e competenza.",
    stars: 5,
  },
  {
    name: "Cazzador Luciano",
    location: "Tessera",
    text: "Lavori di restauro e rifacimento del tetto eseguiti con precisione artigianale. Ogni dettaglio è stato curato con attenzione. Un'impresa che consiglio senza riserve.",
    stars: 5,
  },
  {
    name: "Zottarel Lina e Barzan Danilo",
    location: "Treviso",
    text: "Isolamento pareti interne con pannelli in fibra di basalto. Risultato straordinario: la casa è più calda d'inverno e più fresca d'estate. Un investimento per la salute della nostra casa.",
    stars: 5,
  },
  {
    name: "Grossi Morris",
    location: "Mestre",
    text: "Riparazione infiltrazioni d'acqua nell'appartamento. Hanno individuato e risolto il problema con precisione. Lavoro professionale e prezzi onesti.",
    stars: 5,
  },
];

export const BENEFITS = [
  {
    title: "Risparmio energetico",
    desc: "Riduci i consumi fino al 40% grazie a isolamenti termici all'avanguardia e materiali innovativi.",
  },
  {
    title: "Benessere abitativo",
    desc: "Ambienti salubri, privi di umidità e muffe, con temperature ideali in ogni stagione.",
  },
  {
    title: "Rispetto dell'ambiente",
    desc: "Materiali ecologici e sostenibili che riducono l'impatto ambientale della tua abitazione.",
  },
  {
    title: "Valore dell'immobile",
    desc: "Ogni intervento aumenta il valore del tuo immobile, con certificazioni e garanzie di qualità.",
  },
  {
    title: "Silenzio e comfort",
    desc: "Isolamento acustico per vivere in un ambiente tranquillo, lontano dai rumori esterni.",
  },
  {
    title: "Soluzioni su misura",
    desc: "Ogni progetto è unico: studiamo la soluzione migliore per le tue esigenze specifiche.",
  },
];

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Servizi", href: "/servizi" },
  { label: "Chi Siamo", href: "/chi-siamo" },
  { label: "Opere", href: "/opere" },
  { label: "Contatti", href: "/contatti" },
];

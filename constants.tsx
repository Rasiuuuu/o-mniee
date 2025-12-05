import { 
  Heart, 
  MessageCircle, 
  Users, 
  Shuffle, 
  Zap, 
  Anchor 
} from "lucide-react";
import { PersonalityTrait, ValueItem } from "./types";

export const TEXT_CONTENT = {
  hero: {
    headline: "Lubię ludzi. Lubię rozmowy. Lubię dobrą atmosferę.",
    subheadline: "Z natury buduję relacje i sprawiam, że ludzie czują się przy mnie swobodnie.",
    cta: "Porozmawiajmy"
  },
  about: {
    title: "O Mnie",
    paragraphs: [
      "Zawsze lubiłem ludzi. Ich historie, emocje, sposób mówienia. Może dlatego tak łatwo nawiązuję relacje - po prostu naprawdę lubię rozmowy.",
      "W pracy i w życiu często trafiają do mnie osoby zestresowane albo zagubione. Mam w sobie spokój, który pomaga im się wyciszyć. Nie oceniam. Nie poganiam. Po prostu słucham i staram się zrozumieć.",
      "Lubię pomagać. Lubię tłumaczyć rzeczy po ludzku. Lubię, kiedy ktoś odchodzi spokojniejszy niż przyszedł."
    ]
  },
  people: {
    title: "Jak widzę ludzi",
    paragraphs: [
      "Wierzę, że ludzi trzeba traktować po ludzku - z szacunkiem i spokojem.",
      "Wierzę, że dobra rozmowa potrafi rozwiązać więcej niż proces.",
      "Wierzę, że każdy ma swoją historię i warto ją usłyszeć.",
      "Atmosfera jest dla mnie ważna. Lubię, kiedy ludzie przy mnie czują się sobą - bez napięcia, bez presji."
    ]
  },
  passion: {
    title: "Co mnie napędza",
    paragraphs: [
      "Lubię tworzyć rzeczy, które dają komuś radość. Gotowanie i rękodzieło z drewna to dla mnie sposób na wyrażenie siebie.",
      "Cieszy mnie, gdy ktoś spróbuje mojego jedzenia i się uśmiechnie, albo gdy zobaczy coś, co zrobiłem własnymi rękami.",
      "Lubię spędzać czas z ludźmi - na rozmowach, podróżach, aktywnościach. I lubię się rozwijać: siłownia, nowe doświadczenia, nowe miejsca."
    ]
  },
  future: {
    title: "Dokąd idę",
    paragraphs: [
      "Chcę znaleźć drogę zawodową, w której czuję, że jestem na swoim miejscu.",
      "Chcę łączyć swoją relacyjność, spokój i empatię z pracą, która ma sens.",
      "Chcę robić coś zgodnego ze mną - i rosnąć jako człowiek."
    ]
  },
  contact: {
    title: "Kontakt",
    text: "Chcesz pogadać? Zawsze chętnie.",
    cta: "Napisz do mnie"
  }
};

export const CONTACT_DETAILS = {
  email: "ras.misza@gmail.com",
  linkedin: "https://www.linkedin.com/in/michalras/"
};

/**
 * KONFIGURACJA ZDJĘĆ LOKALNYCH
 * 
 * Aby zdjęcia działały:
 * 1. Utwórz folder 'assets' w katalogu 'public' swojego projektu.
 * 2. Wgraj tam zdjęcia i nazwij je zgodnie ze ścieżkami poniżej (np. hero.jpg).
 * 
 * Jeśli plik nie zostanie znaleziony, strona wyświetli placeholder.
 */
export const IMAGES = {
  profile: {
    // Ścieżka: public/assets/hero.jpg
    main: "/assets/hero.jpg", 
  },
  about: {
    // Ścieżka: public/assets/about.jpg
    meeting: "/assets/about.jpg", 
  },
  passion: {
    // Ścieżka: public/assets/woodwork.jpg
    woodwork: "/assets/woodwork.jpg", 
    // Ścieżka: public/assets/cooking.jpg
    cooking: "/assets/cooking.jpg", 
    // Ścieżka: public/assets/crafts.jpg
    crafts: "/assets/crafts.jpg",
  }
};

export const PERSONALITY_TRAITS: PersonalityTrait[] = [
  {
    title: "Empatyczny",
    description: "Szybko wyczuwam emocje innych.",
    icon: Heart
  },
  {
    title: "Komunikatywny",
    description: "Tłumaczę rzeczy jasno i bez stresu.",
    icon: MessageCircle
  },
  {
    title: "Spokojny",
    description: "W trudnych sytuacjach obniżam napięcie.",
    icon: Anchor
  },
  {
    title: "Relacyjny",
    description: "Buduję długotrwałe relacje, nie szybkie transakcje.",
    icon: Users
  },
  {
    title: "Łączący ludzi",
    description: "Poprawiam atmosferę i spajam grupę.",
    icon: Shuffle
  },
  {
    title: "Elastyczny",
    description: "Szybko dostosowuję się do różnych sytuacji.",
    icon: Zap
  }
];

export const VALUES: ValueItem[] = [
  { label: "Szczerość" },
  { label: "Spokój" },
  { label: "Relacje" },
  { label: "Partnerstwo" },
  { label: "Szacunek" },
  { label: "Dobra atmosfera" },
  { label: "Poczucie humoru" }
];
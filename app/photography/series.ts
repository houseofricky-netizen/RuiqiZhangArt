export type PhotographySeries = {
  slug: string;
  name: string;
  subtitle: string;
  copy: string;
  images: string[];
};

function imageRange(prefix: string, count: number) {
  return Array.from(
    { length: count },
    (_, index) => `/images/${prefix}-${String(index + 1).padStart(2, "0")}.jpg`,
  );
}

export const photographySeries: PhotographySeries[] = [
  {
    slug: "jinghan",
    name: "Jinghan",
    subtitle: "Tenderness Divided",
    copy: "A quiet study of intimacy, sunlight and the body held between exposure and retreat.",
    images: imageRange("jinghan", 4),
  },
  {
    slug: "persona",
    name: "Persona",
    subtitle: "Masks of Gender",
    copy: "Staged gestures turn the body into a contested surface for gender, power and performance.",
    images: imageRange("persona", 9),
  },
  {
    slug: "solitary",
    name: "Solitary",
    subtitle: "Private Waters",
    copy: "The bath becomes a private stage where vulnerability, ritual and enclosure overlap.",
    images: imageRange("solitary", 10),
  },
  {
    slug: "scarlet",
    name: "Scarlet",
    subtitle: "Body in a Red Room",
    copy: "Red fabric, cotton and constrained gestures hold desire and danger in the same frame.",
    images: imageRange("scarlet", 9),
  },
  {
    slug: "overdose",
    name: "Overdose",
    subtitle: "Sensory Excess",
    copy: "Colour, blur and altered posture push the photographed body toward dream and disappearance.",
    images: imageRange("overdose", 7),
  },
  {
    slug: "modern-china",
    name: "Modern China",
    subtitle: "Place, Labour, Memory",
    copy: "An observational series tracing architecture, ritual, work and the quiet textures of everyday life.",
    images: imageRange("modern-china", 9),
  },
  {
    slug: "modern-america",
    name: "Modern America",
    subtitle: "Street Observations",
    copy: "Public space is read through passing figures, winter light, signage and overlooked urban details.",
    images: imageRange("modern-america", 12),
  },
];

export function getPhotographySeries(slug: string) {
  return photographySeries.find((series) => series.slug === slug);
}

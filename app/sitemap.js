import { EDISI, SITE } from "@/lib/struk";

export default function sitemap() {
  const now = new Date();
  return [
    { url: SITE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/kalkulator`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/edisi`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...EDISI.map((e) => ({ url: `${SITE}/edisi/${e.slug}`, lastModified: now, changeFrequency: "yearly", priority: 0.6 })),
  ];
}

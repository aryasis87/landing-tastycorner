import { Bricolage_Grotesque, IBM_Plex_Mono, Inter } from "next/font/google";
import SiteHeader from "./components/SiteHeader";
import Footer from "./components/footer/Footer";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"], weight: ["500", "700", "800"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "600"] });

const __jsonld = {"@context":"https://schema.org","@type":"Periodical","name":"Struk Mingguan — Tasty Corner","description":"Buletin angka mingguan untuk usaha makanan dan minuman kecil","url":"https://landing-tastycorner.vercel.app","inLanguage":"id"};

export const metadata = {
  metadataBase: new URL("https://landing-tastycorner.vercel.app"),
  title: { default: "Tasty Corner — Struk Mingguan untuk Usaha Makanan", template: "%s — Tasty Corner" },
  description: "Struk Mingguan dari Tasty Corner: buletin gratis tiap Senin untuk warung, kedai, dan kafe — satu menu dibedah sampai rupiah terakhir. Plus kalkulator food cost.",
  applicationName: "Tasty Corner",
  keywords: ["F&B", "kuliner", "strategi makanan", "restoran", "food business"],
  authors: [{ name: "Tasty Corner" }],
  creator: "Tasty Corner",
  publisher: "Tasty Corner",
  alternates: { canonical: "https://landing-tastycorner.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://landing-tastycorner.vercel.app",
    siteName: "Tasty Corner",
    title: "Tasty Corner — Struk Mingguan untuk Usaha Makanan",
    description: "Struk Mingguan dari Tasty Corner: buletin gratis tiap Senin untuk warung, kedai, dan kafe — satu menu dibedah sampai rupiah terakhir. Plus kalkulator food cost.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Tasty Corner — Struk Mingguan untuk Usaha Makanan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tasty Corner — Struk Mingguan untuk Usaha Makanan",
    description: "Struk Mingguan dari Tasty Corner: buletin gratis tiap Senin untuk warung, kedai, dan kafe — satu menu dibedah sampai rupiah terakhir. Plus kalkulator food cost.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${bricolage.variable} ${inter.variable} ${plexMono.variable} antialiased`}>
        <a href="#konten" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-tomato-2 focus:px-4 focus:py-2 focus:text-white">Lompat ke konten</a>
        <SiteHeader />
        <div id="konten">{children}</div>
        <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}

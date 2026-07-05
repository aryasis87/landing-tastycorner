import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"], weight: ["500", "700", "800"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const __jsonld = {"@context":"https://schema.org","@type":"FoodEstablishment","name":"Tasty Corner","description":"Strategi F&B menggugah selera","url":"https://tastycorner.pintuweb.com","areaServed":"ID"};

export const metadata = {
  metadataBase: new URL("https://tastycorner.pintuweb.com"),
  title: "Tasty Corner — Strategi F&B yang Menggugah Selera",
  description: "Tasty Corner: hadirkan cita rasa terbaik untuk audiensmu dan ubah mereka menjadi pelanggan setia.",
  applicationName: "Tasty Corner",
  keywords: ["F&B", "kuliner", "strategi makanan", "restoran", "food business"],
  authors: [{ name: "Tasty Corner" }],
  creator: "Tasty Corner",
  publisher: "Tasty Corner",
  alternates: { canonical: "https://tastycorner.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://tastycorner.pintuweb.com",
    siteName: "Tasty Corner",
    title: "Tasty Corner — Strategi F&B yang Menggugah Selera",
    description: "Tasty Corner: hadirkan cita rasa terbaik untuk audiensmu dan ubah mereka menjadi pelanggan setia.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Tasty Corner — Strategi F&B yang Menggugah Selera" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tasty Corner — Strategi F&B yang Menggugah Selera",
    description: "Tasty Corner: hadirkan cita rasa terbaik untuk audiensmu dan ubah mereka menjadi pelanggan setia.",
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
      <body className={`${bricolage.variable} ${inter.variable} antialiased`}>
        {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}

import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"], weight: ["500", "700", "800"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata = {
  title: "Tasty Corner — Strategi F&B yang Menggugah Selera",
  description: "Tasty Corner: hadirkan cita rasa terbaik untuk audiensmu dan ubah mereka menjadi pelanggan setia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${bricolage.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

import Hero from "./components/hero/Hero";
import Isi from "./components/Isi";
import EdisiTeaser from "./components/EdisiTeaser";
import LeadForm from "./components/leadform/LeadForm";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <Isi />
      <EdisiTeaser />
      <LeadForm />
      <FAQ />
    </main>
  );
}

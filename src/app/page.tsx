import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowToUse from "@/components/HowToUse";
import Ingredients from "@/components/Ingredients";
import Trust from "@/components/Trust";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Benefits />
      <HowToUse />
      <Ingredients />
      <Trust />
      <FAQ />
      <ContactForm />
    </main>
  );
}

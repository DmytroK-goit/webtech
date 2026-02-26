import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import HowWorks from "@/components/howWorks";

export default function Home() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <Hero />
      <HowWorks />

      <footer>
        <Footer />
      </footer>
    </main>
  );
}

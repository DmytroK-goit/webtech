import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import HowWorks from "@/components/howWorks";
import Reasons from "@/components/reasons";
import Team from "@/components/team";

export default function Home() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <Hero />
      <HowWorks />
      <Team />
      <Reasons />

      <footer>
        <Footer />
      </footer>
    </main>
  );
}

import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import HowWorks from "@/components/howWorks";
import Innovation from "@/components/Innovation";
import News from "@/components/news";
import Reasons from "@/components/reasons";
import Team from "@/components/team";
import Testimonials from "@/components/Testimonials";

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
      <Testimonials />
      <Innovation />
      <News />

      <footer>
        <Footer />
      </footer>
    </main>
  );
}

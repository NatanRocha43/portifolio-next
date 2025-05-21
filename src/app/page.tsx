import Header from "./components/sections/Header";
import AboutMe from "./components/sections/AboutMe";
import Hero from "./components/sections/Hero";
import ServiceWorker from "./components/sections/ServicesSection";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <ServiceWorker />
      </main>
      <Footer />
    </>
  );
}

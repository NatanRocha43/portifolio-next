import Header from "./components/sections/Header";
import AboutMe from "./components/sections/AboutMe";
import Hero from "./components/sections/Hero";
import ServiceWorker from "./components/sections/ServicesSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <ServiceWorker />
      </main>
    </>
  );
}

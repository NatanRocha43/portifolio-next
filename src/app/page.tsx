import Header from "./components/sections/Header";
import AboutMe from "./components/sections/AboutMe";
import Hero from "./components/sections/Hero";
import ServiceWorker from "./components/sections/ServicesSection";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Header />
      <main >
        <Hero />
        <AboutMe />
        <ServiceWorker />
        
      </main>
    </div>
  );
}

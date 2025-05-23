import Header from "./components/sections/Header";
import AboutMe from "./components/sections/AboutMe";
import Hero from "./components/sections/Hero";
import ServiceWorker from "./components/sections/ServicesSection";
import Formulario from "./components/sections/Formulario";
import Footer from "./components/sections/Footer";
import ProjectsPage from "./components/sections/ProjectsPage";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <ServiceWorker />
        <ProjectsPage />
        <Formulario />
      </main>
      <Footer />
    </>
  );
}

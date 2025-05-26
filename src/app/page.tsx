import Header from "./components/sections/Header";
import AboutMe from "./components/sections/AboutMe";
import Hero from "./components/sections/Hero";
import ServiceWorker from "./components/sections/ServicesSection";
import { Form } from "./components/sections/Form";
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
        <Form />
      </main>
      <Footer />
    </>
  );
}

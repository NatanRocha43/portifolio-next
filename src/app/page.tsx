import Header from "./_components/_header/Header";
import AboutMe from "./_components/_main/AboutMe";
import Hero from "./_components/_main/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
      </main>
    </>
  );
}

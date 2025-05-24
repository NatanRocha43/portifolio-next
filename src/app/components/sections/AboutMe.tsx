import IconButton from "../UI/IconButton";
import { ArrowDownToLine } from "lucide-react";
import { SectionTitle } from "../UI/SectionTitle";

export default function AboutMe() {
  return (
    <section
      className="flex justify-center relative h-screen items-center"
      id="section-about"
    >
      <div className="flex flex-col items-center gap-6 px-4 max-w-xl lg:max-w-4xl text-center">
        <SectionTitle
          id="services-title"
          title="Sobre mim"
          subtitle="Conheça-me"
        />
        <p className="text-xs lg:text-sm font-medium leading-relaxed text-[#E1E1E1]">
          Olá! Me chamo Natan, sou apaixonado por tecnologia, design e por tudo
          que envolve criar experiências digitais que realmente façam sentido.
          Desde criança, sempre tive curiosidade em entender como as coisas
          funcionam — e foi justamente essa inquietação que me levou ao universo
          do desenvolvimento web.
          <br />
          <br />
          Atualmente, estou cursando uma pós-graduação em Desenvolvimento Web
          pelo Instituto Federal de Educação, Ciência e Tecnologia de São Paulo
          (IFSP), onde aprofundo meus conhecimentos técnicos e fortaleço minha
          base teórica para construir soluções ainda mais eficazes.
          <br />
          <br />
          Sou movido por desafios, adoro resolver problemas e testar novas
          ideias. Gosto de transformar conceitos em interfaces bonitas,
          funcionais e de alta performance. Acredito que um bom trabalho vai
          muito além do código: nasce da colaboração com o time, de conversas
          produtivas e de metas bem definidas.
          <br />
          <br />
          Quer conhecer melhor um pouco mais sobre minha trajetória? É só clicar
          no botão abaixo e dar uma olhada no meu currículo.
        </p>
        <IconButton
          href="./natan-rocha-front-end.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          ariaLabel="Download do currículo em PDF"
          text="Download CV"
          icon={<ArrowDownToLine className="h-5 w-5" />}
        />
      </div>
    </section>
  );
}

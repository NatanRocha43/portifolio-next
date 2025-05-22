import IconButton from "../UI/IconButton";
import { ArrowDownToLine } from "lucide-react";
import { SectionTitle } from '../UI/SectionTitle';

export default function AboutMe() {
    return (
        <section className="flex justify-center relative h-screen items-center" id="section-about">
            <div className="flex flex-col items-center gap-6 px-4 max-w-xl lg:max-w-4xl text-center">
                <SectionTitle
                    id="services-title"
                    title="Sobre mim"
                    subtitle="Conheça-me"
                />
                <p className="text-xs lg:text-sm font-medium leading-relaxed text-[#E1E1E1]">
                    Oi! Eu sou o Natan, apaixonado por tecnologia, design e tudo que envolve criar experiências digitais que façam sentido de verdade.
                    Desde pequeno sempre gostei de entender como as coisas funcionam, e foi essa curiosidade que me levou para o mundo do desenvolvimento web.
                    <br /><br />
                    Gosto de resolver problemas, testar ideias e aprender algo novo sempre que posso. Curto transformar projetos em interfaces bonitas,
                    funcionais e rápidas. Também acredito que um bom trabalho vai muito além do código:
                    vem da troca com o time, de boas conversas e de objetivos bem alinhados.
                    <br /><br />
                    Quer conhecer melhor um pouco mais sobre minha trajetória?
                    É só clicar no botão abaixo e dar uma olhada no meu currículo.
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

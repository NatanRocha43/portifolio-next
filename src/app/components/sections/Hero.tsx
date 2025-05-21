import { MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="relative h-screen flex items-center justify-center snap-start"
      aria-label="Seção principal do perfil de Natan Rocha"
    >
      <Image
        src="/bg-hero.svg"
        alt="Background hero"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
        aria-hidden="true"
      />
      <div className="relative flex flex-col items-center justify-center gap-4 z-10">
        <Image
          src="/self.svg"
          alt="Foto de perfil de Natan Rocha"
          width={200}
          height={200}
          loading="eager"
          priority
          className="rounded-full w-[200px] h-[200px]"
        />

        <h1 className="text-5xl lg:text-6xl font-bold tracking-[-0.06em] text-white">
          Natan Rocha
        </h1>

        <div
          className="flex items-center gap-2"
          role="group"
          aria-label="Título Front end com ícone"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-[#4FC3F7] to-white bg-clip-text text-transparent">
              Front end
            </span>
          </h2>
        </div>

        <div className="px-0.5 lg:px-[unset] max-w-xs lg:max-w-3xl">
          <h3 className="text-center text-sm lg:text-base font-medium leading-[30px] text-[#E1E1E1]">
            Desenvolvedor front-end com foco em interfaces dinâmicas, usabilidade e performance web. 
            Atuo na criação de soluções digitais eficientes e intuitivas, 
            traduzindo requisitos complexos em experiências funcionais 
            que agregam valor ao produto.
          </h3>
        </div>

        <a
          href="https://wa.me/5515997109030?text=Vim%20pelo%20seu%20portfólio!"
          target="_blank"
          rel="noopener noreferrer"
          title="Abrir WhatsApp para entrar em contato com Natan Rocha"
          role="button"
          className="flex w-fit items-center gap-2 rounded-full border border-[#4FC3F7] px-6 py-3 text-sm font-medium text-white"
          aria-label="Contato via WhatsApp"
        >
          Contact Me
          <MessageCircle aria-hidden="true" className="h-5 w-5" strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}

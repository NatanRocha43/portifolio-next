import Image from "next/image";
import IconButton from "../UI/IconButton";
import { MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <div
      id="section-home"
      className="relative h-screen flex items-center justify-center"
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
      <div className="relative flex flex-col items-center justify-center gap-4 z-10 pt-5 lg:pt-0">
        <Image
          src="/self.svg"
          alt="Foto de perfil de Natan Rocha"
          width={200}
          height={200}
          loading="eager"
          priority
          className="rounded-full w-[200px] h-[200px]"
        />

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-5xl lg:text-6xl font-bold tracking-[-0.06em] text-white">Natan Rocha</h1>
          <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight bg-gradient-to-r from-[#4FC3F7] to-white bg-clip-text text-transparent">
            Front end
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
        <IconButton
          href="https://wa.me/5515997109030?text=Vim%20pelo%20seu%20portfólio!"
          target="_blank"
          rel="noopener noreferrer"
          ariaLabel="Contato via WhatsApp"
          text="Contact Me"
          icon={<MessageCircle aria-hidden="true" className="h-5 w-5" strokeWidth={2} />}
          className="flex w-fit"
        />
      </div>
    </div>
  );
}

import { MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="h-[calc(100vh-80px)]  flex items-center justify-center bg-[url('/bg-hero.svg')] bg-center bg-no-repeat rounded-full lg:rounded-none"
      aria-label="Seção principal do perfil de Natan Rocha"
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <div>
          <Image
            src="/self.svg"
            alt="Foto de perfil de Natan Rocha"
            width={200}
            height={190}
            className="rounded-full"
          />
        </div>

        <div>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-[-0.06em] text-white">
            Natan Rocha
          </h1>
        </div>

        <div>
          <h2 className="flex align-center text-3xl lg:text-4xl font-extrabold">
            <span className="bg-gradient-to-r from-[#4FC3F7] to-white bg-clip-text text-transparent">
              Front end
            </span>
            <span
              role="img"
              aria-label="mago"
              className="ml-2 align-middle text-white h-[43px] lg:h-[50px]"
            >
              🧙‍♂️
            </span>
          </h2>
        </div>

        <div className="px-0.5 lg:px-[unset]">
          <h3 className="max-w-xs lg:max-w-3xl text-center text-sm lg:text-lg font-medium leading-[30px] text-[#E1E1E1]">
            Desenvolvedor front-end apaixonado, com expertise em interfaces
            dinâmicas, usabilidade e performance web, me destaco diante dos
            desafios de criar experiências digitais eficientes e intuitivas,
            transformando requisitos complexos em soluções interativas que
            impulsionam a inovação.
          </h3>
        </div>

        <div>
          <a
            href="https://wa.me/5515997109030?text=Vim%20pelo%20seu%20portfólio!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-2 rounded-full border border-[#4FC3F7] px-6 py-3 text-sm font-medium text-white"
            aria-label="Contato via WhatsApp"
          >
            Contact Me
            <MessageCircle
              aria-hidden="true"
              className="h-5 w-5"
              strokeWidth={2}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

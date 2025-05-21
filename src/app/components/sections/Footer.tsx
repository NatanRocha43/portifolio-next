// src/app/components/sections/Footer.tsx

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import SocialLink from "../UI/SocialLink";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-6 mt-20 border-t border-[#333]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <span className="text-sm text-[#AAAAAA]">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </span>

        <div className="flex gap-4 mt-4 md:mt-0">
          <SocialLink
            href="https://www.linkedin.com/in/natan-rocha-front/"
            icon={FaLinkedin}
            label="Link para o LinkedIn de Natan Rocha"
          />
          <SocialLink
            href="https://github.com/NatanRocha43"
            icon={FaGithub}
            label="Link para o GitHub de Natan Rocha"
          />
         <SocialLink
            href="mailto:natan.paularocha@gmail.com"
            icon={FaEnvelope}
            label="Enviar e-mail para Natan Rocha"
            />
        </div>
      </div>
    </footer>
  );
}

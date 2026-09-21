"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { SectionTitle } from "../UI/SectionTitle";
import { FormFields } from "../UI/FormFields";
import { SubmitButton } from "../UI/SubmitButton";
import { ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { ContactFormData } from "../../_types";

const FormSchema = z.object({
  nome: z.string().min(2, "Nome muito curto"),
  email: z.string().email("Email inválido"),
  mensagem: z.string().min(5, "Mensagem muito curta"),
});

export type FormData = ContactFormData;

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    handle: "in/natan-rocha-front",
    href: "https://www.linkedin.com/in/natan-rocha-front/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    handle: "@NatanRocha43",
    href: "https://github.com/NatanRocha43",
    icon: FaGithub,
  },
  {
    name: "WhatsApp",
    handle: "(15) 99710-9030",
    href: "https://wa.me/5515997109030?text=Vim%20pelo%20seu%20portfólio!",
    icon: FaWhatsapp,
  },
] as const;

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    criteriaMode: "all",
    defaultValues: { nome: "", email: "", mensagem: "" },
  });

  const onSubmit = async (data: ContactFormData) => {
    const toastId = toast.loading("Enviando mensagem...");

    try {
      const [{ collection, addDoc }, { firestoreDb }] = await Promise.all([
        import("firebase/firestore"),
        import("../../_lib/firebase"),
      ]);

      await addDoc(collection(firestoreDb, "formularios"), {
        ...data,
        criadoEm: new Date(),
      });
      toast.success("Mensagem enviada com sucesso! Entrarei em contato em breve.", {
        id: toastId,
      });
      reset();
    } catch (error) {
      console.error("Erro ao enviar:", error);
      toast.error("Erro ao enviar formulário. Tente novamente pelo WhatsApp!", {
        id: toastId,
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-6 sm:px-12 max-w-[1200px] mx-auto w-full border-t border-[#E5E4E1]"
      aria-label="Entre em contato com Natan Rocha"
    >
      <SectionTitle
        title="Contato"
        description="Tem uma vaga, parceria ou projeto em mente? Ficarei muito feliz em conversar com você."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
        {/* Left Column: Direct Info & Social Cards */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight mb-3">
              Vamos conversar sobre o seu próximo projeto.
            </h3>
            <p className="text-base text-[#5C5C5C] leading-relaxed font-normal mb-6">
              Seja para integrar um time ágil de tecnologia, atuar em consultoria de migração para VTEX IO / Drupal DX8 ou desenvolver interfaces de alta conversão.
            </p>

            <a
              href="mailto:natan.paularocha@gmail.com"
              aria-label="Enviar email para natan.paularocha@gmail.com"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-base sm:text-lg md:text-xl font-bold text-[#1A1A1A] pb-1 border-b-2 border-[#7C3AED] hover:border-[#6D28D9] hover:text-[#7C3AED] transition-all max-w-full focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:outline-none rounded-sm"
            >
              <span className="truncate sm:overflow-visible">natan.paularocha@gmail.com</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
            {SOCIAL_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.name}: ${item.handle} (abre em nova aba)`}
                  className="p-4 rounded-xl bg-white border border-[#E5E4E1] hover:border-[#7C3AED] hover:-translate-y-0.5 transition-all duration-200 shadow-xs flex flex-col justify-between group focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:outline-none"
                >
                  <div className="flex items-center justify-between mb-3 text-[#5C5C5C] group-hover:text-[#7C3AED]">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-semibold text-sm text-[#1A1A1A] block">
                      {item.name}
                    </span>
                    <span className="text-xs text-[#5C5C5C] truncate block font-normal">
                      {item.handle}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Column: Contact Form Card */}
        <div className="p-7 sm:p-9 rounded-2xl bg-white border border-[#E5E4E1] shadow-xs">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight mb-6">
            Envie uma mensagem
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full" noValidate>
            <FormFields register={register} errors={errors} watch={watch} />
            <div className="pt-2">
              <SubmitButton isSubmitting={isSubmitting} isDisabled={!isValid} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

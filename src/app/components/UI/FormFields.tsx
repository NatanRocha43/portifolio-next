"use client";

import { UseFormRegister, FieldErrors, UseFormWatch } from "react-hook-form";
import { ContactFormData } from "../../_types";
import { InputField } from "../UI/InputField";
import { TextareaField } from "../UI/TextareaField";
import { useLanguage } from "../../context/LanguageContext";

type FormFieldsProps = {
  register: UseFormRegister<ContactFormData>;
  errors: FieldErrors<ContactFormData>;
  watch: UseFormWatch<ContactFormData>;
};

export function FormFields({ register, errors, watch }: FormFieldsProps) {
  const { t } = useLanguage();
  const nomeValue = watch("nome");
  const emailValue = watch("email");
  const mensagemValue = watch("mensagem");

  return (
    <div className="flex flex-col gap-4 w-full">
      <InputField
        id="nome"
        label={t.contact.labels.name}
        placeholder={t.contact.placeholders.name}
        error={nomeValue ? errors.nome?.message : undefined}
        isInvalid={!!errors.nome && !!nomeValue}
        isValid={!errors.nome && (nomeValue?.length ?? 0) > 0}
        value={nomeValue}
        {...register("nome")}
        autoComplete="name"
      />

      <InputField
        id="email"
        label={t.contact.labels.email}
        type="email"
        placeholder={t.contact.placeholders.email}
        error={emailValue ? errors.email?.message : undefined}
        isInvalid={!!errors.email && !!emailValue}
        isValid={!errors.email && (emailValue?.length ?? 0) > 0}
        value={emailValue}
        {...register("email")}
        autoComplete="email"
      />

      <TextareaField
        id="mensagem"
        label={t.contact.labels.message}
        placeholder={t.contact.placeholders.message}
        error={mensagemValue ? errors.mensagem?.message : undefined}
        isInvalid={!!errors.mensagem && !!mensagemValue}
        isValid={!errors.mensagem && (mensagemValue?.length ?? 0) > 0}
        value={mensagemValue}
        {...register("mensagem")}
        rows={4}
      />
    </div>
  );
}

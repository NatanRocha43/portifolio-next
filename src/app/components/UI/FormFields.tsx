import { UseFormRegister, FieldErrors, UseFormWatch } from "react-hook-form";
import { ContactFormData } from "../../_types";
import { InputField } from "../UI/InputField";
import { TextareaField } from "../UI/TextareaField";

type FormFieldsProps = {
  register: UseFormRegister<ContactFormData>;
  errors: FieldErrors<ContactFormData>;
  watch: UseFormWatch<ContactFormData>;
};

export function FormFields({ register, errors, watch }: FormFieldsProps) {
  const nomeValue = watch("nome");
  const emailValue = watch("email");
  const mensagemValue = watch("mensagem");

  return (
    <div className="flex flex-col gap-4 w-full">
      <InputField
        id="nome"
        label="Seu Nome"
        placeholder="Como posso te chamar?"
        error={nomeValue ? errors.nome?.message : undefined}
        isInvalid={!!errors.nome && !!nomeValue}
        isValid={!errors.nome && (nomeValue?.length ?? 0) > 0}
        value={nomeValue}
        {...register("nome")}
        autoComplete="name"
      />

      <InputField
        id="email"
        label="Seu E-mail"
        type="email"
        placeholder="exemplo@email.com"
        error={emailValue ? errors.email?.message : undefined}
        isInvalid={!!errors.email && !!emailValue}
        isValid={!errors.email && (emailValue?.length ?? 0) > 0}
        value={emailValue}
        {...register("email")}
        autoComplete="email"
      />

      <TextareaField
        id="mensagem"
        label="Mensagem"
        placeholder="Conte-me sobre o seu projeto ou ideia..."
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

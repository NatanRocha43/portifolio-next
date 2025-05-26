import { UseFormRegister, FieldErrors, UseFormWatch } from "react-hook-form";
import { FormData } from "../sections/Form";

import { InputField } from "../UI/InputField";
import { TextareaField } from "../UI/TextareaField";

type FormFieldsProps = {
    register: UseFormRegister<FormData>;
    errors: FieldErrors<FormData>;
    watch: UseFormWatch<FormData>;
};

export function FormFields({ register, errors, watch }: FormFieldsProps) {
    const nomeValue = watch("nome");
    const emailValue = watch("email");
    const mensagemValue = watch("mensagem");

    return (
        <>
            <InputField
                id="nome"
                label="Nome"
                error={nomeValue ? errors.nome?.message : undefined}
                isInvalid={!!errors.nome && !!nomeValue}
                isValid={!errors.nome && nomeValue?.length > 0}
                value={nomeValue}
                {...register("nome")}
                autoComplete="name"
            />

            <InputField
                id="email"
                label="Email"
                type="email"
                error={emailValue ? errors.email?.message : undefined}
                isInvalid={!!errors.email && !!emailValue}
                isValid={!errors.email && emailValue?.length > 0}
                value={emailValue}
                {...register("email")}
                autoComplete="email"
            />

            <TextareaField
                id="mensagem"
                label="Mensagem"
                error={mensagemValue ? errors.mensagem?.message : undefined}
                isInvalid={!!errors.mensagem && !!mensagemValue}
                isValid={!errors.mensagem && mensagemValue?.length > 0}
                value={mensagemValue}
                {...register("mensagem")}
                rows={4}
            />
        </>
    );
}


'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../_lib/firebase';
import toast from 'react-hot-toast';

import { InputField } from '../UI/InputField';
import { TextareaField } from '../UI/TextareaField';
import { SubmitButton } from '../UI/SubmitButton';

const FormSchema = z.object({
  nome: z.string().min(2, 'Nome muito curto'),
  email: z.string().email('Email inválido'),
  mensagem: z.string().min(5, 'Mensagem muito curta'),
});

type FormData = z.infer<typeof FormSchema>;

export default function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: FormData) => {
    const toastId = toast.loading('Enviando...');

    try {
      await addDoc(collection(db, 'formularios'), {
        ...data,
        criadoEm: new Date(),
      });

      toast.success('Formulário enviado com sucesso!', { id: toastId });
      reset();
    } catch (error) {
      console.error('Erro ao enviar:', error);
      toast.error('Erro ao enviar formulário.', { id: toastId });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4">
      <div aria-labelledby="form-title" className="w-full max-w-md flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <h2
            id="form-title"
            className="text-2xl lg:text-5xl font-extrabold text-white"
          >
            Entre em contato
          </h2>
          <span className="text-sm lg:text-3xl font-extrabold leading-tight bg-gradient-to-r from-[#4FC3F7] to-white bg-clip-text text-transparent">
            Vamos trabalhar juntos
          </span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full" noValidate>
          <InputField
            id="nome"
            label="Nome"
            error={errors.nome?.message}
            {...register('nome')}
            autoComplete="name"
          />

          <InputField
            id="email"
            label="Email"
            type="email"
            error={errors.email?.message}
            {...register('email')}
            autoComplete="email"
          />

          <TextareaField
            id="mensagem"
            label="Mensagem"
            error={errors.mensagem?.message}
            {...register('mensagem')}
            rows={4}
          />

          <SubmitButton isSubmitting={isSubmitting} />
        </form>
      </div>
    </section>
  );
}

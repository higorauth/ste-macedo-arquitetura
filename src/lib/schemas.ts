import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  phone: z
    .string()
    .min(10, "Telefone deve ter pelo menos 10 dígitos")
    .regex(/^[\d\s\-()+ ]+$/, "Formato de telefone inválido"),
  projectType: z.string().min(1, "Selecione o tipo de projeto"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const PROJECT_TYPES = [
  { value: "", label: "Selecione o tipo de projeto" },
  { value: "residencial", label: "Projeto Residencial" },
  { value: "comercial", label: "Projeto Comercial" },
  { value: "interiores", label: "Design de Interiores" },
  { value: "corporativo", label: "Projeto Corporativo" },
  { value: "reforma", label: "Reforma" },
  { value: "consultoria", label: "Consultoria" },
] as const;

import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ingresa tu nombre (mínimo 2 caracteres).")
    .max(80, "El nombre es demasiado largo."),

  email: z
    .string()
    .trim()
    .email("Ingresa un correo válido.")
    .max(120, "El correo es demasiado largo."),

  // ⚠️ NO es opcional
  category: z.enum(["Producto", "Pedido", "Envío", "Otro"]),

  message: z
    .string()
    .trim()
    .min(10, "Cuéntanos un poco más (mínimo 10 caracteres).")
    .max(2000, "El mensaje es demasiado largo."),
});

export type ContactInput = z.infer<typeof contactSchema>;

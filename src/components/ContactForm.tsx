"use client";

import { useState, useMemo } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";

import { contactSchema, type ContactInput } from "@/lib/contact-schema";

export default function ContactForm() {
  const [serverMessage, setServerMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, touchedFields, isValid, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      category: "Producto", // 🔑 CLAVE
      message: "",
    },
  });

  const values = watch();

  const showOk = useMemo(() => {
    return {
      name:
        touchedFields.name &&
        !errors.name &&
        values.name.trim().length >= 2,
      email:
        touchedFields.email &&
        !errors.email,
      message:
        touchedFields.message &&
        !errors.message &&
        values.message.trim().length >= 10,
    };
  }, [touchedFields, errors, values]);

  const onSubmit: SubmitHandler<ContactInput> = async (data) => {
    setServerMessage(null);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

if (!res.ok) {
  const data = await res.json().catch(() => null);
  setServerMessage({
    type: "error",
    text: data?.error ? `Error: ${data.error}` : "No se pudo enviar el mensaje.",
  });
  console.log("CONTACT_API_ERROR_RESPONSE", data);
  return;
}

    reset();
    setServerMessage({
      type: "success",
      text: "Tu mensaje fue enviado con éxito. Te responderemos pronto.",
    });
  };

  return (
    <section id="contacto" className="py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto border border-(--belmar-border) rounded-2xl px-8 py-12">

          <h2 className="text-center font-serif text-3xl mb-2">
            Contáctanos
          </h2>
          <p className="text-center text-sm text-gray-600 mb-8">
            ¿Tienes dudas? Escríbenos y te respondemos pronto.
          </p>

          <AnimatePresence>
            {serverMessage && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className={`mb-6 rounded-md px-4 py-3 text-sm ${
                  serverMessage.type === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {serverMessage.type === "success" ? "✔ " : "✖ "}
                {serverMessage.text}
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            {/* Nombre + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nombre */}
              <div>
                <label className="block text-sm mb-1">Nombre</label>
                <div className="relative">
                  <input
                    {...register("name")}
                    className={`w-full rounded-md border px-4 py-2.5 pr-10 bg-white
                      ${errors.name ? "border-red-300" : "border-(--belmar-border)"}`}
                    placeholder="Tu nombre"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm">
                    {touchedFields.name &&
                      (errors.name ? "✖" : showOk.name ? "✔" : null)}
                  </span>
                </div>
                {errors.name && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm mb-1">Correo electrónico</label>
                <div className="relative">
                  <input
                    {...register("email")}
                    className={`w-full rounded-md border px-4 py-2.5 pr-10 bg-white
                      ${errors.email ? "border-red-300" : "border-(--belmar-border)"}`}
                    placeholder="tucorreo@dominio.com"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm">
                    {touchedFields.email &&
                      (errors.email ? "✖" : showOk.email ? "✔" : null)}
                  </span>
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Categoría */}
            <div>
              <label className="block text-sm mb-1">
                Categoría de consulta
              </label>
              <select
                {...register("category")}
                className="w-full rounded-md border border-(--belmar-border) px-4 py-2.5 bg-white"
              >
                <option value="Producto">Producto</option>
                <option value="Pedido">Pedido</option>
                <option value="Envío">Envío</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            {/* Mensaje */}
            <div>
              <label className="block text-sm mb-1">Mensaje</label>
              <textarea
                {...register("message")}
                rows={5}
                className={`w-full rounded-md border px-4 py-3 bg-white resize-none
                  ${errors.message ? "border-red-300" : "border-(--belmar-border)"}`}
                placeholder="Cuéntanos en qué te ayudamos..."
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-600">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Botón */}
            <motion.button
              whileTap={{ scale: 0.98 }}
              whileHover={{ scale: isValid ? 1.01 : 1 }}
              disabled={!isValid || isSubmitting}
              className={`btn-primary w-full py-3 ${
                (!isValid || isSubmitting) &&
                "opacity-50 cursor-not-allowed"
              }`}
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Mail, Phone, Instagram, Facebook, Clock } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { contactSchema, type ContactFormData, PROJECT_TYPES } from "@/lib/schemas";
import { CONTACT_INFO } from "@/lib/constants";
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form data:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contato" className="bg-white py-28 md:py-36 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title="Vamos conversar sobre o seu projeto?"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          <motion.div
            className="lg:col-span-7"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="relative">
                <input
                  {...register("name")}
                  type="text"
                  placeholder=" "
                  className="floating-input"
                  id="name"
                />
                <label htmlFor="name" className="floating-label">
                  Nome
                </label>
                {errors.name && (
                  <span className="font-outfit text-xs text-red-500 mt-1 block">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className="relative">
                <input
                  {...register("email")}
                  type="email"
                  placeholder=" "
                  className="floating-input"
                  id="email"
                />
                <label htmlFor="email" className="floating-label">
                  E-mail
                </label>
                {errors.email && (
                  <span className="font-outfit text-xs text-red-500 mt-1 block">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="relative">
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder=" "
                  className="floating-input"
                  id="phone"
                />
                <label htmlFor="phone" className="floating-label">
                  Telefone / WhatsApp
                </label>
                {errors.phone && (
                  <span className="font-outfit text-xs text-red-500 mt-1 block">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              <div className="relative">
                <select
                  {...register("projectType")}
                  className="floating-input appearance-none bg-transparent"
                  id="projectType"
                  defaultValue=""
                >
                  {PROJECT_TYPES.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="text-gray-400"
                  >
                    <path
                      d="M3 5L6 8L9 5"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
                {errors.projectType && (
                  <span className="font-outfit text-xs text-red-500 mt-1 block">
                    {errors.projectType.message}
                  </span>
                )}
              </div>

              <div className="relative">
                <textarea
                  {...register("message")}
                  placeholder=" "
                  rows={4}
                  className="floating-input resize-none"
                  id="message"
                />
                <label htmlFor="message" className="floating-label">
                  Mensagem
                </label>
                {errors.message && (
                  <span className="font-outfit text-xs text-red-500 mt-1 block">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <Button type="submit" variant="solid-dark">
                Enviar mensagem
              </Button>

              {isSubmitted && (
                <motion.p
                  className="font-outfit font-light text-sm text-green-600"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </motion.p>
              )}
            </form>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-8">
              <motion.div className="flex items-start gap-4" variants={slideInRight}>
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-outfit font-normal text-sm tracking-wide mb-1">
                    Localização
                  </h4>
                  <p className="font-outfit font-light text-gray-600 text-sm">
                    {CONTACT_INFO.location}
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex items-start gap-4" variants={slideInRight}>
                <Mail className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-outfit font-normal text-sm tracking-wide mb-1">
                    E-mail
                  </h4>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="font-outfit font-light text-gray-600 text-sm hover:text-black transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </motion.div>

              <motion.div className="flex items-start gap-4" variants={slideInRight}>
                <Phone className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-outfit font-normal text-sm tracking-wide mb-1">
                    WhatsApp
                  </h4>
                  <a
                    href={CONTACT_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-outfit font-light text-gray-600 text-sm hover:text-black transition-colors"
                  >
                    {CONTACT_INFO.whatsapp}
                  </a>
                </div>
              </motion.div>

              <motion.div className="flex items-start gap-4" variants={slideInRight}>
                <Clock className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-outfit font-normal text-sm tracking-wide mb-1">
                    Horário
                  </h4>
                  <p className="font-outfit font-light text-gray-600 text-sm">
                    {CONTACT_INFO.hours}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={slideInRight}>
                <div className="border-t border-gray-200 pt-8 mt-8">
                  <h4 className="font-outfit font-normal text-sm tracking-[0.1em] uppercase mb-4">
                    Redes Sociais
                  </h4>
                  <div className="flex items-center gap-6">
                    <a
                      href={CONTACT_INFO.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors group"
                    >
                      <Instagram className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      <span className="font-outfit font-light text-sm">
                        {CONTACT_INFO.instagram.handle}
                      </span>
                    </a>
                    <a
                      href={CONTACT_INFO.facebook.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors group"
                    >
                      <Facebook className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      <span className="font-outfit font-light text-sm">Facebook</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

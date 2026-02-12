"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { STATS, CONTACT_INFO } from "@/lib/constants";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "@/lib/animations";

export function About() {
  return (
    <section id="sobre" className="bg-white py-28 md:py-36 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <motion.div
            className="lg:col-span-6 xl:col-span-7 relative"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative aspect-[4/5] max-h-[600px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80"
                alt="Escritório de arquitetura contemporâneo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-accent/30" />
          </motion.div>

          <motion.div
            className="lg:col-span-6 xl:col-span-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeUp}>
              <SectionTitle
                title="Stephanie Macêdo"
                subtitle="Arquitetura e Design"
                align="left"
              />
            </motion.div>

            <div className="space-y-5">
              <motion.p
                className="font-outfit font-light text-gray-600 leading-relaxed text-[15px]"
                variants={fadeUp}
              >
                Com um olhar atento às tendências contemporâneas e uma paixão por criar
                espaços que dialogam com quem os habita, o escritório Stephanie Macêdo
                Arquitetura e Design nasceu da convicção de que cada projeto é uma
                oportunidade única de transformar ambientes em experiências sensoriais.
              </motion.p>

              <motion.p
                className="font-outfit font-light text-gray-600 leading-relaxed text-[15px]"
                variants={fadeUp}
              >
                Especializada em projetos residenciais e comerciais de linguagem moderna
                e contemporânea, nossa abordagem une funcionalidade, estética e o
                cuidado artesanal com cada detalhe — do conceito inicial à entrega
                final.
              </motion.p>

              <motion.p
                className="font-outfit font-light text-gray-600 leading-relaxed text-[15px]"
                variants={fadeUp}
              >
                Cada traço é pensado para refletir a essência de quem vai viver aquele
                espaço, criando ambientes que são, ao mesmo tempo, atemporais e
                surpreendentes.
              </motion.p>
            </div>

            <motion.p
              className="font-outfit font-light text-xs text-gray-400 mt-8"
              variants={fadeUp}
            >
              CNPJ: {CONTACT_INFO.cnpj}
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pt-16 border-t border-gray-200"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {STATS.map((stat) => (
            <motion.div key={stat.label} variants={slideInRight}>
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

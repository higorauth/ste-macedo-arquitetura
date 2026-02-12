"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Lightbulb,
  PenTool,
  Hammer,
  Home,
} from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PROCESS_STEPS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const iconMap = {
  MessageSquare,
  Lightbulb,
  PenTool,
  Hammer,
  Home,
};

export function Process() {
  return (
    <section className="bg-gray-100 py-28 md:py-36 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title="Nosso Processo"
          subtitle="Como transformamos ideias em espaços"
        />

        <motion.div
          className="relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Desktop: horizontal timeline */}
          <div className="hidden lg:block">
            <div className="relative flex items-start justify-between">
              {/* Connection line */}
              <motion.div
                className="absolute top-8 left-[10%] right-[10%] h-[1px] bg-gray-200"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />

              {PROCESS_STEPS.map((step, index) => {
                const Icon = iconMap[step.icon];
                return (
                  <motion.div
                    key={step.number}
                    className="flex flex-col items-center text-center w-1/5"
                    variants={fadeUp}
                    custom={index}
                  >
                    <div className="relative z-10 w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-6 group hover:border-accent transition-colors duration-300">
                      <Icon className="w-6 h-6 text-gray-600 group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <span className="font-outfit font-light text-[10px] tracking-[0.2em] uppercase text-accent mb-2">
                      Etapa {step.number}
                    </span>
                    <h3 className="font-cormorant font-normal text-xl mb-2">
                      {step.title}
                    </h3>
                    <p className="font-outfit font-light text-sm text-gray-500 leading-relaxed max-w-[180px]">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile/Tablet: vertical timeline */}
          <div className="lg:hidden space-y-0">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <motion.div
                  key={step.number}
                  className="flex gap-6 relative"
                  variants={fadeUp}
                  custom={index}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-gray-600" />
                    </div>
                    {index < PROCESS_STEPS.length - 1 && (
                      <div className="w-[1px] h-full bg-gray-200 my-2" />
                    )}
                  </div>
                  <div className="pb-12">
                    <span className="font-outfit font-light text-[10px] tracking-[0.2em] uppercase text-accent">
                      Etapa {step.number}
                    </span>
                    <h3 className="font-cormorant font-normal text-xl mb-1">
                      {step.title}
                    </h3>
                    <p className="font-outfit font-light text-sm text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

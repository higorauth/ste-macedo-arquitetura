"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/constants";
import { staggerContainer } from "@/lib/animations";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredProjects =
    activeFilter === "Todos"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projetos" className="bg-black py-28 md:py-36 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title="Projetos"
          subtitle="Cada espaço conta uma história"
          color="light"
        />

        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {PROJECT_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`relative font-outfit font-light text-sm tracking-[0.1em] uppercase pb-2 transition-colors duration-300 ${
                activeFilter === category
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {category}
              {activeFilter === category && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-accent"
                  layoutId="projectFilter"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {filteredProjects.map((project, index) => {
              const isLarge = index % 4 === 0 || index % 4 === 3;
              const colSpan = isLarge ? "lg:col-span-7" : "lg:col-span-5";
              return (
                <div key={project.id} className={colSpan}>
                  <ProjectCard
                    title={project.title}
                    category={project.category}
                    area={project.area}
                    image={project.image}
                    index={index}
                    isLarge={isLarge}
                  />
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TestimonialSlider } from "@/components/ui/TestimonialSlider";
import { fadeUp } from "@/lib/animations";

export function Testimonials() {
  return (
    <section className="bg-black py-28 md:py-36 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title="O que dizem nossos clientes"
          color="light"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </section>
  );
}

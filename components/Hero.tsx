"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const skills = [
  {
    title: "HTML & C#",
    desc: "Bases en desarrollo web y lógica de programación orientada a objetos.",
  },
  {
    title: "SQL",
    desc: "Gestión de bases de datos, consultas y estructuración de información.",
  },
  {
    title: "Git & GitHub",
    desc: "Control de versiones, trabajo en equipo y manejo de ramas.",
  },
  {
    title: "Inteligencia Artificial",
    desc: "Aplicación de modelos y conceptos modernos en soluciones tecnológicas.",
  },
];

export default function Hero() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden bg-black px-4">

      {/* FONDO */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-20 blur-3xl animate-pulse" />

      {/* TITULO */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold z-10"
      >
        Hola, soy <span className="text-blue-400">Ing. Mauricio</span>
      </motion.h1>

      {/* SUBTITULO */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-lg text-gray-300 z-10 max-w-xl"
      >
        Desarrollador enfocado en crear soluciones modernas, interactivas y escalables.
      </motion.p>

      {/* BOTONES */}
      <div className="flex gap-4 mt-8 z-10">

        <Link href="/projects">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition"
          >
            Ver proyectos 🚀
          </motion.button>
        </Link>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition"
        >
          Descargar CV
        </motion.button>

      </div>

      {/* TARJETAS GRANDES */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 z-10 max-w-4xl">

        {skills.map((skill, i) => (
          <motion.div
            key={i}
            onClick={() => setActive(active === i ? null : i)}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg transition"
          >
            <h3 className="text-xl font-bold">{skill.title}</h3>

            {/* DESCRIPCIÓN AL HACER CLICK */}
            {active === i && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-3 text-gray-300"
              >
                {skill.desc}
              </motion.p>
            )}
          </motion.div>
        ))}

      </div>

    </section>
  );
}
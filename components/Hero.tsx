"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden bg-black">

      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-20 blur-3xl animate-pulse" />

      {/* CONTENIDO */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold z-10"
      >
        Hola, soy <span className="text-blue-400">Dev</span> 👨‍💻
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-lg md:text-xl text-gray-300 z-10"
      >
        Creo experiencias web modernas con React & Next.js
      </motion.p>

      {/* BOTÓN */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-6 py-3 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition z-10"
      >
        Ver proyectos
      </motion.button>

      {/* TARJETAS DINÁMICAS */}
      <div className="absolute bottom-10 grid grid-cols-2 md:grid-cols-3 gap-4 z-10">

        {["React", "Next.js", "JavaScript", "Tailwind", "Node.js", "UI/UX"].map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.1 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl shadow-lg"
          >
            {tech}
          </motion.div>
        ))}

      </div>
    </section>
  );
}
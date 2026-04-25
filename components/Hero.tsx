"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const skills = [
  {
    title: "HTML",
    desc: "Bases en desarrollo web y lógica de programación.",
  },
  { title: "SQL", desc: "Gestión de bases de datos y consultas avanzadas." },
  {
    title: "Git & GitHub",
    desc: "Control de versiones y trabajo colaborativo.",
  },
  {
    title: "Inteligencia Artificial",
    desc: "Uso de IA en soluciones modernas.",
  },
  { title: "React", desc: "Interfaces dinámicas y reutilizables." },
  { title: "Next.js", desc: "Framework moderno y optimizado." },
  { title: "JavaScript", desc: "Lenguaje base del desarrollo web." },
  { title: "Tailwind CSS", desc: "Diseño moderno y rápido." },

  // 🔥 NUEVAS
  { title: "Docker", desc: "Contenedores para despliegue eficiente." },
  { title: "C#", desc: "Lenguaje robusto para aplicaciones backend." },
  { title: "Blazor", desc: "Desarrollo web moderno con .NET." },
  { title: "CSS", desc: "Estilos avanzados y diseño responsive." },
];

const images = [
  "html.jpg",
  "sql.jpg",
  "git.jpg",
  "ai.jpg",
  "react.jpg",
  "next.jpg",
  "js.jpg",
  "tailwind.jpg",
  "docker.jpg",
  "csharp.jpg",
  "blazor.jpg",
  "css.jpg",
];

export default function Hero() {
  const [active, setActive] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActive(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // 🔥 SIMULACIÓN DESCARGA PRO
  const handleDownload = () => {
    setLoading(true);
    setProgress(0);

    let value = 0;
    const interval = setInterval(() => {
      value += 10;
      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          window.open("/cv/cv-mauricio.pdf", "_blank");
          setLoading(false);
        }, 300);
      }
    }, 150);
  };

  return (
    <section className="min-h-screen flex flex-col items-center text-center px-4">
      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* TITULO */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Hola, soy <span className="text-blue-400">Ing. Mauricio</span>
        </motion.h1>

        {/* SUB */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg text-gray-300 max-w-xl"
        >
          Desarrollo experiencias web modernas, interactivas y profesionales.
        </motion.p>

        {/* BOTONES */}
        <div className="flex gap-4 mt-8 flex-col items-center">
          <div className="flex gap-4">
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600"
              >
                Ver proyectos 🚀
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={handleDownload}
              className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10"
            >
              Descargar CV
            </motion.button>
          </div>

          {/* 🔥 BARRA DE PROGRESO */}
          <AnimatePresence>
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-64 mt-4"
              >
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Descargando... {progress}%
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 🔥 TARJETAS */}
        <div
          ref={containerRef}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative h-[320px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl group cursor-pointer"
              onClick={() => setActive(active === i ? null : i)}
            >
              <div className="absolute inset-0">
                <img
                  src={`/images/${images[i]}`}
                  alt={skill.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="relative z-10 flex flex-col justify-end h-full p-5">
                <h3 className="text-lg font-bold text-white">{skill.title}</h3>

                <AnimatePresence>
                  {active === i && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="text-sm text-gray-300 mt-2 line-clamp-3"
                    >
                      {skill.desc}
                    </motion.p>
                  )}
                </AnimatePresence>

                <div className="mt-3">
                  <span className="text-xs text-blue-400">
                    {active === i ? "Ocultar ↑" : "Ver más →"}
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-blue-500/10 blur-xl" />
            </motion.div>
          ))}
        </div>

        {/* 🔥 STATS */}
        <div className="mt-32 md:mt-40 grid grid-cols-2 md:grid-cols-6 gap-6 max-w-6xl text-center">
          {[
            { number: "1+", label: "Proyectos" },
            { number: "1+", label: "Años" },
            { number: "24/7", label: "Aprendizaje" },
            { number: "⚡", label: "Innovación" },
            { number: "100%", label: "Compromiso" },
            { number: "∞", label: "Creatividad" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, type: "spring", stiffness: 120 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <h2 className="text-3xl font-bold text-blue-400">
                {item.number}
              </h2>
              <p className="text-gray-400 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

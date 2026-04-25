"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Brain, Languages, Car } from "lucide-react";

const experience = [
  {
    title: "Encargado de Sistemas",
    company: "IT DIGITEC",
    date: "2024 - 2025",
    icon: <Briefcase size={20} />,
    desc: [
      "Infraestructura tecnológica y redes LAN/WAN",
      "Cámaras IP y monitoreo",
      "Soporte técnico nivel 1 y 2",
      "Administración de servidores",
    ],
  },
  {
    title: "Soporte Tecnológico",
    company: "Asesorías Tecnológicas",
    date: "2025 - 2026",
    icon: <Briefcase size={20} />,
    desc: [
      "Soporte especializado",
      "Sistemas aduaneros (RJ)",
      "Ministerio de Hacienda",
      "Redes y servidores",
    ],
  },
];

const educacion = [
  {
    title: "Ingeniería en Sistemas",
    place: "Universidad Tecnológica Costarricense",
    date: "2023 - 2025",
    icon: <GraduationCap size={20} />,
  },
  {
    title: "Técnico en Redes",
    place: "C.T.P. Francisco Jose Orlich",
    date: "2019 - 2022",
    icon: <GraduationCap size={20} />,
  },
];

const skills = [
  "Liderazgo",
  "Resolución de problemas",
  "Trabajo en equipo",
  "Trabajo bajo presión",
  "Gestión de activos",
];

const idiomas = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "A2 (Básico)" },
];

export default function AboutPage() {
  return (
    <section className="relative min-h-screen px-6 py-24 text-white overflow-hidden">
      {/* 🔥 FONDO QUE CUBRE TODO (INCLUYE NAVBAR SPACE) */}
      <div className="fixed inset-0 bg-[#020617] z-0" />

      {/* CONTENIDO */}
      <div className="relative z-5">
        {/* TITULO */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold text-center mb-1"
        >
          Mi <span className="text-blue-400">Experiencia</span>
        </motion.h1>

        {/* DESCRIPCIÓN */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center max-w-3xl mx-auto text-gray-400 mb-24"
        >
          Ingeniero en sistemas enfocado en desarrollo web, redes e
          infraestructura, creando soluciones modernas con alto impacto
          tecnológico.
        </motion.p>

        {/* TIMELINE */}
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-1/2 top-0 w-[3px] h-full bg-gradient-to-b from-blue-500 via-purple-500 to-transparent -translate-x-1/2" />

          {[...experience, ...educacion].map((item: any, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className={`mb-24 flex ${isLeft ? "justify-start" : "justify-end"}`}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-full md:w-[45%] p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl group"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-blue-500/10 blur-2xl rounded-2xl" />

                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-blue-400">{item.icon}</div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>

                  <p className="text-sm text-gray-400">
                    {item.company || item.place} • {item.date}
                  </p>

                  {"desc" in item && (
                    <ul className="mt-4 text-gray-300 space-y-2">
                      {item.desc.map((d: string, idx: number) => (
                        <li key={idx}>• {d}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>

                <div className="absolute left-1/2 -translate-x-1/2">
                  <div className="w-6 h-6 rounded-full bg-blue-500 animate-pulse" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* SKILLS */}
        <div className="mt-32 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-400 mb-12 flex justify-center items-center gap-2">
            <Brain /> Habilidades
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.15 }}
                className="px-6 py-3 rounded-full bg-white/5 border border-white/20 backdrop-blur-xl hover:bg-blue-500/20"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        {/* IDIOMAS */}
        <div className="mt-24 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl text-blue-400 mb-6 flex justify-center gap-2 items-center">
            <Languages /> Idiomas
          </h2>

          <div className="space-y-4">
            {idiomas.map((lang, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <p className="text-gray-300">
                  {lang.name} —{" "}
                  <span className="text-blue-400">{lang.level}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* LICENCIAS */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl text-blue-400 mb-6 flex justify-center gap-2 items-center">
            <Car /> Licencias
          </h2>

          <div className="flex justify-center gap-6">
            {["A2", "B1"].map((lic, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2 }}
                className="px-6 py-3 rounded-xl border border-white/20 bg-white/5"
              >
                {lic}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

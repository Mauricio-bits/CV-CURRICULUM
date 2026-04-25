"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Brain, Languages, Car } from "lucide-react";
import { useMemo } from "react";

// ✅ TIPOS (SOLUCIONA TODOS LOS ERRORES)
type ExperienceItem = {
  id: string;
  title: string;
  company: string;
  date: string;
  type: "work";
  desc: string[];
};

type EducationItem = {
  id: string;
  title: string;
  place: string;
  date: string;
  type: "edu";
};

type TimelineItem = ExperienceItem | EducationItem;

// 🔥 ICONOS OPTIMIZADOS
const icons: Record<"work" | "edu", React.ReactNode> = {
  work: <Briefcase size={20} />,
  edu: <GraduationCap size={20} />,
};

// 🔥 DATA
const experience: ExperienceItem[] = [
  {
    id: "exp1",
    title: "Encargado de Sistemas",
    company: "IT DIGITEC",
    date: "2024 - 2025",
    type: "work",
    desc: [
      "Infraestructura tecnológica y redes LAN/WAN",
      "Cámaras IP y monitoreo",
      "Soporte técnico nivel 1 y 2",
      "Administración de servidores",
    ],
  },
  {
    id: "exp2",
    title: "Soporte Tecnológico",
    company: "Asesorías Tecnológicas",
    date: "2025 - 2026",
    type: "work",
    desc: [
      "Soporte especializado",
      "Sistemas aduaneros (RJ)",
      "Ministerio de Hacienda",
      "Redes y servidores",
    ],
  },
];

const educacion: EducationItem[] = [
  {
    id: "edu1",
    title: "Ingeniería en Sistemas",
    place: "Universidad Tecnológica Costarricense",
    date: "2023 - 2025",
    type: "edu",
  },
  {
    id: "edu2",
    title: "Técnico en Redes",
    place: "C.T.P. Francisco Jose Orlich",
    date: "2019 - 2022",
    type: "edu",
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
  { id: "lang1", name: "Español", level: "Nativo" },
  { id: "lang2", name: "Inglés", level: "A2 (Básico)" },
];

export default function AboutPage() {
  // 🔥 MEMO (NO recrea array)
  const timeline = useMemo<TimelineItem[]>(
    () => [...experience, ...educacion],
    [],
  );

  return (
    <section className="relative min-h-screen px-6 py-24 text-white overflow-hidden">
      {/* FONDO */}
      <div className="fixed inset-0 bg-[#020617] z-0" />

      <div className="relative z-5">
        {/* TITULO */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-center mb-1"
        >
          Mi <span className="text-blue-400">Experiencia</span>
        </motion.h1>

        {/* DESCRIPCIÓN */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto text-gray-400 mb-24"
        >
          Ingeniero en sistemas enfocado en desarrollo web, redes e
          infraestructura.
        </motion.p>

        {/* TIMELINE */}
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-1/2 top-0 w-[3px] h-full bg-gradient-to-b from-blue-500 via-purple-500 to-transparent -translate-x-1/2" />

          {timeline.map((item: TimelineItem, i: number) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} // 🔥 evita loops de animación
                transition={{ duration: 0.5 }}
                className={`mb-24 flex ${isLeft ? "justify-start" : "justify-end"}`}
              >
                <div className="relative w-full md:w-[45%] p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl group">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-blue-500/10 blur-2xl rounded-2xl" />

                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-blue-400">{icons[item.type]}</div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>

                  <p className="text-sm text-gray-400">
                    {"company" in item ? item.company : item.place} •{" "}
                    {item.date}
                  </p>

                  {"desc" in item && (
                    <ul className="mt-4 text-gray-300 space-y-2">
                      {item.desc.map((d: string, idx: number) => (
                        <li key={idx}>• {d}</li>
                      ))}
                    </ul>
                  )}
                </div>

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
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-6 py-3 rounded-full bg-white/5 border border-white/20 backdrop-blur-xl hover:bg-blue-500/20 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* IDIOMAS */}
        <div className="mt-24 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl text-blue-400 mb-6 flex justify-center gap-2 items-center">
            <Languages /> Idiomas
          </h2>

          <div className="space-y-4">
            {idiomas.map((lang) => (
              <div
                key={lang.id}
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
            {["A2", "B1"].map((lic) => (
              <div
                key={lic}
                className="px-6 py-3 rounded-xl border border-white/20 bg-white/5 hover:scale-110 transition"
              >
                {lic}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

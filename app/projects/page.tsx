"use client";

import { motion } from "framer-motion";

const tech = [
  "ASP.NET Core API",
  "Blazor Server",
  "MySQL",
  "Docker",
  "Ubuntu Server",
  "Swagger",
  "Postman",
  "GitHub",
];

export default function ProjectsPage() {
  return (
    <section className="relative min-h-screen px-6 py-10 text-white overflow-hidden">
      {/* 🔥 MISMO FONDO QUE ABOUT */}
      <div className="fixed inset-0 bg-[#020617] -z-1" />

      <div className="max-w-6xl mx-auto">
        {/* 🔥 HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-15"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            Proyecto <span className="text-blue-400">.NET</span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Desarrollo completo de sistema empresarial enfocado en control de
            inventarios con arquitectura moderna.
          </p>
        </motion.div>

        {/* 🔥 GRID PRINCIPAL */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* 🔥 LADO IZQUIERDO (INFO PRINCIPAL) */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="brutal-box p-6">
              <h2 className="text-3xl font-bold mb-2">
                📦 Sistema de Inventario
              </h2>
              <p className="text-gray-400 text-sm mb-4">
                Universidad Tecnológica Costarricense — 2025
              </p>

              <p className="text-gray-300 leading-relaxed">
                Sistema web diseñado para la gestión empresarial de inventarios,
                controlando productos, movimientos y usuarios en tiempo real.
                Implementa arquitectura basada en API REST y separación de
                capas.
              </p>
            </div>

            {/* 🔥 ROL */}
            <div className="brutal-box p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-2">👨‍💻 Rol</h3>
              <p className="text-gray-300">
                Full Stack Developer — desarrollo completo del backend,
                frontend, base de datos y despliegue.
              </p>
            </div>
          </motion.div>

          {/* 🔥 LADO DERECHO (TEC + FEATURES) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* TECNOLOGÍAS */}
            <div className="brutal-box p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">
                ⚙️ Tecnologías
              </h3>

              <div className="flex flex-wrap gap-3">
                {tech.map((t, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="tag-brutal"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* FUNCIONALIDADES */}
            <div className="brutal-box p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">
                🚀 Funcionalidades
              </h3>

              <ul className="space-y-2 text-gray-300">
                <li>• Gestión de productos</li>
                <li>• Control de stock</li>
                <li>• API documentada (Swagger)</li>
                <li>• Testing con Postman</li>
                <li>• Deploy con Docker en Ubuntu</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* 🔥 SECCIÓN EXTRA (IMPACTO VISUAL) */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 text-center brutal-box p-10"
        >
          <h3 className="text-3xl font-bold mb-4">⚡ Arquitectura Moderna</h3>

          <p className="text-gray-400 max-w-3xl mx-auto">
            Implementación basada en servicios desacoplados utilizando API REST,
            permitiendo escalabilidad, mantenimiento sencillo y despliegue en
            contenedores.
          </p>
        </motion.div>
      </div>

      {/* 🔥 ESTILOS */}
      <style jsx>{`
        .brutal-box {
          background: #0b1220;
          border: 3px solid white;
          box-shadow: 8px 8px 0 #3b82f6;
          transition: all 0.2s ease;
        }

        .brutal-box:hover {
          transform: translate(-4px, -4px);
          box-shadow: 12px 12px 0 #60a5fa;
        }

        .tag-brutal {
          padding: 8px 14px;
          border: 2px solid #3b82f6;
          font-size: 0.85rem;
          box-shadow: 3px 3px 0 #3b82f6;
        }

        .btn-brutal {
          padding: 10px 20px;
          border: 2px solid white;
          box-shadow: 4px 4px 0 white;
          cursor: pointer;
        }

        .btn-brutal:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 #3b82f6;
        }

        .btn-brutal-alt {
          padding: 10px 20px;
          border: 2px solid #3b82f6;
          box-shadow: 4px 4px 0 #3b82f6;
          cursor: pointer;
        }

        .btn-brutal-alt:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 white;
        }
      `}</style>
    </section>
  );
}

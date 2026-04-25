"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // 🔥 OPTIMIZADO: no se recrea en cada render
  const sendWhatsApp = useCallback(() => {
    if (!name || !email || !message) {
      setError("⚠️ Todos los campos son obligatorios");
      return;
    }

    setError("");

    const phone = "50687887930";

    // 🔥 encodeURIComponent evita problemas y mejora rendimiento del navegador
    const text = encodeURIComponent(
      `Hola Mauricio, soy ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    );

    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  }, [name, email, message]);

  return (
    <section className="relative min-h-screen py-10 px-6 text-white overflow-hidden">
      <div className="fixed inset-0 bg-[#020617] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }} // 🔥 agregado
          >
            <h2 className="text-4xl font-bold mb-6">
              Contactame <span className="text-amber-500">!</span>
            </h2>

            <p className="text-lg text-gray-400 mb-8">
              ¿Tienes un proyecto o quieres trabajar conmigo? Escríbeme
              directamente y te responderé lo antes posible.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-amber-500">📍</div>
                <div>
                  <h3 className="font-bold">Ubicación</h3>
                  <p className="text-gray-400">Sarchí, Alajuela, Costa Rica</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-amber-500">📞</div>
                <div>
                  <h3 className="font-bold">Teléfono</h3>
                  <p className="text-gray-400">8788-7930</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-amber-500">✉️</div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-400">mauriciobarboza822@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }} // 🔥 agregado
            className="bg-gray-800 p-8 rounded-xl border border-white/10 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">Enviar Mensaje</h3>

            <div className="space-y-6">
              {error && (
                <p className="text-red-400 text-sm font-semibold">{error}</p>
              )}

              {/* NOMBRE */}
              <div>
                <label className="block text-sm mb-1">Nombre</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  className={`w-full px-4 py-3 rounded-lg bg-gray-700 border ${
                    !name && error ? "border-red-500" : "border-gray-600"
                  } focus:ring-2 focus:ring-blue-500 outline-none`}
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm mb-1">Correo</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu email"
                  className={`w-full px-4 py-3 rounded-lg bg-gray-700 border ${
                    !email && error ? "border-red-500" : "border-gray-600"
                  } focus:ring-2 focus:ring-blue-500 outline-none`}
                />
              </div>

              {/* MENSAJE */}
              <div>
                <label className="block text-sm mb-1">Mensaje</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  className={`w-full px-4 py-3 rounded-lg bg-gray-700 border ${
                    !message && error ? "border-red-500" : "border-gray-600"
                  } focus:ring-2 focus:ring-blue-500 outline-none`}
                />
              </div>

              {/* BOTÓN */}
              <button
                onClick={sendWhatsApp}
                className="w-full bg-blue-500 hover:bg-blue-600 text-black font-bold py-3 rounded-lg transition transform hover:scale-105"
              >
                Enviar por WhatsApp 🚀
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

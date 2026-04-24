"use client";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-4">
        Hola, soy desarrollador 👨‍💻
      </h1>

      <p className="text-lg mb-6">
        Especializado en React, Next.js y JavaScript
      </p>

      <button className="bg-white text-black px-6 py-2 rounded-full hover:scale-110 transition">
        Ver proyectos
      </button>
    </section>
  );
}
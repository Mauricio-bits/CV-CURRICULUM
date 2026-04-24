"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");

  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold mb-4">Contacto</h1>

      <input
        className="border p-2 mb-4 w-full"
        placeholder="Tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Enviar
      </button>
    </section>
  );
}
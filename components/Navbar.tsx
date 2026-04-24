"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <h1 className="font-bold text-xl">Mi CV</h1>

      <div className="flex gap-4">
        <Link href="/">Inicio</Link>
        <Link href="/about">Sobre mí</Link>
        <Link href="/projects">Proyectos</Link>
        <Link href="/contact">Contacto</Link>
      </div>
    </nav>
  );
}
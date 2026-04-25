"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useMemo } from "react";

// 🔥 FUERA DEL COMPONENTE
const links = [
  { name: "Inicio", path: "/" },
  { name: "Habilidades", path: "/about" },
  { name: "Proyectos", path: "/projects" },
  { name: "Contacto", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  // 🔥 MEMO para evitar cálculos repetidos
  const navLinks = useMemo(() => links, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-white">
        {/* LOGO */}
        <h1 className="text-xl font-bold tracking-widest cursor-pointer hover:scale-105 transition">
          <span className="text-blue-400">⚡</span> MAURO.DEV
        </h1>

        {/* LINKS */}
        <div className="flex gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link key={link.path} href={link.path} className="relative group">
                <span className="text-sm uppercase tracking-wider group-hover:text-blue-400 transition">
                  {link.name}
                </span>

                {/* 🔥 OPTIMIZADO */}
                <motion.div
                  className="absolute left-0 -bottom-1 h-[2px] bg-blue-400"
                  initial={false} // 🔥 evita animación inicial innecesaria
                  animate={{ width: isActive ? "100%" : "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }} // 🔥 más ligero
                />

                {/* GLOW */}
                {isActive && (
                  <div className="absolute inset-0 blur-md bg-blue-500/20 -z-10 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

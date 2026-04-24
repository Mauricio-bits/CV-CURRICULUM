"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { name: "Inicio", path: "/" },
  { name: "Sobre mí", path: "/about" },
  { name: "Proyectos", path: "/projects" },
  { name: "Contacto", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 text-white">

        {/* LOGO */}
        <h1 className="text-xl font-bold tracking-widest">
          DEV<span className="text-blue-400">.CV</span>
        </h1>

        {/* LINKS */}
        <div className="flex gap-6">
          {links.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link key={link.path} href={link.path} className="relative group">
                <span className="hover:text-blue-400 transition">
                  {link.name}
                </span>

                {/* underline animado */}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-400"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
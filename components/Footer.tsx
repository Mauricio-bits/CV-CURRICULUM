"use client";

import { useMemo } from "react";

export default function Footer() {
  // 🔥 Se calcula una sola vez
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="mt-40 bg-gray-900/80 backdrop-blur-md border-t border-white/10 text-center py-8">
      <p className="text-gray-400 text-sm tracking-wide">
        © {year} Ing. Mauricio — Portafolio Web
      </p>
    </footer>
  );
}

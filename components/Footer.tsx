"use client";

export default function Footer() {
  return (
    <footer className="mt-40 bg-gray-900/80 backdrop-blur-md border-t border-white/10 text-center py-8">
      <p className="text-gray-400 text-sm tracking-wide">
        © {new Date().getFullYear()} Ing. Mauricio — Portafolio Web
      </p>
    </footer>
  );
}

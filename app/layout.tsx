import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { memo } from "react";

// 🔥 Evita re-render innecesario
const MemoNavbar = memo(Navbar);
const MemoFooter = memo(Footer);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-black text-white">
        {/* 🔥 FONDO OPTIMIZADO */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-30" />

        <MemoNavbar />

        {/* CONTENIDO */}
        <main className="pt-30">{children}</main>

        <MemoFooter />
      </body>
    </html>
  );
}

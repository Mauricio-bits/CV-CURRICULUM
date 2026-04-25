import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-black text-white">
        {/* FONDO */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-30" />

        <Navbar />

        {/* 👇 ESPACIO PARA NAVBAR */}
        <main className="pt-30">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

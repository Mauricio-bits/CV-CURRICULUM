import "./globals.css";
import Navbar from "../components/Navbar";

// Añadimos la definición de tipo para children
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
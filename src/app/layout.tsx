import "./globals.css"; // ✅ IMPORTANTE: activa Tailwind y estilos globales
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Belmar – Aceite de Jojoba Natural",
  description:
    "Aceite de jojoba 100% puro para el cuidado natural de tu piel y cabello.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={playfair.variable}>
      <body className="font-sans bg-belmar-bg text-belmar-ink">
        <Header />
        <main className="flex flex-col">{children}</main>
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  );
}

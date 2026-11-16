"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-(--belmar-bg) border-b border-(--belmar-border)">
      <div className="container h-16 flex items-center justify-between">
        {/* Logo */}
   <Link href="/" className="font-serif text-2xl tracking-wide">
  Belmar
</Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="/#beneficios" className="hover:text-(--belmar-btn)">
            Beneficios
          </a>
          <a href="/#como-usarlo" className="hover:text-(--belmar-btn)">
            Cómo usarlo
          </a>
          <a href="/#ingredientes" className="hover:text-(--belmar-btn)">
            Ingredientes
          </a>
          <a href="/#contacto" className="hover:text-(--belmar-btn)">
            Contacto
          </a>

          {/* BOTÓN UNIFICADO */}
        <a
  href="https://wa.me/34615350156?text=Hola%20quiero%20comprar%20el%20Aceite%20de%20Jojoba%20Belmar"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary"
>
  Comprar
</a>
        </nav>

        {/* Botón menú móvil */}
        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden border-t border-(--belmar-border) bg-(--belmar-bg)">
          <nav className="flex flex-col px-4 py-4 gap-4 text-sm">
            <a href="#beneficios" onClick={() => setOpen(false)}>
              Beneficios
            </a>
            <a href="#como-usarlo" onClick={() => setOpen(false)}>
              Cómo usarlo
            </a>
            <a href="#ingredientes" onClick={() => setOpen(false)}>
              Ingredientes
            </a>
            <a href="#contacto" onClick={() => setOpen(false)}>
              Contacto
            </a>

            {/* BOTÓN MOBILE */}
              <a
      href="https://wa.me/34615350156?text=Hola%20quiero%20comprar%20el%20Aceite%20de%20Jojoba%20Belmar"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary"
    >
      Comprar
      </a>
          </nav>
        </div>
      )}
    </header>
  );
}

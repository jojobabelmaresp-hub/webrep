"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      <div className="relative min-h-[100svh] md:h-[920px]">

        {/* Imagen responsive */}
        <picture>
          <source media="(max-width: 768px)" srcSet="/images/hero-mobile.jpg" />
          <img
            src="/images/hero-desktop.jpg"
            alt="Aceite de Jojoba Belmar"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </picture>

        <div className="absolute inset-0 bg-black/5" />

        {/* ================= MOBILE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            md:hidden
            absolute
            bottom-0
            left-4
            right-4
          "
        >
          <div
            className="
              bg-gradient-to-r
              from-[#f6f0e8]/90
              via-[#f6f0e8]/85
              to-[#f6f0e8]/95
              backdrop-blur-xl
              rounded-[30px]
              p-3
              shadow-[0_25px_60px_rgba(0,0,0,0.25)]
            "
          >
            <p className="text-xs text-neutral-500 tracking-wide">
              Aceite de Jojoba Belmar
            </p>

            <h1 className="mt-2 text-[20px] leading-[1.15] font-serif text-[#2e2a26]">
              Hidratación ligera.
              <br />
              Brillo natural.
            </h1>

            <p className="mt-2 text-neutral-600 text-[14px] leading-relaxed">
              Aceite de jojoba 100% natural para equilibrar la piel,
              suavizar el cabello y realzar tu brillo sin efecto pesado.
            </p>

            <div className="mt-2 flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-white/70 rounded-full text-[11px] text-neutral-700">
                Piel luminosa
              </span>
              <span className="px-3 py-1.5 bg-white/70 rounded-full text-[11px] text-neutral-700">
                Cabello sedoso
              </span>
              <span className="px-3 py-1.5 bg-white/70 rounded-full text-[11px] text-neutral-700">
                Control del frizz
              </span>
            </div>

            <button
              className="
                mt-2
                w-full
                bg-[#6b7f3e]
                hover:bg-[#5f7238]
                text-white
                py-1.0
                rounded-2xl
                font-semibold
                text-base
                shadow-[0_5px_0_rgba(0,0,0,0.25)]
                active:translate-y-[2px]
                transition
              "
            >
              Quiero mi jojoba
            </button>
          </div>
        </motion.div>

        {/* ================= DESKTOP ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            hidden md:block
            absolute
            right-20
            top-1/2
            -translate-y-[60%]
            max-w-xl
          "
        >
          <div
            className="
              bg-gradient-to-r
              from-[#f6f0e8]/90
              via-[#f6f0e8]/85
              to-[#f6f0e8]/95
              backdrop-blur-xl
              rounded-[36px]
              p-12
              shadow-[0_30px_80px_rgba(0,0,0,0.25)]
            "
          >
            <p className="text-sm text-neutral-500 tracking-wide">
              Aceite de Jojoba Belmar
            </p>

            <h1 className="mt-6 text-[64px] leading-[1.1] font-serif text-[#2e2a26]">
              Hidratación ligera.
              <br />
              Brillo natural.
            </h1>

            <p className="mt-6 text-neutral-600 text-lg leading-relaxed">
              Aceite de jojoba 100% natural para equilibrar la piel,
              suavizar el cabello y realzar tu brillo sin efecto pesado.
            </p>

            <div className="mt-8 flex gap-3 flex-wrap">
              <span className="px-5 py-2 bg-white/70 rounded-full text-sm text-neutral-700">
                Piel luminosa
              </span>
              <span className="px-5 py-2 bg-white/70 rounded-full text-sm text-neutral-700">
                Cabello sedoso
              </span>
              <span className="px-5 py-2 bg-white/70 rounded-full text-sm text-neutral-700">
                Control del frizz
              </span>
            </div>

            <button
              className="
                mt-10
                bg-[#6b7f3e]
                hover:bg-[#5f7238]
                text-white
                px-10
                py-4
                rounded-2xl
                font-semibold
                text-lg
                shadow-[0_6px_0_rgba(0,0,0,0.3)]
                active:translate-y-[2px]
                transition
              "
            >
              Quiero mi jojoba
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
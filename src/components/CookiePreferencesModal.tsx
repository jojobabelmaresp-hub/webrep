// /components/CookiePreferencesModal.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import {
  defaultFunctionalOnly,
  getConsent,
  saveConsent,
  loadTrackingScripts,
  ConsentCategories,
} from "@/utils/cookieUtils";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CookiePreferencesModal({ open, onClose }: Props) {
  const [categories, setCategories] = useState<ConsentCategories>(defaultFunctionalOnly());
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const firstFocusable = useRef<HTMLButtonElement | null>(null);
  const lastFocusable = useRef<HTMLButtonElement | null>(null);

  // Cargar estado guardado si existe
  useEffect(() => {
    const current = getConsent();
    if (current) {
      setCategories(current.categories);
    }
  }, [open]);

  // Accesibilidad: trap de foco + cerrar con Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "Escape") onClose();

      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, textarea, input[type="checkbox"], input[type="radio"], select, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (document.activeElement === last && !e.shiftKey) {
          e.preventDefault();
          (first as HTMLElement).focus();
        } else if (document.activeElement === first && e.shiftKey) {
          e.preventDefault();
          (last as HTMLElement).focus();
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const handleToggle = (key: "analytics" | "marketing") => {
    setCategories((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    // Técnicas SIEMPRE activas y no editables
    const normalized: ConsentCategories = {
      functional: true,
      analytics: categories.analytics,
      marketing: categories.marketing,
    };
    saveConsent(normalized);
    loadTrackingScripts(); // si procede, inyectará GTM
    onClose();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-black/40"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-pref-title"
      ref={dialogRef}
    >
      <div className="w-full md:max-w-lg bg-white text-belmar-ink rounded-2xl shadow-soft p-6 md:p-7">
        <h2 id="cookie-pref-title" className="text-xl font-semibold">Preferencias de cookies</h2>
        <p className="mt-2 text-sm text-belmar-muted">
          Gestiona qué categorías de cookies permites. Las cookies funcionales son necesarias y siempre están activas.
        </p>

        <div className="mt-5 space-y-4">
          {/* Funcionales */}
          <div className="flex items-start justify-between gap-4 border border-belmar-line rounded-lg p-4">
            <div>
              <h3 className="font-medium">Funcionales (necesarias)</h3>
              <p className="text-sm text-belmar-muted">
                Requeridas para el funcionamiento básico del sitio. No almacenan información personal identificable.
              </p>
            </div>
            <label className="inline-flex items-center gap-3">
              <input
                type="checkbox"
                checked
                disabled
                className="h-5 w-5 accent-gray-700"
                aria-label="Cookies funcionales activadas"
              />
            </label>
          </div>

          {/* Analíticas */}
          <div className="flex items-start justify-between gap-4 border border-belmar-line rounded-lg p-4">
            <div>
              <h3 className="font-medium">Analíticas</h3>
              <p className="text-sm text-belmar-muted">
                Ayudan a entender cómo interactúan los usuarios para mejorar la experiencia (ej. Google Analytics).
              </p>
            </div>
            <label className="inline-flex items-center gap-3">
              <input
                type="checkbox"
                checked={categories.analytics}
                onChange={() => handleToggle("analytics")}
                className="h-5 w-5 accent-gray-700"
                aria-label="Permitir cookies analíticas"
              />
            </label>
          </div>

          {/* Marketing */}
          <div className="flex items-start justify-between gap-4 border border-belmar-line rounded-lg p-4">
            <div>
              <h3 className="font-medium">Marketing</h3>
              <p className="text-sm text-belmar-muted">
                Se usan para personalización de anuncios y medir campañas (ej. Meta Pixel).
              </p>
            </div>
            <label className="inline-flex items-center gap-3">
              <input
                type="checkbox"
                checked={categories.marketing}
                onChange={() => handleToggle("marketing")}
                className="h-5 w-5 accent-gray-700"
                aria-label="Permitir cookies de marketing"
              />
            </label>
          </div>
        </div>

        <div className="mt-6 flex flex-col md:flex-row gap-3 md:justify-end">
          <button
            ref={firstFocusable}
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            ref={lastFocusable}
            className="px-4 py-2 rounded-lg bg-belmar-olive hover:bg-belmar-oliveDark text-white font-semibold"
          >
            Guardar preferencias
          </button>
        </div>
      </div>
    </div>
  );
}

// /components/CookieConsentBanner.tsx
"use client";

import { useEffect, useState } from "react";
import CookiePreferencesModal from "@/components/CookiePreferencesModal";
import {
  allGranted,
  allRejected,
  defaultFunctionalOnly,
  getConsent,
  hasUserDecided,
  saveConsent,
  loadTrackingScripts,
} from "@/utils/cookieUtils";

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [openPrefs, setOpenPrefs] = useState(false);

  useEffect(() => {
    // Mostrar solo si el usuario aún no decidió
    setShowBanner(!hasUserDecided());
  }, []);

  // Si el usuario ya decidió y en su decisión permite algo, cargar scripts
  useEffect(() => {
    const c = getConsent();
    if (c && (c.categories.analytics || c.categories.marketing)) {
      loadTrackingScripts();
    }
  }, []);

  const acceptAll = () => {
    saveConsent(allGranted());
    loadTrackingScripts(); // ahora sí, con consentimiento
    setShowBanner(false);
  };

  const rejectAll = () => {
    saveConsent(allRejected());
    setShowBanner(false);
  };

  const openConfigure = () => {
    setOpenPrefs(true);
  };

  const onClosePrefs = () => {
    setOpenPrefs(false);
    // Si el usuario guardó desde el modal, el banner puede ocultarse
    if (getConsent()) setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Banner fijo inferior */}
      <div className="fixed bottom-0 left-0 right-0 z-[90]">
        <div className="mx-auto w-full md:max-w-4xl rounded-t-2xl bg-[#f8f8f8] text-belmar-ink shadow-soft border-t border-belmar-line p-4 md:p-5">
          <p className="text-sm md:text-base">
            <strong>Belmar</strong> utiliza cookies propias y de terceros para fines técnicos, analíticos y de marketing. 
            Puedes aceptar todas, rechazarlas o configurar tus preferencias. Para más información, consulta nuestra{" "}
            <a href="/cookies" className="underline">Política de Cookies</a>.
          </p>

          <div className="mt-4 flex flex-col md:flex-row gap-3 md:justify-end">
            <button
              onClick={rejectAll}
              className="px-4 py-2 rounded-lg bg-black text-white hover:opacity-90"
            >
              Rechazar todas
            </button>
            <button
              onClick={openConfigure}
              className="px-4 py-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50"
            >
              Configurar cookies
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 rounded-lg bg-[#657e45] hover:bg-[#546a3a] text-white font-semibold"
            >
              Aceptar todas
            </button>
          </div>
        </div>
      </div>

      {/* Modal de preferencias */}
      <CookiePreferencesModal open={openPrefs} onClose={onClosePrefs} />
    </>
  );
}

// /utils/cookieUtils.ts
export type ConsentCategories = {
  functional: boolean;   // Técnicas (siempre true, no editable)
  analytics: boolean;    // Analíticas
  marketing: boolean;    // Marketing/Publicidad
};

export type ConsentRecord = {
  categories: ConsentCategories;
  decidedAt: string; // ISO date
};

const STORAGE_KEY = "cookieConsent";

export function getConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentRecord;
  } catch {
    return null;
  }
}

export function hasUserDecided(): boolean {
  return !!getConsent();
}

export function saveConsent(categories: ConsentCategories) {
  if (typeof window === "undefined") return;
  const record: ConsentRecord = {
    categories,
    decidedAt: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(record));

  // Exponer estado global simple para integraciones (GTM u otros)
  (window as any).consentState = categories;
  (window as any).consentGiven = !!(categories.analytics || categories.marketing);

  // Disparar evento de cambio de consentimiento para quien lo escuche
  window.dispatchEvent(new CustomEvent("consentchange", { detail: categories }));
}

export function clearConsent() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

// Helpers
export function defaultFunctionalOnly(): ConsentCategories {
  return { functional: true, analytics: false, marketing: false };
}

export function allGranted(): ConsentCategories {
  return { functional: true, analytics: true, marketing: true };
}

export function allRejected(): ConsentCategories {
  return { functional: true, analytics: false, marketing: false };
}

export function shouldLoadAnalytics() {
  const c = getConsent();
  return !!c?.categories.analytics;
}

export function shouldLoadMarketing() {
  const c = getConsent();
  return !!c?.categories.marketing;
}

/**
 * Carga scripts de tracking (p.ej., Google Tag Manager) SOLO si hay consentimiento explícito.
 * No se cargará nada de analítica/marketing hasta que analytics/marketing === true.
 */
export function loadTrackingScripts() {
  if (typeof window === "undefined") return;
  const consent = getConsent();
  if (!consent) return;

  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  if (!gtmId) return; // Si no hay ID, no intentamos cargar

  const allowAnalytics = consent.categories.analytics;
  const allowMarketing = consent.categories.marketing;

  // Si NO hay categorías no técnicas permitidas, no inyectar GTM
  if (!allowAnalytics && !allowMarketing) return;

  // Evitar doble inyección
  if (document.getElementById("gtm-script")) return;

  // Inicializar dataLayer con tu estado (opcional)
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({ event: "consent_initialized", consent: consent.categories });

  // Inyectar GTM (no se ejecutó antes del consentimiento)
  const s = document.createElement("script");
  s.id = "gtm-script";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.appendChild(s);

  // (Opcional) insertar el iframe noscript si usas <noscript> en <body>
  const nsId = "gtm-noscript";
  if (!document.getElementById(nsId)) {
    const noscript = document.createElement("noscript");
    noscript.id = nsId;
    noscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
              height="0" width="0"
              style="display:none;visibility:hidden"></iframe>`;
    document.body.appendChild(noscript);
  }
}

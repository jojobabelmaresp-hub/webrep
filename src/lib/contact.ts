export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateContact(payload: Partial<ContactPayload>) {
  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const message = String(payload.message ?? "").trim();

  if (!name) return { ok: false as const, error: "El nombre es requerido." };
  if (!email) return { ok: false as const, error: "El email es requerido." };
  if (!isValidEmail(email))
    return { ok: false as const, error: "Email inválido." };
  if (!message)
    return { ok: false as const, error: "El mensaje es requerido." };
  if (message.length < 10)
    return { ok: false as const, error: "El mensaje es muy corto." };

  return { ok: true as const, data: { name, email, message } };
}

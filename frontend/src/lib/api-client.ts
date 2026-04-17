const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:8000";

// ── Tipos compartidos ─────────────────────────────────────────────────────────

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export interface ChatRequest {
  message: string;
  session_id?: string | null;
  history?: Message[];
}

export interface SourceDocument {
  content: string;
  metadata: Record<string, unknown>;
}

export interface ChatResponse {
  reply: string;
  session_id: string;
  sources: SourceDocument[];
  tool_used: string | null;
}

export interface ContactRequest {
  name: string;
  email: string;
  message: string;
  phone?: string | null;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

async function post<TBody, TResponse>(
  path: string,
  body: TBody
): Promise<TResponse> {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => res.statusText);
    throw new Error(`Error ${res.status}: ${detail}`);
  }

  return res.json() as Promise<TResponse>;
}

// ── API pública ───────────────────────────────────────────────────────────────

export function sendChatMessage(payload: ChatRequest): Promise<ChatResponse> {
  return post<ChatRequest, ChatResponse>("/api/v1/chat", payload);
}

export function sendContact(payload: ContactRequest): Promise<ContactResponse> {
  return post<ContactRequest, ContactResponse>("/api/v1/contact", payload);
}

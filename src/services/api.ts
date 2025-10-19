import { Platform } from 'react-native';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
export let BASE_URL = 'http://localhost/codeall-api/public/index.php';
export function setBaseUrl(url: string) { BASE_URL = url.replace(/\/$/, ''); }
let DEFAULT_BASE_URL = BASE_URL;
let AUTH_TOKEN: string | null = null;
let REFRESH_TOKEN: string | null = null;

export function setAuthToken(token: string | null) { AUTH_TOKEN = token || null; }
export function setRefreshToken(token: string | null) { REFRESH_TOKEN = token || null; }
export function getAuthToken() { return AUTH_TOKEN; }
export function getRefreshToken() { return REFRESH_TOKEN; }

function resolveHostFromExpo(): string | null {
  // Try various Expo fields to get the dev server host (e.g., 192.168.x.x)
  const hostUri = (Constants as any)?.expoConfig?.hostUri || (Constants as any)?.manifest?.debuggerHost || '';
  if (typeof hostUri === 'string' && hostUri.length > 0) {
    const host = hostUri.split(':')[0];
    if (host && host !== 'localhost') return host;
  }
  return null;
}

// Auto-adjust BASE_URL based on platform and Expo environment and set DEFAULT_BASE_URL
(() => {
  // 1) Se app.json tiver extra.apiBase, usa ele (mais confiável)
  const extra: any = (Constants as any)?.expoConfig?.extra || (Constants as any)?.manifest?.extra || {};
  if (extra?.apiBase && typeof extra.apiBase === 'string') {
    BASE_URL = extra.apiBase.replace(/\/$/, '');
    DEFAULT_BASE_URL = BASE_URL;
    try { console.log('[API] BASE_URL (extra):', BASE_URL); } catch {}
    return;
  }

  const host = resolveHostFromExpo();
  if (host) {
    BASE_URL = `http://${host}/codeall-api/public/index.php`;
    DEFAULT_BASE_URL = BASE_URL;
    try { console.log('[API] BASE_URL:', BASE_URL); } catch {}
    return;
  }
  if (Platform.OS === 'android') {
    // Android Emulator maps host loopback to 10.0.2.2
    BASE_URL = 'http://10.0.2.2/codeall-api/public/index.php';
  } else if (Platform.OS === 'ios') {
    BASE_URL = 'http://localhost/codeall-api/public/index.php';
  }
  DEFAULT_BASE_URL = BASE_URL;
  try { console.log('[API] BASE_URL:', BASE_URL); } catch {}
})();

// Persistência local da BASE_URL (override opcional)
const STORAGE_KEY_API_BASE = '@codeall:apiBase';

export async function salvarApiBaseLocal(url: string) {
  let limpa = (url || '').trim();
  if (!limpa) throw new Error('URL inválida');
  // Se for a porta 8081 (Expo Dev Server), bloquear pois não é a API PHP
  const has8081 = /:8081(\b|\/)/.test(limpa);
  if (has8081) throw new Error('Porta 8081 é do Expo. Informe a URL do index.php da API (geralmente sem porta, ex.: http://SEU_IP/codeall-api/public/index.php).');
  // Exigir que a URL aponte para index.php
  if (!/index\.php(\b|\/|\?|$)/.test(limpa)) {
    throw new Error('A URL deve apontar para o arquivo index.php da API. Ex.: http://SEU_IP/codeall-api/public/index.php');
  }
  limpa = limpa.replace(/\/$/, '');
  await AsyncStorage.setItem(STORAGE_KEY_API_BASE, limpa);
  setBaseUrl(limpa);
  try { console.log('[API] BASE_URL (salva):', limpa); } catch {}
}

export async function carregarApiBaseLocal(): Promise<string | null> {
  const val = await AsyncStorage.getItem(STORAGE_KEY_API_BASE);
  return val || null;
}

export async function inicializarApiBase(): Promise<void> {
  try {
    const salvo = await carregarApiBaseLocal();
    if (salvo) {
      const invalido8081 = /:8081(\b|\/)/.test(salvo);
      const temIndexPhp = /index\.php(\b|\/|\?|$)/.test(salvo);
      if (invalido8081 || !temIndexPhp) {
        // Reset para padrão se a URL salva for inválida (porta do Expo ou sem index.php)
        await limparApiBaseLocal();
        try { console.log('[API] BASE_URL (override inválido resetado)'); } catch {}
      } else {
        setBaseUrl(salvo);
        try { console.log('[API] BASE_URL (override local):', salvo); } catch {}
      }
    }
  } catch {}
}

export async function limparApiBaseLocal(): Promise<void> {
  await AsyncStorage.removeItem(STORAGE_KEY_API_BASE);
  setBaseUrl(DEFAULT_BASE_URL);
  try { console.log('[API] BASE_URL (reset):', DEFAULT_BASE_URL); } catch {}
}

function montarUrlCompat(path: string): string {
  // Converte '/rota?x=1' em '?route=rota&x=1' para compatibilidade ampla
  const semBarra = path.replace(/^\//, '');
  const [rota, qs] = semBarra.split('?');
  const query = qs ? `&${qs}` : '';
  return `${BASE_URL}?route=${encodeURIComponent(rota)}${query}`;
}

function montarUrlPathInfo(path: string): string {
  // Converte '/rota?x=1' em '/index.php/rota?x=1' (BASE_URL já aponta para index.php)
  const semBarra = path.replace(/^\//, '');
  const [rota, qs] = semBarra.split('?');
  const query = qs ? `?${qs}` : '';
  return `${BASE_URL}/${rota}${query}`;
}

async function request<T>(path: string, options: RequestInit): Promise<T> {
  let url = montarUrlCompat(path);
  const metodo = (options.method || 'GET').toString().toUpperCase();
  try { console.log(`[API] -> ${metodo} ${url}`); } catch {}
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (AUTH_TOKEN) headers['Authorization'] = `Bearer ${AUTH_TOKEN}`;
  let res = await fetch(url, {
    headers,
    ...options,
  });
  if (!res.ok) {
    let msg = 'Erro de requisição';
    let texto: string | undefined;
    try {
      texto = await res.text();
      try {
        const j = JSON.parse(texto);
        msg = (j && (j.error || j.message)) || msg;
      } catch {
        msg = texto || msg;
      }
      try { console.log(`[API] <- ${res.status} ${url} :: ${texto}`); } catch {}
    } catch {
      // ignore
    }
    // Fallback: se 404/"endpoint" tentar estilo PATH_INFO ".../index.php/rota"
    const shouldFallback = res.status === 404 || /endpoint/i.test(msg || '') || /endpoint/i.test(texto || '');
    if (shouldFallback) {
      const url2 = montarUrlPathInfo(path);
      try { console.log(`[API] (fallback) -> ${metodo} ${url2}`); } catch {}
      res = await fetch(url2, { headers, ...options });
      if (res.ok) {
        const data2 = await res.json();
        try { console.log(`[API] (fallback) <- ${res.status} ${url2} OK`); } catch {}
        return data2 as T;
      } else {
        try {
          const texto2 = await res.text();
          try { console.log(`[API] (fallback) <- ${res.status} ${url2} :: ${texto2}`); } catch {}
        } catch {}
      }
    }
    throw new Error(msg);
  }
  const data = await res.json();
  try { console.log(`[API] <- ${res.status} ${url} OK`); } catch {}
  return data as T;
}

export type RegisterPayload = {
  name: string; email: string; password: string;
  phone?: string; cpf?: string; cep?: string; address?: string; number?: string; complement?: string; district?: string; city?: string;
};

export async function apiRegister(payload: RegisterPayload) {
  const p = { ...payload, email: (payload.email || '').trim().toLowerCase() };
  return request<{ ok: boolean; id: number }>(`/register`, { method: 'POST', body: JSON.stringify(p) });
}

export async function apiLogin(email: string, password: string) {
  const e = (email || '').trim().toLowerCase();
  return request<{ ok: boolean; user: { id: number; name: string; email: string }; token?: string; refreshToken?: string }>(`/login`, { method: 'POST', body: JSON.stringify({ email: e, password: (password || '').trim() }) });
}

export async function apiHealth() {
  return request<{ ok: boolean }>(`/health`, { method: 'GET' });
}

export type UsuarioCompleto = {
  id: number;
  name: string;
  email: string;
  phone?: string | null;
  cpf?: string | null;
  cep?: string | null;
  address?: string | null;
  number?: string | null;
  complement?: string | null;
  district?: string | null;
  city?: string | null;
  created_at: string;
};

export async function apiBuscarUsuarioPorEmail(email: string) {
  const url = `/user?email=${encodeURIComponent(email)}`;
  return request<{ ok: boolean; user: UsuarioCompleto }>(url, { method: 'GET' });
}

export type AtualizarUsuarioPayload = {
  id: number;
  name?: string;
  phone?: string | null;
  cpf?: string | null;
  cep?: string | null;
  address?: string | null;
  number?: string | null;
  complement?: string | null;
  district?: string | null;
  city?: string | null;
};

export async function apiAtualizarUsuario(payload: AtualizarUsuarioPayload) {
  return request<{ ok: boolean; user: UsuarioCompleto }>(`/user`, { method: 'PUT', body: JSON.stringify(payload) });
}

export type TrocarSenhaPayload = { id: number; currentPassword: string; newPassword: string };
export async function apiTrocarSenha(payload: TrocarSenhaPayload) {
  return request<{ ok: boolean }>(`/change-password`, { method: 'POST', body: JSON.stringify(payload) });
}

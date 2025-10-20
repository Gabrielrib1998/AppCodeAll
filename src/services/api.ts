import { Platform } from 'react-native';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
export let BASE_URL = 'http://10.6.75.90/codeall-api/public/index.php';
export function setBaseUrl(url: string) { BASE_URL = url.replace(/\/$/, ''); }
let DEFAULT_BASE_URL = BASE_URL;
let AUTH_TOKEN: string | null = null;
let REFRESH_TOKEN: string | null = null;

export function setAuthToken(token: string | null) { AUTH_TOKEN = token || null; }
export function setRefreshToken(token: string | null) { REFRESH_TOKEN = token || null; }
export function getAuthToken() { return AUTH_TOKEN; }
export function getRefreshToken() { return REFRESH_TOKEN; }

function resolveHostFromExpo(): string | null {
  const hostUri = (Constants as any)?.expoConfig?.hostUri || (Constants as any)?.manifest?.debuggerHost || '';
  if (typeof hostUri === 'string' && hostUri.length > 0) {
    const host = hostUri.split(':')[0];
    if (host && host !== 'localhost') return host;
  }
  return null;
}

async function detectCurrentLocalIP(): Promise<string | null> {
  try {
    const expoHost = resolveHostFromExpo();
    if (expoHost && expoHost !== 'localhost' && expoHost !== '127.0.0.1') {
      console.log('[API] IP local detectado pelo Expo:', expoHost);
      return expoHost;
    }

    const debuggerHost = (Constants as any)?.manifest?.debuggerHost;
    if (debuggerHost && typeof debuggerHost === 'string') {
      const ip = debuggerHost.split(':')[0];
      if (ip && ip !== 'localhost' && ip !== '127.0.0.1') {
        console.log('[API] IP local detectado via debuggerHost:', ip);
        return ip;
      }
    }

    console.log('[API] Não foi possível detectar IP local automaticamente');
    return null;
  } catch (error) {
    console.log('[API] Erro ao detectar IP local:', error);
    return null;
  }
}

(() => {
  const extra: any = (Constants as any)?.expoConfig?.extra || (Constants as any)?.manifest?.extra || {};
  if (extra?.apiBase && typeof extra.apiBase === 'string') {
    BASE_URL = extra.apiBase.replace(/\/$/, '');
    DEFAULT_BASE_URL = BASE_URL;
    try { console.log('[API] BASE_URL (extra):', BASE_URL); } catch {}
    return;
  }

  const host = resolveHostFromExpo();
  if (host && host !== 'localhost' && host !== '127.0.0.1') {
    BASE_URL = `http://${host}/codeall-api/public/index.php`;
    DEFAULT_BASE_URL = BASE_URL;
    try { console.log('[API] BASE_URL (auto-detectado):', BASE_URL); } catch {}
    return;
  }

  if (Platform.OS === 'android') {
    BASE_URL = 'http://10.0.2.2/codeall-api/public/index.php';
  } else if (Platform.OS === 'ios') {
    BASE_URL = 'http://localhost/codeall-api/public/index.php';
  } else {
    BASE_URL = 'http://localhost/codeall-api/public/index.php';
  }
  DEFAULT_BASE_URL = BASE_URL;
  try { console.log('[API] BASE_URL (fallback):', BASE_URL); } catch {}
})();

const STORAGE_KEY_API_BASE = '@codeall:apiBase';

export async function salvarApiBaseLocal(url: string) {
  let limpa = (url || '').trim();
  if (!limpa) throw new Error('URL inválida');
  const has8081 = /:8081(\b|\/)/.test(limpa);
  if (has8081) throw new Error('Porta 8081 é do Expo. Informe a URL do index.php da API (geralmente sem porta, ex.: http://SEU_IP/codeall-api/public/index.php).');
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
        await limparApiBaseLocal();
        try { console.log('[API] BASE_URL (override inválido resetado)'); } catch {}
      } else {
        setBaseUrl(salvo);
        try { console.log('[API] BASE_URL (override local):', salvo); } catch {}
      }
    }
    
    // Após carregar a configuração, verifica se a conexão está funcionando
    // Se não estiver, tenta detectar novo IP automaticamente
    setTimeout(() => {
      verificarEAtualizarIP().catch(() => {
        // Ignora erros na verificação automática
      });
    }, 2000); // Aguarda 2 segundos após a inicialização

  } catch {}
}

export async function limparApiBaseLocal(): Promise<void> {
  await AsyncStorage.removeItem(STORAGE_KEY_API_BASE);
  setBaseUrl(DEFAULT_BASE_URL);
  try { console.log('[API] BASE_URL (reset):', DEFAULT_BASE_URL); } catch {}
}

// Função para atualizar automaticamente o IP quando a rede mudar
export async function atualizarIPAutomaticamente(): Promise<boolean> {
  try {
    const novoIP = await detectCurrentLocalIP();
    if (novoIP) {
      const novaURL = `http://${novoIP}/codeall-api/public/index.php`;
      await salvarApiBaseLocal(novaURL);
      try { console.log('[API] IP atualizado automaticamente para:', novaURL); } catch {}
      return true;
    }
    return false;
  } catch (error) {
    try { console.log('[API] Erro ao atualizar IP automaticamente:', error); } catch {}
    return false;
  }
}

export async function verificarEAtualizarIP(): Promise<void> {
  try {
    await apiHealth();
    try { console.log('[API] Conexão OK com:', BASE_URL); } catch {}
  } catch (error) {
    try { console.log('[API] Falha na conexão, tentando detectar novo IP...'); } catch {}
    
    const sucesso = await atualizarIPAutomaticamente();
    if (sucesso) {
      try { console.log('[API] IP atualizado com sucesso!'); } catch {}
    } else {
      try { console.log('[API] Não foi possível detectar novo IP automaticamente'); } catch {}
    }
  }
}

function montarUrlCompat(path: string): string {
  const semBarra = path.replace(/^\//, '');
  const [rota, qs] = semBarra.split('?');
  const query = qs ? `&${qs}` : '';
  return `${BASE_URL}?route=${encodeURIComponent(rota)}${query}`;
}

function montarUrlPathInfo(path: string): string {
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
    }
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

// Função para obter o IP atual detectado
export function obterIPAtual(): string | null {
  const host = resolveHostFromExpo();
  return host && host !== 'localhost' && host !== '127.0.0.1' ? host : null;
}

// Função para debug - mostra todas as informações de rede disponíveis
export function debugInfoRede(): void {
  try {
    console.log('[API] === DEBUG INFO REDE ===');
    console.log('[API] BASE_URL atual:', BASE_URL);
    console.log('[API] DEFAULT_BASE_URL:', DEFAULT_BASE_URL);
    
    const expoHost = resolveHostFromExpo();
    console.log('[API] IP detectado pelo Expo:', expoHost || 'não detectado');
    
    const constants = Constants as any;
    console.log('[API] hostUri:', constants?.expoConfig?.hostUri || constants?.manifest?.hostUri || 'não disponível');
    console.log('[API] debuggerHost:', constants?.manifest?.debuggerHost || 'não disponível');
    console.log('[API] === FIM DEBUG ===');
  } catch (error) {
    console.log('[API] Erro ao obter debug info:', error);
  }
}

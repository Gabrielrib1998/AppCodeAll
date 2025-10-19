import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { apiLogin, setAuthToken, setRefreshToken } from '../services/api';

// Tipos em português para facilitar entendimento
export type Usuario = {
  id: number;
  nome: string;
  email: string;
};

type DadosContextoAuth = {
  usuario: Usuario | null;
  carregando: boolean;
  entrar: (email: string, senha: string) => Promise<void>;
  sair: () => Promise<void>;
  carregarSessao: () => Promise<void>;
};

export const AuthContext = createContext<DadosContextoAuth>({
  usuario: null,
  carregando: false,
  async entrar() {},
  async sair() {},
  async carregarSessao() {},
});

type ProvedorAuthProps = { children: React.ReactNode };

export function ProvedorAuth({ children }: ProvedorAuthProps) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [carregando, setCarregando] = useState<boolean>(true);

  // Chave de armazenamento local
  const CHAVE_SESSAO = '@codeall:sessao';
  const CHAVE_TOKEN = '@codeall:token';
  const CHAVE_REFRESH = '@codeall:refreshToken';

  const carregarSessao = useCallback(async () => {
    try {
      setCarregando(true);
      const texto = await AsyncStorage.getItem(CHAVE_SESSAO);
      const token = await AsyncStorage.getItem(CHAVE_TOKEN);
      const refresh = await AsyncStorage.getItem(CHAVE_REFRESH);
      if (texto) {
        const dados = JSON.parse(texto) as Usuario;
        setUsuario(dados);
      }
      if (token) setAuthToken(token);
      if (refresh) setRefreshToken(refresh);
    } catch (e) {
      console.log('Erro ao carregar sessão', e);
    } finally {
      setCarregando(false);
    }
  }, []);

  useEffect(() => {
    carregarSessao();
  }, [carregarSessao]);

  const entrar = useCallback(async (email: string, senha: string) => {
    try {
      setCarregando(true);
      const resp = await apiLogin(email.trim(), senha.trim());
      try { console.log('[Auth] login response:', resp); } catch {}
      const r: any = resp || {};
      const u: any = r.user || r.usuario || null;
      if (!u) {
        const msg = r.error || r.message || 'Credenciais inválidas';
        throw new Error(msg);
      }
      const idRaw = u.id;
      const idNum = typeof idRaw === 'number' ? idRaw : parseInt(String(idRaw), 10);
      if (!Number.isFinite(idNum)) {
        const msg = r.error || r.message || 'Usuário inválido retornado pelo servidor';
        throw new Error(msg);
      }
      const nome = u.name ?? u.nome ?? '';
      const emailRet = u.email ?? '';
      const dadosUsuario: Usuario = {
        id: idNum,
        nome: String(nome),
        email: String(emailRet),
      };
      await AsyncStorage.setItem(CHAVE_SESSAO, JSON.stringify(dadosUsuario));
      if (resp.token) {
        await AsyncStorage.setItem(CHAVE_TOKEN, resp.token);
        setAuthToken(resp.token);
      }
      if (resp.refreshToken) {
        await AsyncStorage.setItem(CHAVE_REFRESH, resp.refreshToken);
        setRefreshToken(resp.refreshToken);
      }
      setUsuario(dadosUsuario);
    } catch (e: any) {
      throw e;
    } finally {
      setCarregando(false);
    }
  }, []);

  const sair = useCallback(async () => {
    try {
      setCarregando(true);
      await AsyncStorage.multiRemove([CHAVE_SESSAO, CHAVE_TOKEN, CHAVE_REFRESH]);
      setAuthToken(null);
      setRefreshToken(null);
      setUsuario(null);
    } catch (e) {
      console.log('Erro ao sair', e);
    } finally {
      setCarregando(false);
    }
  }, []);

  const valor = useMemo(() => ({ usuario, carregando, entrar, sair, carregarSessao }), [usuario, carregando, entrar, sair, carregarSessao]);

  return (
    <AuthContext.Provider value={valor}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;

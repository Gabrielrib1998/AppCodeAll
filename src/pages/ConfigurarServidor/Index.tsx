import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { styles } from './styles';
import { apiHealth, BASE_URL, salvarApiBaseLocal, limparApiBaseLocal, atualizarIPAutomaticamente, obterIPAtual, debugInfoRede } from '../../services/api';
import { Button } from '../../components/Button';

export default function ConfigurarServidor() {
  const [url, setUrl] = useState<string>(BASE_URL);
  const [testando, setTestando] = useState(false);
  const [detectandoIP, setDetectandoIP] = useState(false);

  const onSalvarETestar = async () => {
    try {
      setTestando(true);
      await salvarApiBaseLocal(url);
      const resp = await apiHealth();
      if (resp?.ok) Alert.alert('Sucesso', 'Conexão com o servidor está OK.');
      else Alert.alert('Aviso', 'Servidor respondeu, mas sem ok=true.');
    } catch (e: any) {
      Alert.alert('Erro', e?.message || 'Falha ao conectar');
    } finally {
      setTestando(false);
    }
  };

  const onDetectarIPAutomatico = async () => {
    try {
      setDetectandoIP(true);
      
      // Mostrar debug info primeiro
      debugInfoRede();
      
      const ipAtual = obterIPAtual();
      if (ipAtual) {
        const novaURL = `http://${ipAtual}/codeall-api/public/index.php`;
        setUrl(novaURL);
        Alert.alert(
          'IP Detectado!', 
          `IP encontrado: ${ipAtual}\n\nNova URL: ${novaURL}\n\nPressione "Salvar e Testar" para confirmar.`
        );
      } else {
        Alert.alert(
          'IP não detectado', 
          'Não foi possível detectar automaticamente o IP.\n\nVerifique se o Expo está rodando corretamente ou configure manualmente.'
        );
      }
    } catch (e: any) {
      Alert.alert('Erro', e?.message || 'Erro ao detectar IP');
    } finally {
      setDetectandoIP(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Configurar Servidor</Text>
      <Text style={styles.label}>URL do index.php da API</Text>
      <Text style={styles.ajuda}>Ex.: http://SEU_IP/codeall-api/public/index.php (não use porta 8081)</Text>
      <TextInput value={url} onChangeText={setUrl} style={styles.input} autoCapitalize="none" autoCorrect={false} />
      
      <Button 
        title={detectandoIP ? 'Detectando IP...' : '🔍 Detectar IP Automaticamente'} 
        onPress={onDetectarIPAutomatico} 
        loading={detectandoIP}
        style={{ marginBottom: 8 }}
      />
      
      <Button title={testando ? 'Testando...' : 'Salvar e Testar'} onPress={onSalvarETestar} loading={testando} />
      <View style={{ height: 8 }} />
      <Button title="Resetar para padrão" onPress={() => limparApiBaseLocal()} />
    </View>
  );
}

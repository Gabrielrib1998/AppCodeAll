import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ProvedorAuth } from './src/global/AuthContext';
import { inicializarApiBase } from './src/services/api';

export default function App() {
  const [pronto, setPronto] = useState(false);

  useEffect(() => {
    (async () => {
      await inicializarApiBase();
      setPronto(true);
    })();
  }, []);

  if (!pronto) return null;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ProvedorAuth>
          <Routes />
        </ProvedorAuth>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
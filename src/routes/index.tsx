import React, { useContext, useEffect, useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/login';
import Cadastro from '../pages/Cadastro/Index';
import Home from '../pages/Home/Index';
import Perfil from '../pages/Perfil/Index';
import ConfigurarServidor from '../pages/ConfigurarServidor/Index';
import { AuthContext } from '../global/AuthContext';
import Cabecalho from '../components/Cabecalho';
import CursoHtml from '../pages/CursoHtml/modulo1/index';
import CursoHtml2 from '../pages/CursoHtml/Modulo2/index';
import CursoHtml3 from '../pages/CursoHtml/modulo3';
import JogoTags from '../pages/JogoTags/JogoTags';
import CursoCSS1 from '../pages/CursoCSS/Modulo1/Index';
import ProgressPage from '../pages/Progress/Index';
import CursoCSS2 from '../pages/CursoCSS/Modulo2/index';
import CursoCSS3 from '../pages/CursoCSS/Modulo3/index';
import SobreNos from '../pages/SobreNos/Index';
import Certificados from '../pages/Certificados/Index';
import CursoJS1 from '../pages/CursoJS/Modulo1/Index';
import CursoJS2 from '../pages/CursoJS/Modulo2/index';
import CursoJS3 from '../pages/CursoJS/Modulo3/index';
import CursoSQL1 from '../pages/CursoMySQL/Modulo1/Index';
import CursoSQL2 from '../pages/CursoMySQL/Modulo2/index';
import CursoSQL3 from '../pages/CursoMySQL/Modulo3/index';
import CursoLP1 from '../pages/CursoLP/Modulo1/Index';
import CursoLP2 from '../pages/CursoLP/Modulo2/index';
import CursoLP3 from '../pages/CursoLP/Modulo3/index';

export type RootStackParamList = {
  Login: undefined;
  Cadastro: undefined;
  Home: undefined;
  Perfil: undefined;
  ConfigurarServidor: undefined;
  CursoHtml: undefined;
  CursoHtml2: undefined;
  CursoHtml3: undefined;
  JogoTags: undefined;
  CursoCSS1: undefined;
  Progress: undefined;
  CursoCSS2: undefined;
  CursoCSS3: undefined;
  CursoJS1: undefined;
  CursoJS2: undefined;
  CursoJS3: undefined;
  CursoSQL1: undefined;
  CursoSQL2: undefined;
  CursoSQL3: undefined;
  SobreNos: undefined;
  Certificados: undefined;
  CursoLP1: undefined;
  CursoLP2: undefined;
  CursoLP3: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {
  const { usuario, carregando } = useContext(AuthContext);
  const rotaInicial = useMemo(() => (usuario ? 'Home' : 'Login'), [usuario]);

  return (
    <Stack.Navigator initialRouteName={rotaInicial}>
      
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Cadastro" 
        component={Cadastro} 
  options={{ title: 'Crie sua conta', headerShown: false }} 
      />

        <Stack.Screen 
        name="Home" 
        component={Home} 
          options={{ headerShown: true, header: () => <Cabecalho /> }} 
      />
        <Stack.Screen 
          name="Perfil" 
          component={Perfil} 
            options={{ headerShown: true, header: () => <Cabecalho /> }} 
        />
        <Stack.Screen 
          name="ConfigurarServidor" 
          component={ConfigurarServidor} 
          options={{ headerShown: true, header: () => <Cabecalho /> }} 
        />
        <Stack.Screen 
          name="CursoHtml" 
          component={CursoHtml} 
          options={{ headerShown: true, header: () => <Cabecalho /> }} 
        />
        <Stack.Screen 
          name="CursoHtml2" 
          component={CursoHtml2} 
          options={{ headerShown: true, header: () => <Cabecalho /> }} 
        />
        <Stack.Screen 
          name="CursoHtml3" 
          component={CursoHtml3} 
          options={{ headerShown: true, header: () => <Cabecalho /> }} 
        />
        <Stack.Screen 
          name="JogoTags" 
          component={JogoTags} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="CursoCSS1" 
          component={CursoCSS1}
          options={{ headerShown: true, header: () => <Cabecalho /> }} 
        />
        <Stack.Screen 
          name="CursoCSS2" 
          component={CursoCSS2}
          options={{ headerShown: true, header: () => <Cabecalho /> }} 
        />
        <Stack.Screen
          name="CursoCSS3"
          component={CursoCSS3}
          options={{ headerShown: true, header: () => <Cabecalho /> }}
        />
        <Stack.Screen
          name="Progress"
          component={ProgressPage}
          options={{ title: 'Progressos', headerShown: true, header: () => <Cabecalho /> }}
        />
        <Stack.Screen
          name="CursoJS1"
          component={CursoJS1}
          options={{ headerShown: true, header: () => <Cabecalho /> }}
        />
        <Stack.Screen
          name="CursoJS2"
          component={CursoJS2}
          options={{ headerShown: true, header: () => <Cabecalho /> }}
        />
        <Stack.Screen
          name="CursoJS3"
          component={CursoJS3}
          options={{ headerShown: true, header: () => <Cabecalho /> }}
        />
        <Stack.Screen
          name="CursoSQL1"
          component={CursoSQL1}
          options={{ headerShown: true, header: () => <Cabecalho /> }}
        />
        <Stack.Screen
          name="CursoSQL2"
          component={CursoSQL2}
          options={{ headerShown: true, header: () => <Cabecalho /> }}
        />
        <Stack.Screen
          name="CursoSQL3"
          component={CursoSQL3}
          options={{ headerShown: true, header: () => <Cabecalho /> }}
        />
        <Stack.Screen
          name="SobreNos"
          component={SobreNos}
          options={{ headerShown: true, header: () => <Cabecalho /> }}
        />
        <Stack.Screen
          name="Certificados"
          component={Certificados}
          options={{ headerShown: true, header: () => <Cabecalho /> }}
        />
        <Stack.Screen
          name="CursoLP1"
          component={CursoLP1}
          options={{ headerShown: true, header: () => <Cabecalho /> }}
        />
        <Stack.Screen
          name="CursoLP2"
          component={CursoLP2}
          options={{ headerShown: true, header: () => <Cabecalho /> }}
        />
        <Stack.Screen
          name="CursoLP3"
          component={CursoLP3}
          options={{ headerShown: true, header: () => <Cabecalho /> }}
        />
    </Stack.Navigator>

      );
}
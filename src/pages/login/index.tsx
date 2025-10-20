import React, { useRef } from "react";
import { Text, StyleSheet, Image, TextInput, TouchableOpacity, View, Alert, ActivityIndicator, Keyboard, TouchableWithoutFeedback} from "react-native";
import {styles} from "./styles";
import Logo from "../../Assets/logo.png";
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { theme } from "../../global/themes";
import { Input, } from "../../components/input";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { apiLogin, BASE_URL } from "../../services/api";
import { AuthContext } from "../../global/AuthContext";
export default function Login() {
        const navigation = useNavigation<any>();
    const { entrar } = React.useContext(AuthContext);
        const [usuario, setUsuario] = React.useState('');
        const [password, setPassword] = React.useState('');
        const [loading, setLoading] = React.useState(false);
        const [showPassword, setShowPassword] = React.useState(false);
        const [passwordVisible, setPasswordVisible] = React.useState(false);
        const passwordRef = useRef<TextInput>(null);
        async function getLogin() {
            try {
                if (!usuario || !password) {
                    return Alert.alert('Atenção', 'Preencha todos os campos!');
                }
                setLoading(true);
                await entrar(usuario.trim(), password.trim());
                setLoading(false);
                Keyboard.dismiss();
                navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
            } catch (error: any) {
                setLoading(false);
                console.log('[Login] erro:', error);
                const msg = typeof error?.message === 'string' ? error.message : 'Usuário ou senha inválidos!';
                Alert.alert('Erro ao entrar', msg);
            }
        }



        return (
            <>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80' }} style={styles.fundo} resizeMode="cover" />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         <View style={styles.container}>
         <View style={styles.containerLogin}>
              <View style={styles.boxLogo}>
                 <Image source={Logo} />
             <Text style={styles.text}> Entre para continuar sua jornada na programação !!</Text>
             </View> 
         <View >
            <Input  
                value={usuario}
                onChangeText={setUsuario}
                title="E-mail"
                placeholder="Digite seu e-mail"
                IconRightName="email"
                IconRight={MaterialIcons}
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current?.focus()}
            />
            <Input  
                value={password}
                onChangeText={setPassword}
                title="Senha"
                placeholder="Digite sua senha"
                secureTextEntry={!passwordVisible}
                IconRightName={passwordVisible ? "eye" : "eye-closed"}
                onIconRightPress={() => setPasswordVisible(!passwordVisible)}
                IconRight={Octicons}
                returnKeyType="done"
                onSubmitEditing={getLogin}
                ref={passwordRef}
            />
        </View>
          <View style={styles.boxButton}>
                 <Button
                     type="primary"
                     title={loading ? 'Carregando...' : 'Entrar'}
                     onPress={getLogin}
                     disabled={loading}
                     loading={loading}
                     style={styles.button}
                 />
          </View>
                   
          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={styles.textButtonCadastrar}>
                            Não possui uma conta?
                            <Text style={styles.textButtonCadastrarAqui}> Cadastre-se aqui!</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
          </View>
        </TouchableWithoutFeedback>
</>
        );
    }
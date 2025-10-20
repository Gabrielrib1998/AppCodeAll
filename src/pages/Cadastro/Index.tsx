import React, { useRef } from "react";
import { Text, Image, TextInput, TouchableOpacity, View, ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, SafeAreaView, Keyboard, Alert } from "react-native";
import { styles } from "./styles";
import Logo from "../../Assets/logo.png";
import { Input } from "../../components/input";
import { apiRegister } from "../../services/api";
import { useNavigation } from "@react-navigation/native";
export default function Cadastro() {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [cep, setCep] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [complement, setComplement] = React.useState('');
  const [district, setDistrict] = React.useState('');
  const [city, setCity] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);
  const nameRef = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);
  const cpfRef = useRef<TextInput>(null);
  const cepRef = useRef<TextInput>(null);
  const addressRef = useRef<TextInput>(null);
  const numberRef = useRef<TextInput>(null);
  const complementRef = useRef<TextInput>(null);
  const districtRef = useRef<TextInput>(null);
  const cityRef = useRef<TextInput>(null);

  const somenteDigitos = (s: string) => s.replace(/\D/g, '');
  const maskCPF = (v: string) => {
  const d = somenteDigitos(v).slice(0, 11);
    return d
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  };
  const maskCEP = (v: string) => {
    const d = somenteDigitos(v).slice(0, 8);
      return d.replace(/(\d{5})(\d{1,3})$/, '$1-$2');
  };
  const maskPhone = (v: string) => {
    const d = somenteDigitos(v).slice(0, 11);
    if (d.length <= 10) {
      return d
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2');
    }
      return d
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{1})(\d{4})(\d)/, '$1 $2-$3');
  };

  async function getLogin() {
   if (
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim() ||
      !name.trim() ||
      !phone.trim() ||
      !cpf.trim() ||
      !cep.trim() ||
      !address.trim() ||
      !number.trim() ||
      !district.trim() ||
      !city.trim()
    ) {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não conferem!');
      return;
    }

    try {
      setLoading(true);
      const cpfRaw = somenteDigitos(cpf);
      const cepRaw = somenteDigitos(cep);
      const phoneRaw = somenteDigitos(phone);
      await apiRegister({
        name,
        email,
        password,
        phone: phoneRaw,
        cpf: cpfRaw,
        cep: cepRaw,
        address,
        number,
        complement,
        district,
        city,
      });
      setLoading(false);
      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!', [
        {
          text: 'Ir para Login',
          onPress: () => {
            // Redireciona para a tela de Login e limpa o histórico
            (navigation as any).reset?.({ index: 0, routes: [{ name: 'Login' }] });
          },
        },
      ]);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setName('');
      setPhone('');
      setCpf('');
      setCep('');
      setAddress('');
      setNumber('');
      setComplement('');
      setDistrict('');
      setCity('');
  Keyboard.dismiss();
    } catch (e: any) {
      setLoading(false);
      Alert.alert('Erro', e?.message || 'Falha ao cadastrar');
    }
  }
 
  return (
  <>
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#fff' }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80' }} style={styles.fundo} resizeMode="cover" />
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <View style={styles.containerLogin}>
              <View style={styles.boxLogo}>
                <Image source={Logo} />
                 <Text style={styles.text}> Cadastre-se para começar sua jornada na programação !!</Text>
              </View>

              <View>
                <Input
                  value={email}
                  onChangeText={setEmail}
                  title="Endereço de E-mail"
                  placeholder="Digite seu e-mail"
                  returnKeyType="next"
                  onSubmitEditing={() => passwordRef.current?.focus()}
                  ref={emailRef}
                />
                <Input
                  value={password}
                  onChangeText={setPassword}
                  title="Senha"
                  placeholder="Digite sua senha"
                  returnKeyType="next"
                  onSubmitEditing={() => confirmPasswordRef.current?.focus()}
                  ref={passwordRef}
                  secureTextEntry={true}
                />
                <Input
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  title="Confirmar Senha"
                  placeholder="Confirme sua senha"
                  returnKeyType="next"
                  onSubmitEditing={() => nameRef.current?.focus()}
                  ref={confirmPasswordRef}
                  secureTextEntry={true}
                />
                <Input
                  value={name}
                  onChangeText={setName}
                  title="Nome"
                  placeholder="Digite seu nome"
                  returnKeyType="next"
                  onSubmitEditing={() => phoneRef.current?.focus()}
                  ref={nameRef}
                />
                <Input
                  value={phone}
                  onChangeText={(t) => setPhone(maskPhone(t))}
                  title="Telefone"
                  placeholder="Digite seu telefone"
                  returnKeyType="next"
                  onSubmitEditing={() => cpfRef.current?.focus()}
                  ref={phoneRef}
                />
                <Input
                  value={cpf}
                  onChangeText={(t) => setCpf(maskCPF(t))}
                  title="CPF"
                  placeholder="Digite seu CPF"
                  returnKeyType="next"
                  onSubmitEditing={() => cepRef.current?.focus()}
                  ref={cpfRef}
                />
                <Input
                  value={cep}
                  onChangeText={(t) => setCep(maskCEP(t))}
                  title="CEP"
                  placeholder="Digite seu CEP"
                  returnKeyType="next"
                  onSubmitEditing={() => addressRef.current?.focus()}
                  ref={cepRef}
                />
                <Input
                  value={address}
                  onChangeText={setAddress}
                  title="Endereço"
                  placeholder="Digite seu endereço"
                  returnKeyType="next"
                  onSubmitEditing={() => numberRef.current?.focus()}
                  ref={addressRef}
                />
                <Input
                  value={number}
                  onChangeText={setNumber}
                  title="Número"
                  placeholder="Digite seu número"
                  returnKeyType="next"
                  onSubmitEditing={() => complementRef.current?.focus()}
                  ref={numberRef}
                />
                <Input
                  value={complement}
                  onChangeText={setComplement}
                  title="Complemento"
                  placeholder="Digite um complemento"
                  returnKeyType="next"
                  onSubmitEditing={() => districtRef.current?.focus()}
                  ref={complementRef}
                />
                <Input
                  value={district}
                  onChangeText={setDistrict}
                  title="Bairro"
                  placeholder="Digite seu bairro"
                  returnKeyType="next"
                  onSubmitEditing={() => cityRef.current?.focus()}
                  ref={districtRef}
                />
                <Input
                  value={city}
                  onChangeText={setCity}
                  title="Cidade"
                  placeholder="Digite sua cidade"
                  returnKeyType="done"
                  onSubmitEditing={() => Keyboard.dismiss()}
                  ref={cityRef}
                />
              </View>

              <View style={styles.boxButton}>
                <TouchableOpacity onPress={getLogin} style={styles.button}>
                  {loading ? (
                    <ActivityIndicator color={'#fff'} size={'small'} />
                  ) : (
                    <Text style={styles.textbutton}> Cadastrar </Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  </>
  );
}
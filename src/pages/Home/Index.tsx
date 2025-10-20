import React from "react";
import { Text, View, Keyboard, TouchableWithoutFeedback, ScrollView, Image} from "react-native";
import {styles} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../global/AuthContext";
import { Button } from "../../components/Button";
import {Aladin_400Regular} from '@expo-google-fonts/aladin';
import { useFonts } from 'expo-font';

export default function Home() {
    const navigation = useNavigation<any>();
    const { usuario } = React.useContext(AuthContext);
    const nome = usuario?.nome?.split(' ')[0] || 'dev';
    const [fontsLoaded] = useFonts({
    Aladin_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }
    
    return (<>
    
    <Image source={{ uri: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80' }} style={styles.fundo} resizeMode="cover" />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.container}>
                  <View style={{ paddingHorizontal: 16, paddingTop: 12 }}>
                      <Text style={styles.nome}>Olá, {nome} 👋</Text>
                      <Text style={styles.welcome}>Continue aprendendo e alcance seus objetivos</Text>
                      <Text style={styles.MeusCursos}>Meus Cursos</Text>

                  </View>
                </View>
          </TouchableWithoutFeedback>
        </ScrollView>
        </>
    );
}

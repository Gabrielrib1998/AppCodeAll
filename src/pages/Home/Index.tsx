import React from "react";
import { Text, View, Keyboard, TouchableWithoutFeedback, ScrollView, Image} from "react-native";
import {styles} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../global/AuthContext";
import { Button } from "../../components/Button";
import {Aladin_400Regular} from '@expo-google-fonts/aladin';
import { useFonts } from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from "../../global/themes";
import { LinearGradient } from 'expo-linear-gradient';


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
                      <Text style={styles.MeusCursos}>Meus Cursos</Text>
                      <LinearGradient
                        colors={['#cc5500', '#ff8800', '#ffa500']} 
                        style={styles.cursosCard}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                      >
                        <Image source={{ uri: 'https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png' }} style={styles.cursoImage} resizeMode="contain" />
                            <View style={styles.cursoTextContainer}>
                             <Text style={styles.cursoTitle}>HTML5</Text> 
                             <Text style={styles.cursoLevel}>Iniciante</Text>
                            </View>
                             <Text style={styles.cursoDescription}>Aprenda a criar páginas web modernas e responsivas.</Text>
                            <View style={styles.cursoInfo}>
                                <View style={styles.cursoTimeContainer}>
                                    <MaterialIcons name="access-time" size={20} color={theme.colors.white} />
                                    <Text style={styles.cursoDuration}>8 Horas</Text>
                                </View>
                                <View style={styles.cursosUsers}>
                                    <MaterialIcons name="people" size={24} color={theme.colors.white} />
                                    <Text style={styles.inscricoes}>1.2k inscritos</Text>
                                </View>
                            </View>
                                <View style={styles.cursoProgress}>
                                    <Text style={styles.cursoProgressText}>Em Progresso</Text>
                                </View>
                                
                    </LinearGradient>
                    <LinearGradient
                        colors={['#0e1452ff', '#1d249fff', '#6057ffff']} 
                        style={styles.cursosCard}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                      >
                        <Image source={{ uri: 'https://logospng.org/download/css-3/logo-css-3-512.png' }} style={styles.cursoImage} resizeMode="contain" />
                            <View style={styles.cursoTextContainer}>
                             <Text style={styles.cursoTitle}>CSS3</Text> 
                             <Text style={styles.cursoLevel}>Iniciante</Text>
                            </View>
                             <Text style={styles.cursoDescription}>Aprenda estilizar páginas web com CSS3.</Text>
                            <View style={styles.cursoInfo}>
                                <View style={styles.cursoTimeContainer}>
                                    <MaterialIcons name="access-time" size={20} color={theme.colors.white} />
                                    <Text style={styles.cursoDuration}>3 Horas</Text>
                                </View>
                                <View style={styles.cursosUsers}>
                                    <MaterialIcons name="people" size={24} color={theme.colors.white} />
                                    <Text style={styles.inscricoes}>900 inscritos</Text>
                                </View>
                            </View>
                                <View style={styles.cursoProgress}>
                                    <Text style={styles.cursoProgressText}>Em Progresso</Text>
                                </View>
                                
                    </LinearGradient>
                    <LinearGradient
                        colors={['#cfcf1dff', '#b4af26ff', '#ffff00ff']} 
                        style={styles.cursosCard}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                      >
                        <Image source={{ uri: 'data:image/png;base64,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' }} style={styles.cursoImage} resizeMode="contain" />
                            <View style={styles.cursoTextContainer}>
                             <Text style={styles.cursoTitle}>JavaScript</Text> 
                             <Text style={styles.cursoLevelJS}>Medio</Text>
                            </View>
                             <Text style={styles.cursoDescription}>Aprenda do básico ao avançado de JavaScript </Text>
                            <View style={styles.cursoInfo}>
                                <View style={styles.cursoTimeContainer}>
                                    <MaterialIcons name="access-time" size={20} color={theme.colors.white} />
                                    <Text style={styles.cursoDuration}>10 Horas</Text>
                                </View>
                                <View style={styles.cursosUsers}>
                                    <MaterialIcons name="people" size={24} color={theme.colors.white} />
                                    <Text style={styles.inscricoes}>1.5k inscritos</Text>
                                </View>
                            </View>
                                <View style={styles.cursoProgress}>
                                    <Text style={styles.cursoProgressText}>Em Progresso</Text>
                                </View>
                    </LinearGradient>

                  </View>
                </View>
          </TouchableWithoutFeedback>
        </ScrollView>
        </>
    );
}

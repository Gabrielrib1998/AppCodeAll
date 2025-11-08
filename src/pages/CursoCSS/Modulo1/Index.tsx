import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions, Linking } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { VideoView, useVideoPlayer } from "expo-video";
import { Audio } from "expo-av";


export default function CursoCSS1() {
    const navigation = useNavigation<any>();
    const screenWidth = Dimensions.get('window').width;

    const player = useVideoPlayer(require('../../../Assets/CursoCSSm1.mp4'), player => {
        player.loop = false;
        player.muted = false;
        player.volume = 1.0;
    });
    
    useEffect(() => {
        Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            playsInSilentModeIOS: true,
            staysActiveInBackground: false,
            shouldDuckAndroid: true,
            playThroughEarpieceAndroid: false,
        });
    }, []);
    
    return (<>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80' }} style={styles.fundo} resizeMode="cover" />
        
        <ScrollView style={styles.container}>

        <View style={styles.containerSuperior}>
            <Text style={styles.titulo}>Módulo 1: Estilos CSS Inline</Text>
        </View>
            <Text style={styles.subtitulo}>Objetivo do Módulo 1  💪🏻</Text>

            <Text style={styles.descricao}> Ensinar como usar o CSS inline para aplicar estilos diretamente aos elementos HTML.</Text>
            
            <Text style={styles.subtitulo}>O que é CSS Inline ❓</Text>

            <Text style={styles.descricao}>CSS inline refere-se ao estilo aplicado diretamente dentro de uma tag HTML usando o atributo <Text style={styles.tag}> style </Text>. Isso significa que o estilo é definido diretamente no elemento, ao invés de ser colocado em uma folha de estilo externa ou interna.</Text>

            <Text style={styles.subtitulo}>Exemplo de sintaxe de CSS inline:  👇🏻</Text>

            <Image source={require('../../../Assets/CSS1.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.descricao}> No exemplo acima, o parágrafo <Text style={styles.tag}>&lt;p&gt;</Text> tem a cor do texto <Text style={styles.tag}>( color )</Text> definida como azul e o tamanho da fonte <Text style={styles.tag}>( font-size )</Text> como 16px, tudo diretamente no HTML.</Text>

            <Text style={styles.subtitulo}>Quando Usar CSS Inline?  🤔</Text>

            <Text style={styles.descricao}>Uso rápido e único: É útil quando você precisa aplicar um estilo único e rápido em um único elemento, sem a necessidade de um arquivo CSS ou bloco interno.</Text>

            <Text style={styles.descricao}>Prototipagem rápida: Quando você está criando algo rapidamente e não se importa em organizar os estilos.</Text>
           
            <Text style={styles.descricao}>Porém, para projetos maiores ou mais complexos, o uso de CSS externo ou interno é recomendado, pois mantém o código mais organizado e reutilizável.</Text>

            <Text style={styles.subtitulo}>Como Usar o CSS Inline 🪄</Text>

            <Text style={styles.descricao}> Para aplicar CSS inline, você usa o atributo <Text style={styles.tag}> style</Text> dentro da tag HTML do elemento que deseja estilizar. O valor do atributo é uma string que contém as propriedades CSS e seus valores, separados por ponto e vírgula.</Text>

            <Text style={styles.subtitulo}>Exemplo - Mudando a cor do texto:  👇🏻</Text>

            <Image source={require('../../../Assets/CSS1.2.png')} style={styles.imagem} resizeMode="contain" />            
            
            

            <Text style={styles.subtitulo}>💡 Exemplo com múltiplos estilos</Text>
            
            <Image source={require('../../../Assets/CSS1.3.png')} style={styles.imagem} resizeMode="contain" />            
                                                
            <Text style={styles.subtitulo}>Recursos Adicionais 🎥</Text>

            <View style={styles.videoContainer}>
                <Text style={styles.videoTitle}>Tutorial: Estilos CSS inline</Text>
                <View style={styles.videoWrapper}>
                    <VideoView
                        style={styles.video}
                        player={player}
                        allowsFullscreen
                        allowsPictureInPicture
                        showsTimecodes
                        requiresLinearPlayback={false}
                    />
                </View>
                <TouchableOpacity 
                    style={styles.youtubeButton}
                    onPress={() => {
                        const youtubeUrl = 'https://www.youtube.com/watch?v=E6CdIawPTh0&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n&index=12';
                        Linking.openURL(youtubeUrl);
                    }}
                >
                    <MaterialIcons name="play-circle-fill" size={24} color="#FF0000" />
                    <Text style={styles.youtubeButtonText}>Assistir no YouTube</Text>
                    <MaterialIcons name="open-in-new" size={16} color="#666" />
                </TouchableOpacity>
                <Text style={styles.videoDescription}>
                    📹 Este vídeo demonstra os conceitos de CSS inline que acabamos de aprender.
                </Text>
            </View>
            
            <Text style={styles.subtitulo}>Desafio  🎯</Text>
            
            <Text style={styles.descricao}> Crie um pequeno cartão de perfil em HTML que contenha:</Text>
            <Text style={styles.descricao}> - Um titulo com o nome do usuario.</Text>
            <Text style={styles.descricao}> - Um parágrafo com a profissão.</Text>
            <Text style={styles.descricao}> - Um fundo colorido.</Text>
            <Text style={styles.descricao}> - Texto centralizado e com cor diferente do fundo.</Text>
            <Text style={styles.descricao}> - Todos os estilos devem ser inline (dentro das tags HTML).</Text>
            <Text style={styles.descricao}> 💬 Dica: use as tags <Text style={styles.tag}>&lt;div&gt;</Text>, <Text style={styles.tag}>&lt;h2&gt;</Text> e <Text style={styles.tag}>&lt;p&gt;</Text>.</Text>

            <Text style={styles.subtitulo}>Conclusão do Módulo 1  🎉</Text>

            <Text style={styles.descricao}> Parabéns por concluir o primeiro módulo!{'\n'}{'\n'}
                Agora você já domina os estilos inline e entende como aplicar CSS diretamente dentro das tags HTML.{'\n'}
                Esse é o primeiro passo para compreender como o CSS controla a aparência das páginas.{'\n'}
                No próximo módulo, você vai aprender a usar o CSS interno, uma forma mais organizada de estilizar seus elementos e deixar o código mais limpo e fácil de manter.</Text>
           
            <View style={styles.containerInferior}>
                    <Text style={styles.textoBotao}>Próximo Módulo: CSS interno</Text>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.replace("CursoCSS2")}>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="#fff" />
                </TouchableOpacity>
           </View>
           
            </ScrollView>
            </>
    );
}
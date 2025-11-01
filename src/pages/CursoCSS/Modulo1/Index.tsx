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

            <Text style={styles.subtitulo}>Exemplo 1 - Mudando a cor do texto:  👇🏻</Text>

            <Image source={require('../../../Assets/CSS1.2.png')} style={styles.imagem} resizeMode="contain" />            
            
            <Text style={styles.subtitulo}>Primeiras Tags Importantes  ⚙️</Text>
            
            <Text style={styles.descricao}> • <Text style={styles.tag}>&lt;h1&gt;</Text> a <Text style={styles.tag}>&lt;h6&gt;</Text>: Títulos de diferentes níveis.</Text>
            
            <Text style={styles.descricao}> • <Text style={styles.tag}>&lt;p&gt;</Text>: Parágrafos de texto.</Text>
            
            <Text style={styles.descricao}> • <Text style={styles.tag}>&lt;a&gt;</Text>: Links para outras páginas ou recursos.</Text>
            
            <Text style={styles.subtitulo}>Exemplo de link:</Text>
           
                      
            
            <Text style={styles.subtitulo}>Recursos Adicionais 🎥</Text>

            <View style={styles.videoContainer}>
                <Text style={styles.videoTitle}>Tutorial: Introdução ao HTML</Text>
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
                    📹 Este vídeo demonstra os conceitos básicos do HTML que acabamos de aprender.
                </Text>
            </View>
            
            <Text style={styles.subtitulo}>Desafio  🎯</Text>
            
            <Text style={styles.descricao}> Crie um arquivo HTML simples que inclua um título, um parágrafo e um link para seu site favorito. Experimente diferentes tags para ver como elas afetam a aparência do conteúdo.</Text>

            <Text style={styles.subtitulo}>Conclusão do Módulo 1  🎉</Text>

            <Text style={styles.descricao}> Parabéns por concluir o primeiro módulo! Agora você entende os fundamentos do HTML e está pronto para avançar para o próximo módulo, onde exploraremos mais tags e atributos essenciais.</Text>
           
            <View style={styles.containerInferior}>
                    <Text style={styles.textoBotao}>Próximo Módulo: Estruturando Conteúdo e Trabalhando com Imagens</Text>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("CursoCSS2")}>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="#fff" />
                </TouchableOpacity>
           </View>
           
            </ScrollView>
            </>
    );
}
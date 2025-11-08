import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions, Linking } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { VideoView, useVideoPlayer } from "expo-video";
import { Audio } from "expo-av";


export default function CursoCSS2() {
    const navigation = useNavigation<any>();
    const screenWidth = Dimensions.get('window').width;

    const player = useVideoPlayer(require('../../../Assets/CursoCSSm2.mp4'), player => {
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
            <Text style={styles.titulo}>Módulo 2 – CSS Interno </Text>
        </View>
            <Text style={styles.subtitulo}>Objetivo do Módulo 2  💪🏻</Text>

            <Text style={styles.descricao}> Aprender o que é o CSS interno, entender como ele funciona dentro do documento HTML e quando é mais vantajoso utilizá-lo em comparação ao estilo inline..</Text>

            <Text style={styles.subtitulo}>O que é CSS interno ❓</Text>

            <Text style={styles.descricao}>O CSS interno é uma forma de adicionar estilos dentro do próprio arquivo HTML, mas de maneira organizada, dentro da tag <Text style={styles.tag}>&lt;style&gt;</Text> que fica localizada no cabeçalho do documento <Text style={styles.tag}>&lt;head&gt;</Text>.</Text>

            <Text style={styles.descricao}>Diferente do CSS inline, onde os estilos são aplicados diretamente nos elementos HTML, o CSS interno permite que você defina regras de estilo para múltiplos elementos de forma centralizada, facilitando a manutenção e a leitura do código.</Text>

            <Text style={styles.subtitulo}>Exemplo de sintaxe de CSS interno:  👇🏻</Text> 

            <Image source={require('../../../Assets/CSS2.png')} style={styles.imagem} resizeMode="stretch" />

            <Text style={styles.subtitulo}> 📌 Importante:</Text>
            
            <Text style={styles.descricao}>As regras de estilo são escritas dentro da tag <Text style={styles.tag}>&lt;style&gt;</Text> e aplicadas aos elementos indicados pelos seletores como <Text style={styles.tag}>&lt;p&gt;</Text>, <Text style={styles.tag}>&lt;h1&gt;</Text>, <Text style={styles.tag}>&lt;div&gt;</Text>, <Text style={styles.tag}>.classe</Text> e <Text style={styles.tag}>#id</Text>.</Text>

            <Text style={styles.subtitulo}>Exemplo prático</Text>

            <Image source={require('../../../Assets/CSS2.1.png')} style={[styles.imagem, { width: screenWidth }]} resizeMode="stretch" />

            <Text style={styles.descricao}>👉 Aqui, todos os parágrafos <Text style={styles.tag}>&lt;p&gt;</Text> recebem o mesmo estilo sem precisar repetir código.</Text>

            <Text style={styles.subtitulo}> Quando usar CSS interno?  🤔</Text>
        

            <Text style={styles.descricao}>✅ Use quando: 
                {'\n'}

            • O projeto for pequeno ou de uma única página.
            {'\n'}

            • Você quiser manter os estilos organizados dentro do mesmo arquivo HTML.
            {'\n'}

            • For necessário testar rapidamente diferentes estilos antes de criar um arquivo CSS externo.</Text>

            <Text style={styles.descricao}>❌ Evite usar quando:
                {'\n'}

            • O site tiver várias páginas com o mesmo design (pois o código precisaria ser repetido).
            {'\n'}

            • Você quiser separar completamente o HTML do CSS (nesse caso, prefira o CSS externo).</Text>
            
            <Text style={styles.descricao}>Prototipagem rápida: Quando você está criando algo rapidamente e não se importa em organizar os estilos.</Text>
           
            <Text style={styles.descricao}>Porém, para projetos maiores ou mais complexos, o uso de CSS externo ou interno é recomendado, pois mantém o código mais organizado e reutilizável.</Text>

            <Text style={styles.subtitulo}>Exemplo com classes  👇🏻</Text>

            <Image source={require('../../../Assets/CSS2.2.png')} style={styles.imagem} resizeMode="stretch" />

            <Text style={styles.descricao}>Repare que usamos classes (com o <Text style={styles.tag}> . </Text> antes do nome) para aplicar estilos a vários elementos de forma prática e organizada.</Text>         
                                                
            <Text style={styles.subtitulo}>Recursos Adicionais 🎥</Text>

            <View style={styles.videoContainer}>
                <Text style={styles.videoTitle}>Tutorial: Estilos CSS Interno</Text>
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
                    📹 Este vídeo demonstra os conceitos de CSS Interno que acabamos de aprender.
                </Text>
            </View>
            
            <Text style={styles.subtitulo}>Desafio  🎯</Text>
            
            <Text style={styles.descricao}> Crie uma página HTML que contenha:</Text>
            <Text style={styles.descricao}> - Dois parágrafos com estilos diferentes.</Text>
            <Text style={styles.descricao}> - Um fundo de cor suave.</Text>
            <Text style={styles.descricao}> - Todos os estilos definidos dentro da tag <Text style={styles.tag}>&lt;style&gt;</Text> no <Text style={styles.tag}>&lt;head&gt;</Text>.</Text>
            <Text style={styles.descricao}> 💬 Dica: use seletores de classe e de elemento.</Text>

            <Text style={styles.subtitulo}>Conclusão do Módulo 1  🎉</Text>

            <Text style={styles.descricao}> Parabéns por concluir o segundo módulo!{'\n'}{'\n'}
            Agora você sabe como utilizar o CSS interno para aplicar estilos de forma mais organizada e centralizada dentro do HTML.{'\n'}
            Com isso, seu código fica mais limpo e fácil de manter do que com o uso de estilos inline.{'\n'}
            No próximo módulo, você vai aprender sobre o CSS externo, a maneira mais profissional e escalável de separar completamente o estilo do conteúdo da página.</Text>
           
            <View style={styles.containerInferior}>
                    <Text style={styles.textoBotao}>Próximo Módulo: CSS externo</Text>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.replace("CursoCSS3")}>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="#fff" />
                </TouchableOpacity>
           </View>
           
            </ScrollView>
            </>
    );
}
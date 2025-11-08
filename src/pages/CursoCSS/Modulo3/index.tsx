import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions, Linking } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { VideoView, useVideoPlayer } from "expo-video";
import { Audio } from "expo-av";


export default function CursoCSS3() {
    const navigation = useNavigation<any>();
    const screenWidth = Dimensions.get('window').width;

    const player = useVideoPlayer(require('../../../Assets/CursoCSSm3.mp4'), player => {
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
            <Text style={styles.titulo}>Módulo 3 – CSS Externo</Text>
        </View>
            <Text style={styles.subtitulo}>Objetivo do Módulo 3  💪🏻</Text>

            <Text style={styles.descricao}> Ensinar como usar o CSS externo para aplicar estilos de forma organizada e reutilizável em múltiplas páginas HTML.</Text>

            <Text style={styles.subtitulo}>O que é CSS Externo ❓</Text>

            <Text style={styles.descricao}>CSS externo refere-se ao estilo definido em um arquivo separado com a extensão <Text style={styles.tag}>.css</Text>. Esse arquivo é então vinculado ao documento HTML através da tag <Text style={styles.tag}>&lt;link&gt;</Text> no cabeçalho <Text style={styles.tag}>&lt;head&gt;</Text> do HTML.</Text>

            <Text style={styles.subtitulo}>Exemplo de sintaxe de CSS externo:  👇🏻</Text>

            <Text style={styles.descricao}> Criação do arquivo CSS:
                {'\n'}
                {'\n'}
                Crie um arquivo <Text style={styles.tag}>style.css</Text> (por exemplo):
            </Text>

            <Image source={require('../../../Assets/CSS3.png')} style={styles.imagem} resizeMode="stretch" />

            <Text style={styles.subtitulo}>Ligação com o HTML:</Text>
            <Text style={styles.descricao}> No arquivo HTML, dentro da tag <Text style={styles.tag}>&lt;head&gt;</Text> adicione: </Text>

            <Image source={require('../../../Assets/CSS3.1.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.subtitulo}> 🧾 Exemplo prático </Text>

            <Text style={styles.descricao}> Arquivo <Text style={styles.tag}>index.html</Text> :</Text>

            <Image source={require('../../../Assets/CSS3.2.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.descricao}> Arquivo CSS <Text style={styles.tag}>style.css</Text> :</Text>

            <Image source={require('../../../Assets/CSS3.3.png')} style={styles.imagem} resizeMode="stretch" />

            <Text style={styles.descricao}>👉 Assim, o arquivo <Text style={styles.tag}>style.css</Text> controla toda a aparência da página.{'\n'}
            Se você quiser aplicar o mesmo design a outra página, basta importar o mesmo CSS — sem precisar repetir código.</Text>

            <Text style={styles.subtitulo}>Quando Usar CSS Inline?  🤔</Text>

             <Text style={styles.descricao}>✅ Use quando: 
            {'\n'}

            • O projeto tiver várias páginas com o mesmo design.
            {'\n'}

            • Você quiser separar o conteúdo do estilo.
            {'\n'}

            • Desejar reutilizar e manter facilmente os estilos do site.
            </Text>

            <Text style={styles.descricao}>❌ Evite usar quando:
            {'\n'}

            • For apenas um teste rápido ou projeto muito simples.
            {'\n'}

            • Você ainda estiver experimentando estilos pontuais (aí o CSS interno pode ser suficiente).
            </Text>

            <Text style={styles.subtitulo}>Exemplo com múltiplas páginas  👇🏻</Text>

            <Text style={styles.descricao}> Arquivo: <Text style={styles.tag}> Sobre.html </Text> </Text>

            <Image source={require('../../../Assets/CSS3.4.png')} style={styles.imagem} resizeMode="contain" />            

            <Text style={styles.descricao}> Observe que ambas as páginas compartilham o mesmo estilo, pois estão ligadas ao mesmo arquivo <Text style={styles.tag}>style.css</Text></Text>
                                                            
            <Text style={styles.subtitulo}>Recursos Adicionais 🎥</Text>

            <View style={styles.videoContainer}>
                <Text style={styles.videoTitle}>Tutorial: Estilos CSS externo</Text>
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
                    📹 Este vídeo demonstra os conceitos de CSS externo que acabamos de aprender.
                </Text>
            </View>
            
            <Text style={styles.subtitulo}>Desafio  🎯</Text>

            <Text style={styles.descricao}> Crie um pequeno site com duas páginas <Text style={styles.tag}>index.html</Text> e <Text style={styles.tag}>contato.html</Text> e um arquivo <Text style={styles.tag}>style.css</Text> {'\n'}{'\n'} O arquivo CSS deve conter regras que definam: </Text>
            <Text style={styles.descricao}> - A cor de fundo das páginas.</Text>
            <Text style={styles.descricao}> - O alinhamento e a cor dos títulos.</Text>
            <Text style={styles.descricao}> - O tamanho e o espaçamento do texto.</Text>
            <Text style={styles.descricao}> - Um estilo de botão personalizado (use a tag <Text style={styles.tag}>&lt;button&gt;</Text>).</Text>
        
            <Text style={styles.subtitulo}>Conclusão do Módulo 3  🎉</Text>

            <Text style={styles.descricao}> Parabéns por concluir o terceiro módulo!{'\n'}{'\n'}
            Agora você domina o uso do CSS externo, a forma mais organizada e profissional de estilizar páginas da web.{'\n'}
            Com esse conhecimento, você é capaz de estruturar projetos com múltiplas páginas e manter um design padronizado em todas elas.{'\n'}</Text>
           
            <View style={styles.containerInferior}>
                    <Text style={styles.textoBotao}>Conclusão de curso 🎉</Text>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Home")}>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="#fff" />
                </TouchableOpacity>
           </View>
           
            </ScrollView>
            </>
    );
}
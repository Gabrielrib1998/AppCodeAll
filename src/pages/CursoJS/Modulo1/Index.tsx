import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions, Linking } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { VideoView, useVideoPlayer } from "expo-video";
import { Audio } from "expo-av";


export default function CursoJS1() {
    const navigation = useNavigation<any>();
    const screenWidth = Dimensions.get('window').width;

    const player = useVideoPlayer(require('../../../Assets/CursoJS1.mp4'), player => {
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
            <Text style={styles.titulo}>Módulo 1 – O que o JavaScript é capaz de fazer</Text>
        </View>
            <Text style={styles.subtitulo}>Objetivo do Módulo 1  💪🏻</Text>

            <Text style={styles.descricao}> Compreender o que é o JavaScript, para que ele serve e o que ele é capaz de fazer nas páginas da web e em outras áreas da programação.</Text>
            
            <Text style={styles.subtitulo}>O que é o JavaScript ❓</Text>

            <Text style={styles.descricao}>O JavaScript é uma linguagem de programação que permite implementar funcionalidades complexas em páginas web. Ele é utilizado para criar efeitos dinâmicos, controlar multimídia, animar imagens, e muito mais.</Text>

            <Text style={styles.descricao}>💡 Pense no HTML como o corpo, o CSS como as roupas e o JavaScript como o cérebro da página.</Text>

            <Text style={styles.subtitulo}>🧠 O que o JavaScript pode fazer</Text>

            <Text style={styles.descricao}>O JavaScript é extremamente versátil e está presente em praticamente todas as áreas da tecnologia moderna. {'\n'}
            Aqui estão alguns exemplos do que ele é capaz de fazer:</Text>

            <Text style={styles.subtitulo}>💻 1. Manipular o conteúdo da página (DOM)</Text>

            <Text style={styles.descricao}>- Permite alterar textos, imagens, cores e elementos em tempo real.</Text>

            <Image source={require('../../../Assets/JS1.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.descricao}> 👉 Esse código altera o texto do parágrafo automaticamente quando a página é carregada.</Text>

            <Text style={styles.subtitulo}>🎨 2. Criar interações com o usuário</Text>

            <Text style={styles.descricao}> Você pode reagir a cliques, digitações, movimentos do mouse e muito mais.</Text>

            <Image source={require('../../../Assets/JS1.2.png')} style={styles.imagem} resizeMode="contain" />
            
            <Text style={styles.descricao}>👉 Ao clicar, o navegador exibe uma mensagem (alerta).</Text>

            <Text style={styles.subtitulo}>⚙️ 3. Fazer cálculos e processar dados</Text>

            <Text style={styles.descricao}>O JavaScript pode ser usado para realizar cálculos matemáticos, manipular dados e processar informações de diversas formas.</Text>

            <Image source={require('../../../Assets/JS1.3.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.descricao}>👉 O resultado aparece no console do navegador (<Text style={styles.tag}>A soma é: 15</Text>).</Text>

            <Text style={styles.subtitulo}>🌐 4. Se comunicar com servidores</Text>

            <Text style={styles.descricao}> Com JavaScript, é possível enviar e receber dados sem recarregar a página (técnica chamada de AJAX).{'\n'}
            Isso é o que faz com que sites modernos sejam rápidos e dinâmicos, como o Gmail ou o Facebook.</Text>

            <Text style={styles.subtitulo}>📱 5. Criar aplicativos completos</Text>

            <Text style={styles.descricao}> Hoje, o JavaScript vai muito além do navegador.{'\n'}
             Ele pode ser usado para:{'\n'}{'\n'}
            • Criar aplicações web completas (com React, Angular, Vue).{'\n'}{'\n'}

            • Fazer aplicações mobile (com React Native).{'\n'}{'\n'}

            • Criar servidores e APIs (com Node.js).{'\n'}{'\n'}

            • E até jogos e inteligência artificial!</Text>

            <Text style={styles.subtitulo}>💬 Resumindo</Text>

            <Text style={styles.descricao}>
             O JavaScript é capaz de:{'\n'}{'\n'}
            • Controlar o conteúdo e o estilo das páginas.{'\n'}{'\n'}

            • Reagir às ações do usuário.{'\n'}{'\n'}

            • Fazer cálculos e processar informações.{'\n'}{'\n'}

            • Trocar dados com servidores.{'\n'}{'\n'}
            • E até rodar fora do navegador! </Text>            
                                                
            <Text style={styles.subtitulo}>Recursos Adicionais 🎥</Text>

            <View style={styles.videoContainer}>
                <Text style={styles.videoTitle}>Tutorial: O que o JS é capaz de fazer</Text>
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
                    📹 Este vídeo demonstra os conceitos de JavaScript que acabamos de aprender.
                </Text>
            </View>
            
            <Text style={styles.subtitulo}>Desafio  🎯</Text>
            
            <Text style={styles.descricao}> Crie um arquivo HTML com o seguinte comportamento:</Text>
            <Text style={styles.descricao}> - Um botão com o texto “Clique aqui”.</Text>
            <Text style={styles.descricao}> - Quando o botão for clicado, mostre uma mensagem na tela dizendo “Olá, seja bem-vindo ao JavaScript!”.</Text>
            <Text style={styles.descricao}> 💬 Dica: use a função <Text style={styles.tag}>alert()</Text> dentro da tag <Text style={styles.tag}>&lt;script&gt;</Text>.</Text>

            <Text style={styles.subtitulo}>Conclusão do Módulo 1  🎉</Text>

            <Text style={styles.descricao}> Parabéns por concluir o primeiro módulo de JavaScript!{'\n'}{'\n'}
                Agora você entende o que essa linguagem é capaz de fazer e como ela dá vida às páginas da web.{'\n'}
                A partir daqui, você vai começar a escrever seus próprios scripts, aprender a usar variáveis, operadores e funções, e transformar suas ideias em ações interativas dentro do navegador.</Text>
           
            <View style={styles.containerInferior}>
                    <Text style={styles.textoBotao}>Próximo Módulo: Variáveis e Tipos de Dados em JavaScript</Text>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.replace("CursoJS2")}>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="#fff" />
                </TouchableOpacity>
           </View>
           
            </ScrollView>
            </>
    );
}
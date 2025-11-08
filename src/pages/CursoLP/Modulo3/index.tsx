import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions, Linking } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { VideoView, useVideoPlayer } from "expo-video";
import { Audio } from "expo-av";


export default function CursoLP3() {
    const navigation = useNavigation<any>();
    const screenWidth = Dimensions.get('window').width;

    const player = useVideoPlayer(require('../../../Assets/CursoLP3.mp4'), player => {
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
            <Text style={styles.titulo}>Módulo 3 – Estruturas Condicionais na Lógica de Programação</Text>
        </View>
            <Text style={styles.subtitulo}>Objetivo do Módulo 3  💪🏻</Text>

            <Text style={styles.descricao}> Compreender o que são estruturas condicionais, como utilizá-las para tomar decisões no código e como elas ajudam a controlar o fluxo de execução dos programas.</Text>

            <Text style={styles.subtitulo}>📘 O que são Estruturas Condicionais</Text>

            <Text style={styles.descricao}>As estruturas condicionais permitem que o programa execute diferentes ações dependendo de uma condição (verdadeira ou falsa).{'\n'}
                Elas são fundamentais para que o programa se torne dinâmico e reaja a diferentes cenários.</Text>

            <Text style={styles.descricao}>💡 Condicionais são como perguntas que o computador faz e, com base na resposta, decide qual caminho seguir.</Text>

            <Text style={styles.subtitulo}>🧠 Comando <Text style={styles.tag}> if </Text></Text>

            <Text style={styles.descricao}> O comando <Text style={styles.tag}> if </Text> é usado para executar um bloco de código se verifica uma condição. Se a condição for verdadeira, o código dentro do bloco <Text style={styles.tag}> if </Text> será executado.</Text>

            <Text style={styles.subtitulo}>🧾 Sintaxe básica:</Text>

            <Image source={require('../../../Assets/LP3.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.subtitulo}>💬 Exemplo prático:</Text>

            <Image source={require('../../../Assets/LP3.1.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.descricao}> 👉 Neste exemplo, a mensagem será exibida porque a condição <Text style={styles.tag}> idade &gt;= 18 </Text> é verdadeira.</Text>

            <Text style={styles.subtitulo}> ⚙️ Comando <Text style={styles.tag}> else </Text></Text>

            <Text style={styles.descricao}>O comando <Text style={styles.tag}> else </Text> é usado para definir o que fazer se a condição não for verdadeira.</Text>

           <Image source={require('../../../Assets/LP3.2.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.descricao}>👉 Como a condição <Text style={styles.tag}> idade &gt;= 18 </Text> é falsa, o código dentro do <Text style={styles.tag}> else </Text> será executado.</Text>

            <Text style={styles.subtitulo}> 🔄 Comando else if</Text>

            <Text style={styles.descricao}>O comando <Text style={styles.tag}> else if </Text> permite adicionar várias condições a serem verificadas em sequência. Ele verifica se uma nova condição é verdadeira após a falha de uma anterior.</Text>

            <Image source={require('../../../Assets/LP3.3.png')} style={styles.imagem} resizeMode="contain" /> 

            <Text style={styles.descricao}>👉 Aqui, dependendo do valor da variável <Text style={styles.tag}> nota </Text>, o programa exibirá uma das três mensagens.</Text>

            <Text style={styles.subtitulo}> 🔁 Comando switch </Text>

            <Text style={styles.descricao}>O comando <Text style={styles.tag}> switch </Text> é usado para selecionar uma entre várias opções com base no valor de uma variável. É uma alternativa mais organizada quando se tem muitas condições para verificar.</Text>

            <Text style={styles.subtitulo}>🧾 Sintaxe básica:</Text>

            <Image source={require('../../../Assets/LP3.4.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.subtitulo}>💬 Exemplo prático:</Text>

            <Image source={require('../../../Assets/LP3.5.png')} style={styles.imagem} resizeMode="stretch" />

            <Text style={styles.descricao}>👉 O programa verificará o valor de<Text style={styles.tag}> cor </Text> e executará o código correspondente ao caso "verde".</Text>

            <Text style={styles.subtitulo}>Recursos Adicionais 🎥</Text>

            <View style={styles.videoContainer}>
                <Text style={styles.videoTitle}>Tutorial: Estruturas Condicionais na Lógica de Programação</Text>
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
                    📹 Este vídeo demonstra os conceitos de Estruturas Condicionais que acabamos de aprender.
                </Text>
            </View>
            
            <Text style={styles.subtitulo}>Desafio  🎯</Text>

            <Text style={styles.descricao}> Crie um programa que:</Text>
            <Text style={styles.descricao}> - Peça ao usuário para inserir um número.</Text>
            <Text style={styles.descricao}> - Verifique se o número é positivo, negativo ou zero e exiba uma mensagem correspondente utilizando <Text style={styles.tag}> if </Text>, <Text style={styles.tag}> else if </Text> e <Text style={styles.tag}> else </Text>.</Text>
            <Text style={styles.descricao}>💬 Dica: use a <Text style={styles.tag}> prompt() </Text> para capturar o valor e <Text style={styles.tag}> parseInt() </Text> para garantir que o valor seja tratado como número.</Text>


        
            <Text style={styles.subtitulo}>Conclusão do Módulo 3  🎉</Text>

            <Text style={styles.descricao}>Parabéns por concluir o terceiro módulo de Lógica de Programação! {'\n'}{'\n'}
            Agora você entende como usar estruturas condicionais para tomar decisões em seus programas.{'\n'}
            Esses comandos ajudam seu código a ser mais dinâmico e capaz de reagir de acordo com as informações fornecidas.</Text>
           
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
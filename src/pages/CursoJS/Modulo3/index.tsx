import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions, Linking } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { VideoView, useVideoPlayer } from "expo-video";
import { Audio } from "expo-av";


export default function CursoJS3() {
    const navigation = useNavigation<any>();
    const screenWidth = Dimensions.get('window').width;

    const player = useVideoPlayer(require('../../../Assets/CursoJS3.mp4'), player => {
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
            <Text style={styles.titulo}>Módulo 3 – Funções em JavaScript</Text>
        </View>
            <Text style={styles.subtitulo}>Objetivo do Módulo 3  💪🏻</Text>

            <Text style={styles.descricao}> Ensinar como usar funções em JavaScript para organizar e reutilizar código.</Text>

            <Text style={styles.subtitulo}>O que são funções em JavaScript ❓</Text>

            <Text style={styles.descricao}>Uma função é um bloco de código reutilizável que executa uma tarefa específica.
            Você pode definir uma vez e chamar sempre que precisar.{'\n'}{'\n'}
             💡 Pense em uma função como uma “máquina”: você coloca uma entrada (valores), ela faz algo e te devolve uma saída (resultado).</Text>

            <Text style={styles.subtitulo}>🧠 Por que usar funções</Text>

            <Text style={styles.descricao}> As funções ajudam a:{'\n'}{'\n'}
                • Organizar o código em blocos lógicos.
                {'\n'}
                • Reutilizar código, evitando repetições.
                {'\n'}
                • Facilitar a manutenção e atualização do código.
                {'\n'}
                • Melhorar a legibilidade e compreensão do código.
            </Text>

            <Text style={styles.subtitulo}>🧾 Sintaxe básica</Text>

            <Image source={require('../../../Assets/JS3.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.descricao}> E para executar (ou “chamar”) a função:</Text>

            <Image source={require('../../../Assets/JS3.1.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.subtitulo}> 💬 Exemplo simples </Text>

            <Image source={require('../../../Assets/JS3.3.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.subtitulo}> ⚙️ Funções com parâmetros</Text>

            <Text style={styles.descricao}>Você pode criar funções que recebem valores (parâmetros) e trabalham com eles.</Text>

            <Image source={require('../../../Assets/JS3.4.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.descricao}> 🔹 Aqui, <Text style={styles.tag}> a </Text> e <Text style={styles.tag}> b </Text> são parâmetros que recebem valores quando a função é chamada.</Text>

            <Text style={styles.subtitulo}>🔁 Funções que retornam valores</Text>

            <Text style={styles.descricao}> Algumas funções devolvem um resultado usando a palavra-chave <Text style={styles.tag}> return </Text>.</Text>

            <Image source={require('../../../Assets/JS3.5.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.descricao}>👉 A função calcula e retorna o valor da multiplicação.</Text>

            <Text style={styles.subtitulo}>⚡ Funções anônimas e arrow functions</Text>

             <Text style={styles.descricao}>Além da forma tradicional, você pode criar funções mais curtas usando arrow functions ( ⇒ ).</Text>

             <Image source={require('../../../Assets/JS3.6.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.descricao}>💡 Ideal para funções simples e rápidas.</Text>

            <Text style={styles.subtitulo}>🧩 Exemplo completo</Text>

            <Image source={require('../../../Assets/JS3.7.png')} style={styles.imagem} resizeMode="contain" />            

            <Text style={styles.descricao}> 👉 O navegador mostrará:{'\n'}{'\n'}
                “Olá, meu nome é Gabriel e tenho 27 anos.”</Text>
                                                            
            <Text style={styles.subtitulo}>Recursos Adicionais 🎥</Text>

            <View style={styles.videoContainer}>
                <Text style={styles.videoTitle}>Tutorial: Funções em JavaScript</Text>
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
                    📹 Este vídeo demonstra os conceitos de funções em JavaScript que acabamos de aprender.
                </Text>
            </View>
            
            <Text style={styles.subtitulo}>Desafio  🎯</Text>

            <Text style={styles.descricao}> Crie um arquivo HTML com JavaScript que: </Text>
            <Text style={styles.descricao}> - Tenha uma função chamada calcularDobro que receba um número como parâmetro.</Text>
            <Text style={styles.descricao}> - A função deve retornar o dobro desse número.</Text> 
            <Text style={styles.descricao}> - Mostre o resultado na tela usando{'\n'}<Text style={styles.tag}> document.write() </Text> ou <Text style={styles.tag}> console.log() </Text>.</Text>
            <Text style={styles.descricao}> - 💬 Dica: teste sua função com diferentes valores!</Text>
        
            <Text style={styles.subtitulo}>Conclusão do Módulo 3  🎉</Text>

            <Text style={styles.descricao}>Parabéns por concluir o terceiro módulo de JavaScript!{'\n'}{'\n'}
            Agora você domina o conceito de funções, uma das partes mais importantes da programação.{'\n'}
            Você aprendeu como organizar o código em blocos reutilizáveis, tornando seus programas mais limpos e inteligentes.{'\n'}</Text>
           
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
import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions, Linking } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { VideoView, useVideoPlayer } from "expo-video";
import { Audio } from "expo-av";


export default function CursoLP2() {
    const navigation = useNavigation<any>();
    const screenWidth = Dimensions.get('window').width;

    const player = useVideoPlayer(require('../../../Assets/CursoLP2.mp4'), player => {
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
            <Text style={styles.titulo}> Módulo 2 – Funções na Lógica de Programação </Text>
        </View>
            <Text style={styles.subtitulo}>Objetivo do Módulo 2  💪🏻</Text>

            <Text style={styles.descricao}> Compreender o que são funções na lógica de programação, como criá-las, como usá-las para organizar o código e como fazer o código ser mais reutilizável e modular.</Text>

            <Text style={styles.subtitulo}>📘 O que são funções na programação</Text>

            <Text style={styles.descricao}>Uma função é um bloco de código que executa uma tarefa específica e pode ser reutilizado várias vezes ao longo do programa.{'\n'}
             Ela pode receber entradas (parâmetros), realizar operações e retornar um resultado.</Text>

            <Text style={styles.descricao}>💡 Funções ajudam a organizar o código, evitando a repetição de tarefas e tornando o programa mais fácil de entender e manter.
            </Text>

            <Text style={styles.subtitulo}>🧠 Como criar uma função</Text> 

            <Text style={styles.descricao}>Para criar uma função, usamos a palavra-chave <Text style={styles.tag}>function</Text>, seguida do nome da função, parâmetros e as instruções que ela deve executar.</Text>

            <Text style={styles.subtitulo}> 🧾 Sintaxe básica:</Text>


            <Image source={require('../../../Assets/LP2.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.descricao}> E para chamar (executar) a função, você usa o nome dela com os valores para os parâmetros.</Text>

            <Image source={require('../../../Assets/LP2.1.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.subtitulo}> 💬 Exemplo básico de função</Text>

            <Image source={require('../../../Assets/LP2.2.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.descricao}>📌 Explicando:{'\n'}{'\n'}
            • A função <Text style={styles.tag}> saudacao </Text> não recebe parâmetros e simplesmente exibe uma mensagem.</Text>

            <Text style={styles.subtitulo}> ⚙️ Funções com parâmetros</Text>

            <Text style={styles.descricao}> Funções podem receber dados de entrada (chamados de parâmetros), realizar algum processo e retornar um valor.</Text>

            <Image source={require('../../../Assets/LP2.3.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.descricao}> 👉 Aqui, a função <Text style={styles.tag}> soma </Text> recebe dois números como parâmetros e retorna a soma deles. </Text>
            
            <Text style={styles.subtitulo}>🔁 Funções com múltiplos parâmetros</Text>

            <Text style={styles.descricao}> Funções podem receber quantos parâmetros forem necessários, o que permite fazer cálculos ou operações mais complexas.</Text>

            <Image source={require('../../../Assets/LP2.4.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.subtitulo}> 🧩 Funções com retorno</Text>

            <Text style={styles.descricao}> O valor retornado pela função pode ser armazenado em uma variável e utilizado posteriormente.</Text>

            <Image source={require('../../../Assets/LP2.5.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.descricao}> Aqui, a função <Text style={styles.tag}> quadrado </Text> recebe um número e retorna o valor do seu quadrado.</Text>
        
            <Text style={styles.subtitulo}>Recursos Adicionais 🎥</Text>

            <View style={styles.videoContainer}>
                <Text style={styles.videoTitle}>Tutorial: Funções na Lógica de Programação</Text>
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
                    📹 Este vídeo demonstra os conceitos de Funções na Lógica de Programação que acabamos de aprender.
                </Text>
            </View>
            
            <Text style={styles.subtitulo}>Desafio  🎯</Text>
            
            <Text style={styles.descricao}> Crie uma função chamada areaCirculo que:</Text>
            <Text style={styles.descricao}> - Receba o raio de um círculo como parâmetro.</Text>
            <Text style={styles.descricao}> - Calcule e retorne a área do círculo, usando a fórmula: <Text style={styles.tag}> área = π * raio² </Text>.</Text>
            <Text style={styles.descricao}> - Mostre o resultado usando <Text style={styles.tag}> alert() </Text> ou <Text style={styles.tag}>console.log().</Text></Text>
            <Text style={styles.descricao}>💬 Dica: use o valor de <Text style={styles.tag}> π </Text> como <Text style={styles.tag}> 3.14 </Text>.</Text>

            <Text style={styles.subtitulo}>Conclusão do Módulo 2 🎉</Text>

            <Text style={styles.descricao}> Parabéns por concluir o segundo módulo de Lógica de Programação!{'\n'}{'\n'}
            Agora você entende como criar e usar funções para organizar e reutilizar o código.{'\n'}
            Com funções, você pode tornar seus programas mais modulares e fáceis de manter.{'\n'}
            No próximo módulo, você aprenderá sobre estruturas condicionais, que permitem ao programa tomar decisões com base em diferentes condições.
            </Text>

            <View style={styles.containerInferior}>
                    <Text style={styles.textoBotao}>Próximo Módulo: Trabalhando com o Modelo Relacional</Text>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.replace("CursoLP3") }>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="#fff" />
                </TouchableOpacity>
           </View>
           
            </ScrollView>
            </>
    );
}
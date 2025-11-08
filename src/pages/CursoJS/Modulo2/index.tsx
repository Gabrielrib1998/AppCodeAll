import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions, Linking } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { VideoView, useVideoPlayer } from "expo-video";
import { Audio } from "expo-av";


export default function CursoJS2() {
    const navigation = useNavigation<any>();
    const screenWidth = Dimensions.get('window').width;

    const player = useVideoPlayer(require('../../../Assets/CursoJS2.mp4'), player => {
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
            <Text style={styles.titulo}>Módulo 2 – Variáveis e Tipos de Dados em JavaScript </Text>
        </View>
            <Text style={styles.subtitulo}>Objetivo do Módulo 2  💪🏻</Text>

            <Text style={styles.descricao}> Aprender o que são variáveis, como declará-las e quais tipos de dados podem ser armazenados nelas.</Text>

            <Text style={styles.subtitulo}>O que são variáveis em JavaScript ❓</Text>

            <Text style={styles.descricao}>Variáveis são espaços nomeados na memória que armazenam valores. Elas permitem que você armazene, modifique e recupere dados em seu código.</Text>

            <Text style={styles.descricao}>
            💡 Pense em uma variável como um apelido para um valor.
            </Text>

            <Text style={styles.subtitulo}>🧠 Como criar uma variável</Text> 

            <Text style={styles.descricao}>Em JavaScript, usamos as palavras<Text style={styles.tag}>let</Text>, <Text style={styles.tag}>const</Text> e <Text style={styles.tag}>var</Text> para declarar variáveis. Aqui está um exemplo:</Text>

            <Image source={require('../../../Assets/JS2.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.descricao}>📌 Diferenças básicas: {'\n'}
            <Text style={styles.tag}>let</Text> → variável que pode mudar de valor. {'\n'}
            <Text style={styles.tag}>const</Text> → variável que não pode mudar de valor. {'\n'}
            <Text style={styles.tag}>var</Text> → variável que pode ser reatribuída, mas tem escopo de função.</Text>

            <Text style={styles.subtitulo}> 💬 Exemplo prático </Text>

            <Image source={require('../../../Assets/JS2.1.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.subtitulo}>👉 O navegador exibirá:</Text>

            <Image source={require('../../../Assets/JS2.2.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.subtitulo}>🧩 Tipos de dados em JavaScript</Text>

            <Image source={require('../../../Assets/CSS2.1.png')} style={[styles.imagem, { width: screenWidth }]} resizeMode="stretch" />

            
            <View style={styles.tableContainer}>
                <View style={styles.table}>
                    <View style={[styles.tableRow, styles.tableHeader]}>
                        <View style={[styles.tableCell, { flex: 2 }]}> 
                            <Text style={styles.tableHeaderText}>Tipo de Dado</Text>
                        </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> 
                            <Text style={styles.tableHeaderText}>Exemplo</Text>
                        </View>
                        <View style={[styles.tableCellLast, { flex: 4 }]}> 
                            <Text style={styles.tableHeaderText}>Descrição</Text>
                        </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>String</Text> </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>'Olá'</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 4 }]}> <Text style={styles.tableCellText}>Texto (sempre entre aspas)</Text> </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>Number</Text> </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>10, 3.14</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 4 }]}> <Text style={styles.tableCellText}>Números inteiros ou decimais</Text> </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>Boolean</Text> </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>true / false</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 4 }]}> <Text style={styles.tableCellText}>Verdadeiro ou falso</Text> </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>Undefined</Text> </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>undefined</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 4 }]}> <Text style={styles.tableCellText}>Variável declarada mas sem valor</Text> </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>Null</Text> </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>null</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 4 }]}> <Text style={styles.tableCellText}>Ausência intencional de valor</Text> </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>Object</Text> </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>{'{nome: "João", idade: 30}'}</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 4 }]}> <Text style={styles.tableCellText}>Estrutura com vários valores</Text> </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>Array</Text> </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>['maçã','banana','uva']</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 4 }]}> <Text style={styles.tableCellText}>Lista de valores</Text> </View>
                    </View>

                </View>
            </View>

            <Text style={styles.subtitulo}> 🧾 Exemplo com diferentes tipos</Text>
        
            <Image source={require('../../../Assets/JS2.3.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.subtitulo}>⚙️ Concatenando valores</Text>

            <Text style={styles.descricao}> Você pode juntar textos e variáveis com o operador <Text style={styles.tag}> + </Text> ou usando template strings (crases <Text style={styles.tag}> ` </Text> ):</Text>

            <Image source={require('../../../Assets/JS2.4.png')} style={styles.imagem} resizeMode="contain" />      
                                                
            <Text style={styles.subtitulo}>Recursos Adicionais 🎥</Text>

            <View style={styles.videoContainer}>
                <Text style={styles.videoTitle}>Tutorial: Variáveis e Tipos de Dados em JavaScript</Text>
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
                    📹 Este vídeo demonstra os conceitos de Variáveis e Tipos de Dados em JavaScript que acabamos de aprender.
                </Text>
            </View>
            
            <Text style={styles.subtitulo}>Desafio  🎯</Text>
            
            <Text style={styles.descricao}> Crie um arquivo HTML com JavaScript que:</Text>
            <Text style={styles.descricao}> - Tenha três variáveis: nome, idade e cidade.</Text>
            <Text style={styles.descricao}> - Exiba uma frase no navegador como esta: {'\n'}{'\n'} “Olá, meu nome é [nome], tenho [idade] anos e moro em [cidade].”</Text>
            <Text style={styles.descricao}> - Use template strings para montar a frase.</Text>
            <Text style={styles.descricao}> 💬 Dica: use <Text style={styles.tag}>document.write()</Text> ou <Text style={styles.tag}>console.log()</Text> para mostrar o resultado.</Text>

            <Text style={styles.subtitulo}>Conclusão do Módulo 2 🎉</Text>

            <Text style={styles.descricao}> Parabéns por concluir o segundo módulo de JavaScript!{'\n'}{'\n'}
            Agora você já entende como armazenar e manipular informações usando variáveis e conhece os principais tipos de dados da linguagem.{'\n'}
            Esses conceitos são a base de toda a programação.{'\n'}
            No próximo módulo, você vai aprender a trabalhar com funções, que permitem realizar cálculos, comparações e lógicas para dar mais poder ao seu código.
            </Text>

            <View style={styles.containerInferior}>
                    <Text style={styles.textoBotao}>Próximo Módulo: Trabalhando com funções</Text>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.replace("CursoJS3")}>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="#fff" />
                </TouchableOpacity>
           </View>
           
            </ScrollView>
            </>
    );
}
import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions, Linking } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { VideoView, useVideoPlayer } from "expo-video";
import { Audio } from "expo-av";


export default function CursoLP1() {
    const navigation = useNavigation<any>();
    const screenWidth = Dimensions.get('window').width;

    const player = useVideoPlayer(require('../../../Assets/CursoLP1.mp4'), player => {
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
            <Text style={styles.titulo}>Módulo 1 – Comandos de Entrada e Operadores</Text>
        </View>
            <Text style={styles.subtitulo}>Objetivo do Módulo 1  💪🏻</Text>

            <Text style={styles.descricao}> Entender como o computador recebe dados (entradas) e como usar operadores matemáticos e lógicos para processar essas informações e gerar resultados.</Text>
            
            <Text style={styles.subtitulo}>📘 O que é Lógica de Programação</Text>

            <Text style={styles.descricao}>A lógica de programação é a base de toda linguagem de código.
Ela envolve pensar passo a passo, criando sequências lógicas de instruções para resolver um problema.</Text>

            <Text style={styles.descricao}>💡 Antes de programar, é essencial saber como estruturar o raciocínio que o computador deve seguir.</Text>

            <Text style={styles.subtitulo}>🧠 Comandos de entrada</Text>

            <Text style={styles.descricao}>Um comando de entrada é o que permite ao usuário informar dados ao programa.
Esses valores podem ser digitados e depois utilizados em cálculos, decisões ou exibições.</Text>

            <Text style={styles.subtitulo}>🧾 Exemplo em JavaScript:</Text>

            <Image source={require('../../../Assets/LP1.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.descricao}>📌 Explicando: {'\n'}{'\n'}
            <Text style={styles.tag}> prompt() </Text> → recebe dados digitados pelo usuário.{'\n'}
            <Text style={styles.tag}> alert() </Text> → exibe uma mensagem na tela.{'\n'}
            <Text style={styles.tag}> + </Text> → concatena (junta) textos e variáveis.
            </Text>

            <View style={styles.tableContainer}>
                <View style={styles.table}>
                    <View style={[styles.tableRow, styles.tableHeader]}>
                        <View style={[styles.tableCell, { flex: 2 }]}> 
                            <Text style={styles.tableHeaderText}>Operador</Text>
                        </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> 
                            <Text style={styles.tableHeaderText}>Exemplo</Text>
                        </View>
                        <View style={[styles.tableCellLast, { flex: 4 }]}> 
                            <Text style={styles.tableHeaderText}>Resultado</Text>
                        </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}><Text style={styles.tag}> + </Text></Text> </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>5 + 3</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 4 }]}> <Text style={styles.tableCellText}>8</Text> </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}><Text style={styles.tag}> - </Text></Text> </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>10 - 2</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 4 }]}> <Text style={styles.tableCellText}>8</Text> </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}><Text style={styles.tag}> * </Text></Text> </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>4 * 2</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 4 }]}> <Text style={styles.tableCellText}>8</Text> </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}><Text style={styles.tag}> / </Text></Text> </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>20 / 4</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 4 }]}> <Text style={styles.tableCellText}>5</Text> </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}><Text style={styles.tag}> % </Text></Text> </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>10 % 3</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 4 }]}> <Text style={styles.tableCellText}>1 (resto da divisão)</Text> </View>
                    </View>
                </View>
            </View>

            <Text style={styles.subtitulo}>💬 Exemplo prático:</Text>

            <Image source={require('../../../Assets/LP1.2.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.subtitulo}>🔍 Operadores relacionais</Text>

            <Text style={styles.descricao}>Comparam valores e retornam verdadeiro (true) ou falso (false). </Text>

            <View style={styles.tableContainer}>
                <View style={styles.table}>
                    <View style={[styles.tableRow, styles.tableHeader]}>
                        <View style={[styles.tableCell, { flex: 2 }]}> 
                            <Text style={styles.tableHeaderText}>Operador</Text>
                        </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> 
                            <Text style={styles.tableHeaderText}>Significado</Text>
                        </View>
                        <View style={[styles.tableCellLast, { flex: 2 }]}> 
                            <Text style={styles.tableHeaderText}>Exemplo</Text>
                        </View>
                        <View style={[styles.tableCellLast, { flex: 2 }]}> 
                            <Text style={styles.tableHeaderText}>Resultado</Text>
                        </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}><Text style={styles.tag}> == </Text></Text> </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>Igual a</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 2 }]}> <Text style={styles.tableCellText}>5 == 5</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 2 }]}> <Text style={styles.tableCellText}>true</Text> </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}><Text style={styles.tag}> != </Text></Text> </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>Diferente de</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 2 }]}> <Text style={styles.tableCellText}>5 != 3</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 2 }]}> <Text style={styles.tableCellText}>true</Text> </View>     
                    </View>

                    <View style={styles.tableRow}>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}><Text style={styles.tag}> &gt; </Text></Text> </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>Maior que</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 2 }]}> <Text style={styles.tableCellText}>10 &gt; 5</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 2 }]}> <Text style={styles.tableCellText}>true</Text> </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}><Text style={styles.tag}> &lt; </Text></Text> </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>Menor que</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 2 }]}> <Text style={styles.tableCellText}>2 &lt; 5</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 2 }]}> <Text style={styles.tableCellText}>true</Text> </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}><Text style={styles.tag}> &gt;= </Text></Text> </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>Maior ou igual</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 2 }]}> <Text style={styles.tableCellText}>7 &gt;= 7</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 2 }]}> <Text style={styles.tableCellText}>true</Text> </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}><Text style={styles.tag}> &lt;= </Text></Text> </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>Menor ou igual</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 2 }]}> <Text style={styles.tableCellText}>2 &lt;= 5</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 2 }]}> <Text style={styles.tableCellText}>true</Text> </View>
                    </View>
                </View>
            </View>

            <Text style={styles.subtitulo}>🧩 Operadores lógicos</Text>
            <Text style={styles.descricao}>Usados para combinar múltiplas condições e retornar verdadeiro (true) ou falso (false).</Text>

            <View style={styles.tableContainer}>
                <View style={styles.table}>
                    <View style={[styles.tableRow, styles.tableHeader]}>
                        <View style={[styles.tableCell, { flex: 2 }]}> 
                            <Text style={styles.tableHeaderText}>Operador</Text>
                        </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> 
                            <Text style={styles.tableHeaderText}>Significado</Text>
                        </View>
                        <View style={[styles.tableCellLast, { flex: 2 }]}> 
                            <Text style={styles.tableHeaderText}>Exemplo</Text>
                        </View>
                        <View style={[styles.tableCellLast, { flex: 2 }]}> 
                            <Text style={styles.tableHeaderText}>Resultado</Text>
                        </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}><Text style={styles.tag}> && </Text></Text> </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>E (AND)</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 3 }]}> <Text style={styles.tableCellText}>(5 &gt; 2 && 3 &lt;; 4)</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 2 }]}> <Text style={styles.tableCellText}>true</Text> </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}> ` </Text> </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}></Text> </View>
                        <View style={[styles.tableCellLast, { flex: 3 }]}> <Text style={styles.tableCellText}>`</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 2 }]}> <Text style={styles.tableCellText}>Ou (OR)</Text> </View>     
                    </View>

                    <View style={styles.tableRow}>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}><Text style={styles.tag}> ! </Text></Text> </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>Não (NOT)</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 3 }]}> <Text style={styles.tableCellText}>!(5 &gt; 2)</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 2 }]}> <Text style={styles.tableCellText}>false</Text> </View>
                    </View>
                </View>
            </View>

            <Text style={styles.subtitulo}>💡 Exemplo completo</Text>

            <Image source={require('../../../Assets/LP1.3.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.subtitulo}>Recursos Adicionais 🎥</Text>

            <View style={styles.videoContainer}>
                <Text style={styles.videoTitle}>Tutorial: Comandos de Entrada e Operadores</Text>
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
                    📹 Este vídeo demonstra os conceitos de Comandos de Entrada e Operadores que acabamos de aprender.
                </Text>
            </View>
            
            <Text style={styles.subtitulo}>Desafio  🎯</Text>
            
            <Text style={styles.descricao}> Crie um pequeno programa que:</Text>
            <Text style={styles.descricao}> - Peça ao usuário dois números.
            </Text>
            <Text style={styles.descricao}> - Calcule e exiba a soma, subtração, multiplicação e divisão desses números.</Text>
            <Text style={styles.descricao}> - Mostre o resultado com  <Text style={styles.tag}> alert() </Text> e <Text style={styles.tag}>console.log(). </Text></Text>
            <Text style={styles.descricao}> - 💬 Dica: use a <Text style={styles.tag}> Number(prompt(...)) </Text> para converter a entrada em número.</Text>


            <Text style={styles.subtitulo}>Conclusão do Módulo 1  🎉</Text>

            <Text style={styles.descricao}> Parabéns por concluir o primeiro módulo de Lógica de Programação! {'\n'}{'\n'}
                  Agora você entende como receber dados do usuário e usar operadores para processar informações e tomar decisões simples.{'\n'}
                  Esses conceitos são fundamentais para qualquer linguagem.{'\n'}
                 No próximo módulo, você aprenderá a criar e usar funções, tornando o código mais organizado e reutilizável.</Text>
           
            <View style={styles.containerInferior}>
                    <Text style={styles.textoBotao}>Próximo Módulo: Funções</Text>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.replace("CursoLP2") }>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="#fff" />
                </TouchableOpacity>
           </View>
           
            </ScrollView>
            </>
    );
}
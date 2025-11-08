import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions, Linking } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { VideoView, useVideoPlayer } from "expo-video";
import { Audio } from "expo-av";


export default function CursoSQL1() {
    const navigation = useNavigation<any>();
    const screenWidth = Dimensions.get('window').width;

    const player = useVideoPlayer(require('../../../Assets/CursoSQL1.mp4'), player => {
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
            <Text style={styles.titulo}>Módulo 1 – Criando o Primeiro Banco de Dados</Text>
        </View>
            <Text style={styles.subtitulo}>Objetivo do Módulo 1  💪🏻</Text>

            <Text style={styles.descricao}> Aprender o que é um banco de dados, entender sua função e criar o primeiro banco de dados utilizando comandos básicos de SQL.</Text>
            
            <Text style={styles.subtitulo}>📘 O que é um Banco de Dados</Text>

            <Text style={styles.descricao}>Um banco de dados é um sistema que armazena, organiza e gerencia informações de forma estruturada.
            Ele é essencial para qualquer sistema que precise guardar dados de forma permanente, como cadastros, produtos, vendas, usuários etc.</Text>

            <Text style={styles.descricao}>💡 Pense nele como uma “planilha inteligente”, capaz de armazenar, buscar e atualizar dados de maneira rápida e segura.</Text>

            <Text style={styles.subtitulo}>🧠 O que é SQL</Text>

            <Text style={styles.descricao}>SQL (Structured Query Language) é a linguagem padrão para interagir com bancos de dados relacionais. Com SQL, você pode criar, ler, atualizar e excluir dados de forma eficiente.</Text>

            <Text style={styles.subtitulo}>⚙️ Criando o primeiro banco de dados</Text>

            <Text style={styles.descricao}>- Para criar um banco de dados, usamos o comando <Text style={styles.tag}>CREATE DATABASE.</Text></Text>

            <Image source={require('../../../Assets/SQL1.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.descricao}> 👉 Esse comando cria um banco chamado “loja”.</Text>

            <Text style={styles.subtitulo}>Para usar esse banco:</Text>

            <Image source={require('../../../Assets/SQL1.2.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.subtitulo}>🧾 Criando uma tabela</Text>

            <Text style={styles.descricao}>Dentro do banco, criamos tabelas, que são como planilhas que armazenam dados organizados em colunas e linhas.{'\n'}{'\n'} Exemplo: </Text>

            <Image source={require('../../../Assets/SQL1.3.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.descricao}>📌 Explicando: {'\n'}{'\n'}
            <Text style={styles.tag}> id </Text> → identificador único do produto.{'\n'}
            <Text style={styles.tag}> nome </Text> → nome do produto.{'\n'}
            <Text style={styles.tag}> preco </Text> → preço do produto.{'\n'}
            <Text style={styles.tag}> estoque </Text> → quantidade disponível do produto.
            </Text>

            <Text style={styles.subtitulo}>💡 Inserindo dados na tabela</Text>

            <Text style={styles.descricao}> Podemos adicionar informações com o comando <Text style={styles.tag}> INSERT INTO: </Text></Text>

            <Image source={require('../../../Assets/SQL1.4.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.subtitulo}>🧩 Visualizando os dados</Text>

            <Text style={styles.descricao}>Para ver o conteúdo da tabela, usamos:</Text>

            <Image source={require('../../../Assets/SQL1.5.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.descricao}> 👉 O <Text style={styles.tag}> * </Text> significa “mostrar todas as colunas”.</Text>

            <Text style={styles.subtitulo}>Recursos Adicionais 🎥</Text>

            <View style={styles.videoContainer}>
                <Text style={styles.videoTitle}>Tutorial: Criando o Primeiro Banco de Dados em SQL</Text>
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
                    📹 Este vídeo demonstra os conceitos de SQL que acabamos de aprender.
                </Text>
            </View>
            
            <Text style={styles.subtitulo}>Desafio  🎯</Text>
            
            <Text style={styles.descricao}> Crie um banco de dados chamado “escola” e dentro dele:</Text>
            <Text style={styles.descricao}> - Crie uma tabela chamada “alunos” com as colunas:{'\n'}{'\n'}

               • id (número inteiro e chave primária){'\n'}

               • nome (texto de até 100 caracteres){'\n'}

               • idade (número inteiro){'\n'}

               • serie (texto de até 20 caracteres)</Text>
            <Text style={styles.descricao}> - Insira três alunos na tabela com dados fictícios.</Text>
            <Text style={styles.descricao}> - Mostre todos os alunos cadastrados com o comando <Text style={styles.tag}>SELECT *</Text>.</Text>
            <Text style={styles.descricao}> - 💬 Dica: use a <Text style={styles.tag}> AUTO_INCREMENT </Text> no <Text style={styles.tag}> id </Text> para ele ser gerado automaticamente.</Text>


            <Text style={styles.subtitulo}>Conclusão do Módulo 1  🎉</Text>

            <Text style={styles.descricao}> Parabéns por concluir o primeiro módulo de Banco de Dados!{'\n'}{'\n'}
                  Agora você entende o que é um banco, como criá-lo e como montar suas primeiras tabelas com SQL.{'\n'}
                  Com esse conhecimento, você já consegue estruturar e armazenar informações de forma organizada.{'\n'}
                 No próximo módulo, você aprenderá a manipular as linhas das tabelas — inserindo, atualizando, excluindo e consultando registros de maneira prática.</Text>
           
            <View style={styles.containerInferior}>
                    <Text style={styles.textoBotao}>Próximo Módulo: Manipulando Linhas no Banco de Dados</Text>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.replace("CursoSQL2")}>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="#fff" />
                </TouchableOpacity>
           </View>
           
            </ScrollView>
            </>
    );
}
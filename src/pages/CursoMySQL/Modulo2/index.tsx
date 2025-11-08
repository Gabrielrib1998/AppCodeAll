import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions, Linking } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { VideoView, useVideoPlayer } from "expo-video";
import { Audio } from "expo-av";


export default function CursoSQL2() {
    const navigation = useNavigation<any>();
    const screenWidth = Dimensions.get('window').width;

    const player = useVideoPlayer(require('../../../Assets/CursoSQL2.mp4'), player => {
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
            <Text style={styles.titulo}> Módulo 2 – Manipulando Linhas no Banco de Dados </Text>
        </View>
            <Text style={styles.subtitulo}>Objetivo do Módulo 2  💪🏻</Text>

            <Text style={styles.descricao}> Aprender a inserir, atualizar, consultar e excluir informações de uma tabela utilizando os principais comandos SQL para manipulação de dados.</Text>

            <Text style={styles.subtitulo}>📘 O que são linhas em um banco de dados</Text>

            <Text style={styles.descricao}>Linhas, ou registros, são as entradas individuais em uma tabela de banco de dados. Cada linha contém dados sobre um único item ou entidade, organizados em colunas.</Text>

            <Text style={styles.descricao}>Cada linha em uma tabela representa um registro completo de informação.
            Por exemplo, em uma tabela de alunos, cada linha é um aluno diferente, com seus próprios dados.
                {'\n'}{'\n'}
            💡 Em SQL, chamamos essas linhas de registros (records).
            </Text>

            <Text style={styles.subtitulo}>🧠 Comandos básicos de manipulação (CRUD)</Text> 

            <Text style={styles.descricao}>Os comandos básicos de manipulação de dados em SQL são:</Text>

            <Text style={styles.descricao}>📌 <Text style={styles.tag}>CREATE</Text>: Cria uma nova tabela ou registro.</Text>
            <Text style={styles.descricao}>📌 <Text style={styles.tag}>READ</Text>: Lê ou consulta dados existentes.</Text>
            <Text style={styles.descricao}>📌 <Text style={styles.tag}>UPDATE</Text>: Atualiza dados existentes.</Text>
            <Text style={styles.descricao}>📌 <Text style={styles.tag}>DELETE</Text>: Exclui dados existentes.</Text>

            <Text style={styles.descricao}>Vamos ver cada uma delas em ação 👇</Text>

            <Text style={styles.subtitulo}> 🧾 1. Inserindo dados – <Text style={styles.tag}> INSERT INTO </Text></Text>

            <Text style={styles.descricao}> Para adicionar uma nova linha (registro) em uma tabela, usamos o comando <Text style={styles.tag}> INSERT INTO </Text> seguido do nome da tabela, das colunas e dos valores a serem inseridos.</Text>

            <Image source={require('../../../Assets/SQL2.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.descricao}>📌 Explicando:{'\n'}{'\n'}
            • <Text style={styles.tag}> alunos </Text> → nome da tabela.{'\n'}
            • <Text style={styles.tag}> (nome, idade, serie) </Text> → colunas que receberão valores.{'\n'}{'\n'}
            • <Text style={styles.tag}> VALUES </Text> → os valores que serão inseridos.
            </Text>

            <Text style={styles.subtitulo}> 🧾 2. Consultando dados – <Text style={styles.tag}> SELECT </Text></Text>

            <Text style={styles.descricao}> Usamos para buscar e visualizar os dados armazenados.</Text>

            <Image source={require('../../../Assets/SQL2.1.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.descricao}> 👉 O <Text style={styles.tag}> * </Text> mostra todas as colunas.</Text>
            
            <Text style={styles.subtitulo}>Você também pode buscar colunas específicas:</Text>

            <Image source={require('../../../Assets/SQL2.2.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.descricao}> E até filtrar resultados com <Text style={styles.tag}> WHERE </Text>:</Text>

            
            <Image source={require('../../../Assets/SQL2.3.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.subtitulo}> ✏️ 3. Atualizando dados – <Text style={styles.tag}> UPDATE </Text></Text>

            <Text style={styles.descricao}> Para modificar dados existentes em uma tabela, usamos o comando <Text style={styles.tag}> UPDATE </Text> seguido do nome da tabela e das alterações a serem feitas.</Text>
        
            <Image source={require('../../../Assets/SQL2.4.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.descricao}> ⚠️ Cuidado!{'\n'}{'\n'}
            Sem o <Text style={styles.tag}> WHERE </Text>, todos os registros da tabela seriam modificados.</Text>

            <Text style={styles.subtitulo}> 🗑️ 4. Deletando dados – <Text style={styles.tag}> DELETE </Text></Text>

            <Text style={styles.descricao}> Para remover dados de uma tabela, usamos o comando <Text style={styles.tag}> DELETE </Text> seguido do nome da tabela e da condição para a exclusão.</Text>

            <Image source={require('../../../Assets/SQL2.5.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.descricao}> ⚠️ ⚠️ Assim como no <Text style={styles.tag}> UPDATE </Text>, sem o <Text style={styles.tag}> WHERE </Text>, todos os registros da tabela seriam excluídos.</Text>
            
            <Text style={styles.subtitulo}>💡 Exemplo completo</Text>

            <Image source={require('../../../Assets/SQL2.6.png')} style={styles.imagem} resizeMode="contain" />      
                                                
            <Text style={styles.subtitulo}>Recursos Adicionais 🎥</Text>

            <View style={styles.videoContainer}>
                <Text style={styles.videoTitle}>Tutorial: Manipulando Linhas no Banco de Dados</Text>
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
                    📹 Este vídeo demonstra os conceitos de Manipulação de Linhas no Banco de Dados que acabamos de aprender.
                </Text>
            </View>
            
            <Text style={styles.subtitulo}>Desafio  🎯</Text>
            
            <Text style={styles.descricao}> Usando o banco de dados “escola” criado no módulo anterior:</Text>
            <Text style={styles.descricao}> - Insira três novos alunos com nomes e idades diferentes.</Text>
            <Text style={styles.descricao}> - Atualize a série de um deles usando <Text style={styles.tag}> UPDATE </Text>.</Text>
            <Text style={styles.descricao}> - Exclua um deles usando <Text style={styles.tag}> DELETE </Text>.</Text>
            <Text style={styles.descricao}> - Mostre todos os alunos cadastrados com o comando <Text style={styles.tag}> SELECT * </Text>.</Text>
            <Text style={styles.descricao}>💬 Dica: use teste cada comando separadamente e observe o resultado após cada operação.</Text>

            <Text style={styles.subtitulo}>Conclusão do Módulo 2 🎉</Text>

            <Text style={styles.descricao}> Parabéns por concluir o segundo módulo de Banco de Dados!{'\n'}{'\n'}
            Agora você já domina as operações fundamentais para manipular registros dentro de uma tabela — inserir, consultar, atualizar e excluir.{'\n'}
            Esses comandos formam a base de toda aplicação que usa banco de dados.{'\n'}
            No próximo módulo, você vai aprender sobre o Modelo Relacional, entendendo como várias tabelas se conectam e trocam informações entre si, representando o mundo real de forma mais eficiente.
            </Text>

            <View style={styles.containerInferior}>
                    <Text style={styles.textoBotao}>Próximo Módulo: Trabalhando com o Modelo Relacional</Text>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.replace("CursoSQL3")}>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="#fff" />
                </TouchableOpacity>
           </View>
           
            </ScrollView>
            </>
    );
}
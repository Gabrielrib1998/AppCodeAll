import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions, Linking } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { VideoView, useVideoPlayer } from "expo-video";
import { Audio } from "expo-av";


export default function CursoSQL3() {
    const navigation = useNavigation<any>();
    const screenWidth = Dimensions.get('window').width;

    const player = useVideoPlayer(require('../../../Assets/CursoSQL3.mp4'), player => {
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
            <Text style={styles.titulo}>Módulo 3 – Modelo Relacional</Text>
        </View>
            <Text style={styles.subtitulo}>Objetivo do Módulo 3  💪🏻</Text>

            <Text style={styles.descricao}> Compreender o que é o modelo relacional de banco de dados, como ele organiza informações em tabelas conectadas e como criar relacionamentos entre elas usando chaves primárias e estrangeiras.</Text>

            <Text style={styles.subtitulo}>📘 O que é o Modelo Relacional</Text>

            <Text style={styles.descricao}>O modelo relacional é uma forma de estruturar dados em um banco de dados usando tabelas. Cada tabela representa uma entidade (como "Usuários" ou "Produtos") e as colunas representam atributos dessa entidade (como "Nome" ou "Preço").</Text>

            <Text style={styles.subtitulo}>🧠 Por que usar o Modelo Relacional</Text>

            <Text style={styles.descricao}> O modelo relacional ajuda a:{'\n'}{'\n'}
                • Organizar dados de forma estruturada.
                {'\n'}
                • Reutilizar dados, evitando repetições.
                {'\n'}
                • Facilitar a manutenção e atualização do banco de dados.
                {'\n'}
                • Melhorar a legibilidade e compreensão do modelo de dados.
            </Text>

            <Text style={styles.subtitulo}>⚙️ Chave Primária (Primary Key)</Text>

            <Text style={styles.descricao}> A chave primária (PK) identifica unicamente cada linha em uma tabela.
Normalmente, é o campo <Text style={styles.tag}> id </Text> que é usado como chave primária.</Text>

            <Image source={require('../../../Assets/SQL3.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.subtitulo}>⚙️ Chave Estrangeira (Foreign Key)</Text>

            <Text style={styles.descricao}> A chave estrangeira (FK) é um campo em uma tabela que referencia a chave primária de outra tabela, criando um relacionamento entre as duas tabelas.</Text>

            <Text style={styles.descricao}> Exemplo:{'\n'}{'\n'}
            Um cliente pode ter vários pedidos, mas cada pedido pertence a um único cliente.</Text>

            <Image source={require('../../../Assets/SQL3.1.png')} style={styles.imagem} resizeMode="contain" />

            <Text style={styles.descricao}>📌 Explicando:{'\n'}{'\n'}
            •<Text style={styles.tag}> id_clientes </Text> → é a chave estrangeira.{'\n'}
            •<Text style={styles.tag}> REFERENCES clientes(id) </Text> → diz que esse campo se conecta ao <Text style={styles.tag}> id </Text> da tabela clientes. </Text>

            <Text style={styles.subtitulo}>🔗 Tipos de Relacionamentos</Text>

            <View style={styles.tableContainer}>
                <View style={styles.table}>
                    <View style={[styles.tableRow, styles.tableHeader]}>
                        <View style={[styles.tableCell, { flex: 2 }]}> 
                            <Text style={styles.tableHeaderText}>Tipo</Text>
                        </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> 
                            <Text style={styles.tableHeaderText}>Descrição</Text>
                        </View>
                        <View style={[styles.tableCellLast, { flex: 4 }]}> 
                            <Text style={styles.tableHeaderText}>Exemplo</Text>
                        </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>1:1 (um para um)</Text> </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>Um registro de uma tabela se relaciona com um único registro de outra.</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 4 }]}> <Text style={styles.tableCellText}>Cada aluno tem um único boletim.</Text> </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>1:N (um para muitos)</Text> </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>Um registro pode estar ligado a vários registros de outra tabela.</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 4 }]}> <Text style={styles.tableCellText}>Um cliente pode ter vários pedidos.</Text> </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>N:N (muitos para muitos)</Text> </View>
                        <View style={[styles.tableCell, { flex: 2 }]}> <Text style={styles.tableCellText}>Vários registros de uma tabela se relacionam com vários de outra.</Text> </View>
                        <View style={[styles.tableCellLast, { flex: 4 }]}> <Text style={styles.tableCellText}>Alunos podem estar em várias turmas e turmas têm vários alunos.</Text> </View>
                    </View>
                </View>
            </View>

            <Text style={styles.subtitulo}> 💡 Exemplo de relacionamento 1:N </Text> 

            <Image source={require('../../../Assets/SQL3.2.png')} style={styles.imagem} resizeMode="stretch" />

            <Text style={styles.descricao}>👉 Aqui, o cliente João está vinculado ao pedido feito no dia 06/11/2025.</Text>

            <Text style={styles.subtitulo}>Recursos Adicionais 🎥</Text>

            <View style={styles.videoContainer}>
                <Text style={styles.videoTitle}>Tutorial: Modelo Relacional</Text>
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
                    📹 Este vídeo demonstra os conceitos de Modelo Relacional que acabamos de aprender.
                </Text>
            </View>
            
            <Text style={styles.subtitulo}>Desafio  🎯</Text>

            <Text style={styles.descricao}> Crie um banco de dados chamado “biblioteca” e dentro dele:</Text>
            <Text style={styles.descricao}> - Crie uma tabela “autores” com <Text style={styles.tag}> id </Text> e <Text style={styles.tag}> nome </Text>.</Text>
            <Text style={styles.descricao}> - Crie uma tabela “livros” com <Text style={styles.tag}> id </Text>, <Text style={styles.tag}> titulo </Text> e <Text style={styles.tag}> id_autor </Text> (chave estrangeira referenciando autores).</Text>
            <Text style={styles.descricao}> - Insira pelo menos 3 autores e 5 livros, garantindo que cada livro esteja associado a um autor.</Text>
            <Text style={styles.descricao}> - Use o comando <Text style={styles.tag}> SELECT </Text> para listar todos os livros junto com o nome do autor correspondente.</Text>
            <Text style={styles.descricao}>💬 Dica: utilize JOIN para combinar dados das duas tabelas.</Text>

            <Image source={require('../../../Assets/SQL3.3.png')} style={styles.imagem} resizeMode="contain" />-
        
            <Text style={styles.subtitulo}>Conclusão do Módulo 3  🎉</Text>

            <Text style={styles.descricao}>Parabéns por concluir o terceiro módulo de Banco de Dados!{'\n'}{'\n'}
            Agora você entende o modelo relacional, o coração dos sistemas modernos de informação.{'\n'}
            Você aprendeu como tabelas se conectam entre si usando chaves primárias e estrangeiras, garantindo que seus dados fiquem organizados, consistentes e eficientes.</Text>
           
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
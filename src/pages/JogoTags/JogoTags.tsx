import React, { useState, useEffect, useRef } from "react";
import { View, Text, Dimensions, TouchableOpacity, Animated, PanResponder } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface Tag {
  id: number;
  type: 'correct' | 'incorrect';
  text: string;
  x: number;
  y: Animated.Value;
  color: string;
}

const correctTags = [
  // HTML Tags
  '<html>', '<head>', '<body>', '<div>', '<p>', '<h1>', '<span>', '<img>', '<a>', '<ul>', '<li>',
  // CSS Properties
  '<color>', '<background>', '<margin>', '<padding>', '<display>', '<position>', '<width>', '<height>', '<font-size>',
  // JavaScript
  '<function>', '<var>', '<let>', '<const>', '<if>', '<for>', '<while>', '<return>', '<array>', '<object>'
];

const incorrectTags = [
  '<mario>', '<luigi>', '<peach>', '<bowser>', '<goomba>', '<koopa>', '<star>', '<mushroom>',
  '<pasta>', '<pizza>', '<banana>', '<apple>', '<car>', '<house>', '<dog>', '<cat>', '<bird>', '<fish>'
];

export default function JogoTags() {
  const navigation = useNavigation<any>();
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [tags, setTags] = useState<Tag[]>([]);
  const [feedbackText, setFeedbackText] = useState('');
  const [gameSpeed, setGameSpeed] = useState(3000); // Velocidade inicial das tags
  const tagIdRef = useRef(0);
  const feedbackOpacity = useRef(new Animated.Value(0)).current;

  // Gerar nova tag
  const generateTag = () => {
    const isCorrect = Math.random() > 0.4; // 60% chance de ser correta (mais equilibrado)
    const tagList = isCorrect ? correctTags : incorrectTags;
    const text = tagList[Math.floor(Math.random() * tagList.length)];
    
    const newTag: Tag = {
      id: tagIdRef.current++,
      type: isCorrect ? 'correct' : 'incorrect',
      text,
      x: Math.random() * (screenWidth - 140), // Mais espaço para tags maiores
      y: new Animated.Value(-80), // Começa mais longe para animação suave
      color: 'transparent' // Sem cor de fundo, usando estilo do botão
    };

    // Animar queda com velocidade atual do jogo e easing suave
    Animated.timing(newTag.y, {
      toValue: screenHeight + 100,
      duration: gameSpeed + Math.random() * 800,
      useNativeDriver: false,
    }).start();

    // Configurar remoção automática quando sair da tela
    setupTagAutoRemoval(newTag);

    setTags(prevTags => [...prevTags, newTag]);
  };

  // Mostrar feedback visual
  const showFeedback = (text: string, isPositive: boolean) => {
    setFeedbackText(text);
    feedbackOpacity.setValue(1);
    
    Animated.sequence([
      Animated.delay(800),
      Animated.timing(feedbackOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      })
    ]).start();
  };

  // Sistema de clique em tags
  const handleTagClick = (tag: Tag) => {
    // Remove a tag imediatamente ao clicar
    setTags(prevTags => prevTags.filter(t => t.id !== tag.id));
    
    if (tag.type === 'correct') {
      // Tag correta clicada
      setScore(prev => prev + 50);
      setCorrectCount(prev => prev + 1);
      showFeedback(`+50 PONTOS! 🎉`, true);
      
      // Aumenta a velocidade gradualmente (mais suave)
      setGameSpeed(prev => Math.max(2000, prev - 25));
    } else {
      // Tag errada clicada
      setScore(prev => Math.max(0, prev - 25));
      setWrongCount(prev => {
        const newWrongCount = prev + 1;
        showFeedback(`-25 PONTOS ❌ (${newWrongCount}/5)`, false);
        
        // Termina o jogo quando clicar 5 tags erradas
        if (newWrongCount >= 5) {
          setTimeout(() => {
            showFeedback('GAME OVER! 💀', false);
            setTimeout(() => endGame(), 1000);
          }, 500);
        }
        return newWrongCount;
      });
    }
  };

  // Auto-remover tags que saem da tela
  const setupTagAutoRemoval = (tag: Tag) => {
    const listener = tag.y.addListener(({ value }) => {
      if (value > screenHeight + 50) {
        tag.y.removeListener(listener);
        setTags(prevTags => prevTags.filter(t => t.id !== tag.id));
      }
    });
  };

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setCorrectCount(0);
    setWrongCount(0);
    setTags([]);
    setGameSpeed(3000); // Reseta a velocidade
    tagIdRef.current = 0; // Reseta o ID das tags
  };

  const endGame = () => {
    setGameOver(true);
    setTags([]);
    // Mantém as estatísticas reais do jogo
  };

  const goHome = () => {
    navigation.goBack();
  };

  // Game loop com velocidade variável
  useEffect(() => {
    if (gameStarted && !gameOver) {
      // Intervalo mais moderado para melhor legibilidade
      const baseInterval = Math.max(1200, gameSpeed / 2);
      const interval = setInterval(() => {
        generateTag();
      }, baseInterval + Math.random() * 800);

      return () => clearInterval(interval);
    }
  }, [gameStarted, gameOver, gameSpeed]);

  // As tags agora são clicáveis, não precisamos verificar colisões automaticamente

  if (!gameStarted || gameOver) {
    return (
      <LinearGradient
        colors={['#87CEEB', '#98FB98', '#87CEEB']}
        style={styles.container}
      >
        <View style={styles.menuContainer}>
          <Text style={styles.gameTitle}>🍄 TAG COLLECTOR 🍄</Text>
          <Text style={styles.subtitle}>Colete as tags corretas!</Text>
          
          {gameOver && (
            <View style={styles.gameOverContainer}>
              <Text style={styles.gameOverText}>💀 GAME OVER! 💀</Text>
              <Text style={styles.finalScore}>Pontuação Final: {score}</Text>
              <Text style={styles.tagsCollected}>✅ Tags Corretas: {correctCount}</Text>
              <Text style={styles.tagsWrong}>❌ Erros: {wrongCount}/5</Text>
              <Text style={styles.perfectGame}>🔄 Tente novamente!</Text>
            </View>
          )}
          
          <View style={styles.instructions}>
            <Text style={styles.instructionTitle}>📋 COMO JOGAR:</Text>
            <Text style={styles.instructionText}>• Clique apenas nas tags corretas de código</Text>
            <Text style={styles.instructionText}>• Tags HTML, CSS, JS = +50 pontos! ⭐</Text>
            <Text style={styles.instructionText}>• Tags erradas clicadas = -25 pontos ❌</Text>
            <Text style={styles.instructionText}>• Não clique 5 tags erradas ou é GAME OVER! 💀</Text>
            <Text style={styles.instructionText}>• Velocidade aumenta com acertos! ⚡</Text>
          </View>

          <TouchableOpacity style={styles.playButton} onPress={startGame}>
            <MaterialIcons name="play-arrow" size={30} color="#fff" />
            <Text style={styles.playButtonText}>
              {gameOver ? 'JOGAR NOVAMENTE' : 'INICIAR JOGO'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.homeButton} onPress={goHome}>
            <MaterialIcons name="home" size={25} color="#fff" />
            <Text style={styles.homeButtonText}>VOLTAR AO MENU</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={['#87CEEB', '#98FB98']}
      style={styles.gameContainer}
    >
      {/* HUD */}
      <View style={styles.hud}>
        <Text style={styles.scoreText}>⭐ {score}</Text>
        <Text style={styles.progressText}>✅ {correctCount} | ❌ {wrongCount}/5</Text>
        <Text style={styles.speedText}>⚡ Nível {Math.floor((3000 - gameSpeed) / 100) + 1}</Text>
        <TouchableOpacity onPress={endGame} style={styles.pauseButton}>
          <MaterialIcons name="pause" size={25} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Feedback Visual */}
      <Animated.View style={[styles.feedbackContainer, { opacity: feedbackOpacity }]}>
        <Text style={styles.feedbackText}>{feedbackText}</Text>
      </Animated.View>

      {/* Tags caindo - clicáveis */}
      {tags.map(tag => (
        <Animated.View
          key={tag.id}
          style={[
            styles.clickableTag,
            {
              left: tag.x,
              top: tag.y,
            }
          ]}
        >
          <TouchableOpacity
            onPress={() => handleTagClick(tag)}
            activeOpacity={0.8}
            style={styles.tagTouchable}
          >
            <LinearGradient
              colors={tag.type === 'correct' 
                ? ['#4ECDC4', '#44A08D'] 
                : ['#FF6B6B', '#EE5A52']
              }
              style={styles.tagGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.tagText}>{tag.text}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>
      ))}

      {/* Controles */}
      <View style={styles.controls}>
        <Text style={styles.controlHint}>👆 Clique apenas nas tags corretas de código!</Text>
      </View>
    </LinearGradient>
  );
}
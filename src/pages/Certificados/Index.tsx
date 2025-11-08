import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, Image } from 'react-native';
import { styles } from './styles';
import Cabecalho from '../../components/Cabecalho';

const MOCK = [
  { id: '1', curso: 'HTML5 Básico', data: '12/03/2024' },
  { id: '2', curso: 'CSS3 - Fundamentos', data: '05/07/2024' },
  { id: '3', curso: 'JavaScript para Iniciantes', data: '21/11/2024' },
];

export default function Certificados() {
  return (
    <>
    <Image source={{ uri: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80' }} style={styles.fundo} resizeMode="cover" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Meus Certificados</Text>
        <Text style={styles.intro}>Aqui estão alguns certificados de cursos concluídos. Clique em "Ver certificado" para abrir a imagem (a funcionalidade de visualização será adicionada depois).</Text>

        {MOCK.map(item => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>{item.curso}</Text>
              <Text style={styles.cardDate}>Concluído em {item.data}</Text>
            </View>
            <TouchableOpacity style={styles.cardButton} onPress={() => Alert.alert('Ver Certificado', 'Implementação futura: abrir imagem do certificado.') }>
              <Text style={styles.cardButtonText}>Ver certificado</Text>
            </TouchableOpacity>
          </View>
        ))}

      </ScrollView>
    </>
  );
}

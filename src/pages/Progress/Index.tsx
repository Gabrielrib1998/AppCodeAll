import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { Input } from '../../components/input';

type Aluno = {
  id: string;
  nome: string;
  curso: string;
  inscritoEm: string; // ISO or display
  horas: string;
  progresso: string; // visual percent or status
};

const ALUNOS_MOCK: Aluno[] = [
  { id: '1', nome: 'Maria Silva', curso: 'HTML5', inscritoEm: '2025-10-01T10:30:00Z', horas: '8 horas', progresso: '75%' },
  { id: '2', nome: 'João Souza', curso: 'CSS3', inscritoEm: '2025-09-18T14:12:00Z', horas: '6 horas', progresso: '40%' },
  { id: '3', nome: 'Pedro Alves', curso: 'JavaScript', inscritoEm: '2025-07-22T09:05:00Z', horas: '12 horas', progresso: '20%' },
];

export default function PaginaProgressos() {
  const navigation = useNavigation<any>();
  const [consulta, setConsulta] = React.useState('');

  // Visual apenas: filtra os dados mock localmente. O backend substituirá isso.
  const filtrados = ALUNOS_MOCK.filter(a => a.nome.toLowerCase().includes(consulta.toLowerCase()));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Progressos dos Alunos</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
          <Text style={styles.closeText}>Fechar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchRow}>
        <Input value={consulta} onChangeText={setConsulta} placeholder="Pesquisar por nome" />
      </View>

      <FlatList
        data={filtrados}
        keyExtractor={item => item.id}
        contentContainerStyle={{ padding: 12 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.studentName}>{item.nome}</Text>
            <Text style={styles.meta}>Curso: {item.curso}</Text>
            <Text style={styles.meta}>Horas: {item.horas}</Text>
            <Text style={styles.meta}>Inscrito em: {new Date(item.inscritoEm).toLocaleString()}</Text>
            <Text style={styles.progress}>Progresso: {item.progresso}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={{ padding: 12, color: '#666' }}>Nenhum aluno encontrado</Text>}
      />
    </View>
  );
}

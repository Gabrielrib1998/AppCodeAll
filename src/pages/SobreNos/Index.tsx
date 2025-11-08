import React from 'react';
import { View, Text, ScrollView, Image} from 'react-native';
import { styles } from './styles';
import Cabecalho from '../../components/Cabecalho';

export default function SobreNos() {
  return (
    <>
    <Image source={{ uri: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80' }} style={styles.fundo} resizeMode="cover" />      
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Sobre Nós</Text>

        <Text style={styles.descricao}>
          Somos uma iniciativa destinada a incentivar jovens que estão saindo do ensino médio
          a conhecer e ingressar na programação. Acreditamos que toda pessoa merece acesso
          a ferramentas, conhecimento e oportunidades para transformar sua carreira — e a
          programação é uma porta poderosa para isso.
        </Text>

        <Text style={styles.subtitulo}>Nossa missão</Text>
        <Text style={styles.descricao}>
          Capacitar estudantes e jovens profissionais através de cursos práticos, projetos
          aplicados e orientação para o mercado de trabalho. Fornecemos conteúdo didático,
          exercícios interativos e desafios para consolidar o aprendizado.
        </Text>

        <Text style={styles.subtitulo}>Por que aprender programação?</Text>
        <Text style={styles.descricao}>
          A programação desenvolve pensamento lógico, resolução de problemas e criatividade.
          Além disso, abre portas em diversas áreas (web, mobile, dados, automação, IA) e
          melhora perspectivas de emprego e empreendedorismo.
        </Text>

        <Text style={styles.subtitulo}>Como começamos</Text>
        <Text style={styles.descricao}>
          Tudo começou com um pequeno grupo de estudantes que queria compartilhar conhecimento.
          Crescemos oferecendo cursos gratuitos e de baixo custo, envolvendo mentores voluntários
          e criando uma comunidade acolhedora para iniciantes.
        </Text>

        <Text style={styles.subtitulo}>O que oferecemos</Text>
        <Text style={styles.descricao}>{'- Trilhas de aprendizagem passo a passo\n- Projetos práticos para portfólio\n- Acompanhamento e feedback\n- Conexão com oportunidades locais'}</Text>

        <Text style={styles.subtitulo}>Depoimentos</Text>
        <Text style={styles.descricao}>
          "Entrei no curso sem conhecer nada e hoje trabalho com suporte técnico e continuo
          estudando desenvolvimento web." – Ana, ex-aluna
        </Text>

        <Text style={styles.descricao}>
          "Os projetos ajudaram muito a montar meu portfólio e conseguir a primeira vaga." – João
        </Text>

        <Text style={styles.subtitulo}>Junte-se a nós</Text>
        <Text style={styles.descricao}>
          Se você saiu do ensino médio e quer explorar programação, comece por aqui. Faça os
          cursos iniciais, participe dos desafios e compartilhe suas dúvidas na comunidade. Nós
          apoiamos sua jornada e ajudamos a transformar curiosidade em carreira.
        </Text>

        <Text style={styles.descricaoFinal}>
          © {new Date().getFullYear()} CodeAll — Todos os direitos reservados.
        </Text>
      </ScrollView>
    </>
  );
}

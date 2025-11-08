import { Platform, StyleSheet } from 'react-native';
import { theme } from '../../global/themes';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 60,
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 12,
      textAlign: 'auto',
  },
  subtitulo: {
    fontSize: 22,
    fontWeight: '800',
    marginTop: 30,
    paddingHorizontal: 30,
    textAlign: 'auto',
    alignItems: 'center',

  },
 descricao: {
    fontSize: 17,
  lineHeight: 24,
  textAlign: 'auto',
    marginTop: 15,
    padding: 15,
    paddingHorizontal: 30,
    fontWeight: '400',
    marginBottom: 5,
    backgroundColor: theme.colors.gray_light,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 5.25,
    shadowRadius: 4.84,
    elevation: 5,
    color: theme.colors.text,

  },

  descricaoFinal: {
    fontSize: 16,
    color: '#fdfdfdff',
    marginTop: 18,
    textAlign: 'auto',
    fontWeight: '400',
  },
  fundo: {
      position: 'absolute',
      top: Platform.OS === 'android' ? 30 : 0, 
      left: 0,
          textAlign: 'auto',
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      opacity: 0.4, 
      zIndex: -1, 
    },
  
});

export default styles;

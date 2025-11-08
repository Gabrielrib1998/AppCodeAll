import { Platform, StyleSheet } from 'react-native';
import { theme } from '../../global/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 30 : 10,
    paddingHorizontal: 16,
    marginTop: 10,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: theme.colors.black,
    marginBottom: 16,
    marginTop: 8,
  },
  linha: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  textoRotulo: {
    fontSize: 14,
    color: theme.colors.gray,
  },
  textoValor: {
    fontSize: 16,
    color: theme.colors.black,
    fontWeight: '500',
    marginTop: 2,
  },
  fundo: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 30 : 0, 
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    opacity: 0.4, 
    zIndex: -1, 
  },

});

import { Platform, StyleSheet } from 'react-native';
import { theme } from '../../global/themes';

export const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingBottom: 90,
    marginTop: 20,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 8,
  },
  intro: {
    fontSize: 16,
    color: '#444',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardText: {
    flex: 1,
    marginRight: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  cardDate: {
    fontSize: 12,
    color: '#666',
  },
  cardButton: {
    backgroundColor: theme.colors.botao,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  cardButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
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

export default styles;

import { StyleSheet, Platform } from 'react-native';
import { theme } from '../../global/themes';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    top: 20,
    flex: 1,
    padding: 16,
    backgroundColor: theme.colors.secundary,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    color: theme.colors.black,
  textAlign: 'auto',
  },
  label: {
    fontSize: 14,
    color: theme.colors.text,
    marginBottom: 8,
    fontWeight: '500',
  },
  ajuda: {
    fontSize: 12,
    color: theme.colors.gray,
    marginBottom: 8,
    fontStyle: 'italic',
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.gray,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    marginBottom: 16,
    backgroundColor: theme.colors.white,
  },
});

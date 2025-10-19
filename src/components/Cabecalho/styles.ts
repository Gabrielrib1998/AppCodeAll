import { StyleSheet, Platform, StatusBar } from 'react-native';
import { theme } from '../../global/themes';

const STATUSBAR_HEIGHT = Platform.OS === 'android' ? StatusBar.currentHeight ?? 0 : 0;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: STATUSBAR_HEIGHT + 3,
    paddingHorizontal: 10,
    paddingBottom: 14,
    backgroundColor: theme.colors.secundary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#0f0f0fff",
    shadowOffset: {
     width: 0,
      height: 8,
  },
    shadowOpacity: 3.0,
    shadowRadius: 20.32,
    elevation: 26,
    overflow: 'visible',
    position: 'relative',
  },
  curva: {
    position: 'absolute',
    left: -10,
    right: -10,
    bottom: -14,
    height: 48,
    backgroundColor: theme.colors.secundary,
    borderBottomLeftRadius: 58,
    borderBottomRightRadius: 58,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 56,
    width: 120,
  },
  sideButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;

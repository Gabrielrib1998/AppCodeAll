import { Dimensions, Platform, StyleSheet } from "react-native";
import { theme } from "../../global/themes";

export const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#ffffffff', 
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,

  },
    containerLogin: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
    backgroundColor: theme.colors.secundary,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
    boxLogo: {
    alignItems: 'center',
    marginBottom: 30,
  },
  boxButton: {
    width: '100%',
    marginTop: 10,
    
  },
  button: {
    backgroundColor: theme.colors.botao,
    paddingVertical: 15,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
  shadowOffset: {
	  width: 0,
  	height: 6,
},
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  textbutton: {
    color: '#000000ff',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  input: {
    flex: 1,
    paddingVertical: Platform.OS === 'ios' ? 14 : 10,
    fontSize: 16,
    color: theme.colors.black,
    fontWeight: '600',
    borderRadius: 40,
  },
  text: {
    fontSize: 20,
    color: theme.colors.black,
    textAlign: 'center',
    maxWidth: '100%',
    gap: 10,
    marginTop: 20,
    fontWeight: '500',
  },
  });

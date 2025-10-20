import { Dimensions, Platform, StyleSheet } from "react-native";
import { theme } from "../../global/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',   
    padding: 20,
    

  },
  containerLogin: {
    width: '100%',
    alignItems: 'center',
    height: Dimensions.get('window').height - 200,
    padding: 20,
    backgroundColor: theme.colors.secundary,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
	   width: 0,
	    height: 8,
  },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },

  boxForm: {
    width: '100%',
    marginBottom: 20,
    gap: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  boxLogo: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: theme.colors.text,
    textAlign: 'center',
    maxWidth: '90%',
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
  textButtonCadastrar: {
    marginTop: 25,
    color: theme.colors.text,
    fontSize: 14,
    gap: 10,
    padding: 10,
  },
  textButtonCadastrarAqui: {
    color: theme.colors.botao,
    fontWeight: 'bold',
  },
  fundo: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 30 : 0, 
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    opacity: 0.6, 
    zIndex: -1, 
  },
});

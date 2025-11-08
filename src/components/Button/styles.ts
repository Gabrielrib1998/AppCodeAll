import { Dimensions, Platform, StyleSheet } from "react-native";
import { theme } from "../../global/themes";

export const styles = StyleSheet.create({
  
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
    shadowColor: "#000000ff",
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
  text: {
    fontSize: 16,
    color: theme.colors.text,
  textAlign: 'auto',
    maxWidth: '90%',
  },
});
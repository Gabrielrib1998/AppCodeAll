import { Dimensions, Platform, StyleSheet } from "react-native";
import { theme } from "../../global/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.colors.primary,
        paddingTop: Platform.OS === 'android' ? 30 : 0,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,   
        elevation: 5,
    },
    cabecalho: {
        width: '100%', 
        height: 200,
        justifyContent: "space-between",
        borderRadius: 10,
        padding: 0,
        paddingTop: Platform.OS === 'android' ? 40 : 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,   
        elevation: 5,
        backgroundColor: theme.colors.secundary,
    },
    boxLogo: {
        flex: 1,
        width: '100%',
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: 20,
        
    },
    text: {
        fontSize: 16,
        color: theme.colors.black,
        textAlign: 'center',
        marginTop: -50,
        maxWidth: '90%',
        fontWeight: '500',
       
  },
     logo: {
        width: 120,
        height: 150,
        resizeMode: 'contain',
  },

  nome: { 
    fontSize: 20,
    fontWeight: '600',
    color: theme.colors.black,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    maxWidth: '100%',
  },
})
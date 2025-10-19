import { Platform, StyleSheet } from "react-native";
import { theme } from "../../global/themes";


export const styles = StyleSheet.create({
    boxInput: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#f0f0f0',
        borderRadius: 40,
        paddingHorizontal: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        width: '100%',
        height: 55,
    },
    
    input: {
    flex: 1,
    paddingVertical: Platform.OS === 'ios' ? 14 : 10,
    fontSize: 16,
    color: theme.colors.black,
    fontWeight: '600',
    borderRadius: 40,
  },
  boxForm: {
    width: '100%',
  },
  textinput: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
    fontWeight: '600',
  },
  
  icon: {
    marginRight: 10,
    width: '100%',

  },
  title: {
    fontSize: 16,
    color: theme.colors.text,
    paddingHorizontal: 15,
    maxWidth: '90%',
    marginBottom: 15,
    fontWeight: '600',
  },
});
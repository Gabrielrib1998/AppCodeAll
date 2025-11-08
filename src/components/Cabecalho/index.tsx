import React from 'react';
import { View, Image, TouchableOpacity, Alert, Modal, Text, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Logo from '../../Assets/logo.png';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../global/AuthContext';

export type CabecalhoProps = {
  onPressUser?: () => void;
  onPressLogout?: () => void;
};

export function Cabecalho({ onPressUser, onPressLogout }: CabecalhoProps) {
  const navigation = useNavigation<any>();
  const { usuario, sair } = React.useContext(AuthContext);
  const [menuVisible, setMenuVisible] = React.useState(false);

  const handleUser = () => {
    if (onPressUser) return onPressUser();
    setMenuVisible(true);
  };

  const handleLogout = async () => {
    if (onPressLogout) return onPressLogout();
    await sair();
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
  };

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <TouchableOpacity onPress={handleUser} style={styles.sideButton}>
        <MaterialIcons name="menu" size={26} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.logo} onPress={() => navigation.navigate("Home")}>
      <View style={styles.center}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogout} style={styles.sideButton}>
        <MaterialIcons name="logout" size={24} color="#000" />
      </TouchableOpacity>
      <View style={styles.curva} />

      <Modal visible={menuVisible} animationType="fade" transparent onRequestClose={() => setMenuVisible(false)}>
        <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
          <View style={styles.menuBackdrop} />
        </TouchableWithoutFeedback>
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={() => { setMenuVisible(false); navigation.navigate('Perfil' as never); }}>
            <Text style={styles.menuText}>Meus dados</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => { setMenuVisible(false); navigation.navigate('Certificados' as never); }}>
            <Text style={styles.menuText}>Meus certificados</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => { setMenuVisible(false); navigation.navigate('SobreNos' as never); }}>
            <Text style={styles.menuText}>Sobre nós</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.menuItem]} onPress={() => setMenuVisible(false)}>
            <Text style={[styles.menuText, { color: '#333' }]}>Fechar</Text> 
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default Cabecalho;

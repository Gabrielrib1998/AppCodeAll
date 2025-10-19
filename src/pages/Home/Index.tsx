import React from "react";
import { Text, View, Keyboard, TouchableWithoutFeedback, ScrollView} from "react-native";
import {styles} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../global/AuthContext";


export default function Home() {
    const navigation = useNavigation<any>();
    const { usuario } = React.useContext(AuthContext);
    const nome = usuario?.nome?.split(' ')[0] || 'dev';
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.container}>
                  <View style={{ paddingHorizontal: 16, paddingTop: 12 }}>
                      <Text style={styles.nome}>Olá, {nome} 👋</Text>
                  </View>
              </View>
          </TouchableWithoutFeedback>
        </ScrollView>
    );
}

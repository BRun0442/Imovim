import React, { useContext } from "react";
import { Text, View, StatusBar } from "react-native";
import { AuthContext } from "../../contexts/auth";
import { styles } from "./styles";
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from '@expo/vector-icons';

import { DrawerActions } from '@react-navigation/native';

function Header({ navigation }) {
  const { reloadChats, setReloadChats } = useContext(AuthContext)
 
  return (
    <View style={styles.header}>

      <View style={styles.container}>

        <View style={{ position: "absolute", left: 0 }}>
          <TouchableOpacity onPress={async() => {
            navigation.dispatch(DrawerActions.openDrawer()); }}>
            <Entypo name="menu" size={40} color="#FF7926" />
          </TouchableOpacity>
        </View>

        <View style={styles.title}>
          <Text style={styles.logo}>ii</Text>
        </View>

        <View
          // style={styles.containerIcons}
          style={{position: "absolute", right: 0, display: "flex", flexDirection: "row"}}
        >
          <TouchableOpacity
            onPress={() => { navigation.navigate('Pesquisa') }}>
            <Foundation
              style={styles.icon} name="magnifying-glass" size={33} color="#FF7926"

            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={async () => { 
              setReloadChats(reloadChats + 1)
              navigation.navigate('Mensagens') }}>
            <Ionicons
              style={styles.icon} name="chatbubble" size={33} color="#FF7926"
            />
          </TouchableOpacity>

        </View>
      </View>
      <StatusBar />
    </View>
  );
}

export default Header;
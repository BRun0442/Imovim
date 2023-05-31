import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StatusBar } from "react-native"
import Header from "../../Header/Header";
import { styles } from "./style";

import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Configuracoes({ navigation }) {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Configurações</Text>
            </View>

            <ScrollView style={{ paddingHorizontal: 10 }}>

                <View style={styles.optionsContainer}>

                    <TouchableOpacity
                        style={styles.optionsButton}
                        onPress={() => navigation.navigate("Usuários Bloqueados")}
                    >
                        <FontAwesome5 name="user-times" size={25} color="#000" />
                        <Text style={styles.optionsText}>Usuários Bloqueados</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
            <StatusBar barStyle={'light-content'} />
        </View>
    )
}
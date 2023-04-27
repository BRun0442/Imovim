import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import Header from "../../Header/Header";
import { styles } from "./style";

import { FontAwesome5 } from '@expo/vector-icons';

export default function Configuracoes({navigation}) {
    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Configurações</Text>
            </View>

            <ScrollView style={{paddingHorizontal: 10}}>

                <View style={styles.optionsContainer}>
                    <TouchableOpacity 
                    style={styles.optionsButton}
                    onPress={()=> navigation.navigate("Validação Para Redefinir Senha")}
                    >
                        <FontAwesome5 name="lock" size={24} color="black" />
                        <Text style={styles.optionsText} >Redefinir senha</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

        </View>
    )
}
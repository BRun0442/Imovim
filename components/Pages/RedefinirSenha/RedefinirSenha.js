import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native"
import { styles } from "./style"
import Header from "../../Header/Header";

import { Entypo } from '@expo/vector-icons';


export default function RedefinirSenha() {
    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Redefinir Senha Validação</Text>
                <Entypo name="save" size={35} color="#FF7926" />
            </View>

            <TextInput
                placeholder="Digite sua nova senha"
            />
        </View>
    )
}
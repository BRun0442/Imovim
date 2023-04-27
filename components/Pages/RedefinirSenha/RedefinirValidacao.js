import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native"
import { styles } from "./style"
import Header from "../../Header/Header";

export default function RedefinirValidacao({ navigation }) {
    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Redefinir Senha Validação</Text>
            </View>

            <View>

                <TextInput 
                    placeholder="Digite o código"
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Redefinir Senha")}
                >
                    <Text style={styles.buttonText}>Avançar</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}
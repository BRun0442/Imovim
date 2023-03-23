import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import Header from '../../Header/Header'
import { styles } from './style'

export default function Notificacoes({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Notificações</Text>
            </View>

            <View style={styles.tags}>
                <TouchableOpacity style={styles.tag}>
                    <Text style={styles.tagText}>Solicitações</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tag}>
                    <Text style={styles.tagText}>Publicações</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}
import React from "react";
import { View, Text } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
import Header from "../../Header/Header";
import { styles } from './style.js'

import { Entypo } from '@expo/vector-icons';


function TelaTags() {
    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.containerTitle}>
                <View style={styles.title}>
                    <Text style={styles.text}>Selecione seus esportes favoritos</Text>
                </View>
                <Entypo name="save" size={35} color="#F8670E" />
            </View>

            <View style={styles.containerTags}>
                <View style={styles.tags}>
                    <Text style={styles.tag}>#futebol</Text>
                    <Text style={styles.tag}>#basquete</Text>
                    <Text style={styles.tag}>#volei</Text>
                    <Text style={styles.tag}>#tenis</Text>
                    <Text style={styles.tag}>#dança</Text>
                    <Text style={styles.tag}>#natação</Text>
                    <Text style={styles.tag}>#handebol</Text>
                    <Text style={styles.tag}>#pingpong</Text>
                    <Text style={styles.tag}>#corrida</Text>
                    <Text style={styles.tag}>#judô</Text>
                    <Text style={styles.tag}>#musculação</Text>
                    <Text style={styles.tag}>#maratona</Text>
                </View>
            </View>
        </View>
    )
}

export default TelaTags;
import React from "react";
import { View, Text } from "react-native";
import Header from "../../Header/Header";
import { styles } from './style.js'
import { Entypo } from '@expo/vector-icons';
import VerMaisTags from "../../TelaTagsTag/TelaTagsTag";


function TelaTags({navigation}) {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />

            <View style={styles.containerTitle}>
                <View style={styles.title}>
                    <Text style={styles.text}>Selecione seus esportes favoritos</Text>
                </View>
                <Entypo name="save" size={35} color="#F8670E" />
            </View>

            <View style={styles.containerTags}>
                <View style={styles.tags}>
                    <VerMaisTags nameEsportTag="futebol" />
                    <VerMaisTags nameEsportTag="futebol" />
                </View>
            </View>
        </View>
    )
}

export default TelaTags;
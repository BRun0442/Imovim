import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert, ScrollView } from "react-native";
import { styles } from './style.js'

import Header from "../../Header/Header";
import VerMaisTags from "../../TelaTagsTag/TelaTagsTag";

import { Entypo } from '@expo/vector-icons';

import { getSports as getSportsData } from "../../../services/sports";

export default function TelaTags({ navigation }) {
    const [sports, setSports] = useState([])

    const getSports = async () => {
        const data = await getSportsData()
        setSports(data)
        console.log(data)
        return data
    }

    useEffect(() => {
        getSports()
    }, [])

    if (!sports) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Header navigation={navigation} />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Selecione seus esportes favoritos</Text>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Meu Perfil");
                        Alert.alert("Tags salvas!")
                    }}
                >
                    <Entypo name="save" size={35} color="#F8670E" />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.containerTags}>
                <View style={styles.tags}>
                    {sports.map((i) => {
                        return (
                            <VerMaisTags
                                sport_id={i.id}
                                color={i.sport_color}
                                key={i.sport_id}
                                nameEsportTag={i.sport_name}
                            />
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}
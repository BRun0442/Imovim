import React, { useEffect, useState } from "react";
import { View, Text, Touchable, TouchableOpacity, Alert, ScrollView, StatusBar } from "react-native";
import Header from "../../Header/Header";
import { styles } from './style.js'
import { Entypo } from '@expo/vector-icons';
import VerMaisTags from "../../TelaTagsTag/TelaTagsTag";
import { getSports as getSportsData } from "../../../services/sports";

function TelaTags({ navigation }) {
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
            <StatusBar barStyle={'light-content'} />
        </View>
    )
}

export default TelaTags;
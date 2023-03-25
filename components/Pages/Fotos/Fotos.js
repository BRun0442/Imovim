import React from "react";
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import Header from '../../Header/Header'
import Photo from "../../Photo/Photo";
import { styles } from './style'

export default function Fotos({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>

            <Header navigation={navigation} />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Fotos</Text>
            </View>

            <View style={{ paddingHorizontal: 20 }}>
                <ScrollView style={styles.photoContainer}>
                    <View style={styles.photos}>
                        <Photo navigation={navigation} />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView >
    )
}
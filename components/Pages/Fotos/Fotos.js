import React from "react";
import { View, Text, ScrollView } from 'react-native'
import Header from '../../Header/Header'
import Photo from "../../Photo/Photo";
import { styles } from './style'

export default function Fotos() {
    return (
        <View style={styles.container}>

            <Header />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Fotos</Text>
            </View>

            <View style={{paddingHorizontal: 20}}>
                <ScrollView style={styles.photoContainer}>
                    <View style={styles.photos}>
                        <Photo />
                        <Photo />
                        <Photo />
                        <Photo />
                        <Photo />
                        <Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo /><Photo />
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
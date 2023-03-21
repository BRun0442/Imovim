import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Header from '../../Header/Header'
import { styles } from './style'
import { FontAwesome } from "@expo/vector-icons";

export default function Chat({ navigation }) {
    return (
        <View>
            <Header />

            <View style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
                <View style={styles.container}>

                    <View style={styles.data}>

                        <View style={styles.camContainer}>
                            <FontAwesome name="camera" size={15} color="#FFF" />
                        </View>

                        <View style={styles.dataItems}>
                            <View style={{ marginLeft: 15 }}>
                                <Text style={styles.name}>name</Text>
                                <Text style={styles.message}>message</Text>
                            </View>
                        </View>

                    </View>
                    <View style={styles.line}></View>
                </View>

                <View style={styles.chat}>
                    <ScrollView>

                    </ScrollView>
                </View>


            </View>
        </View>
    )
}
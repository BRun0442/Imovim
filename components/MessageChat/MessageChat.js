import React from "react";
import { View, Text } from 'react-native'
import { styles } from "./styles";
import { FontAwesome } from '@expo/vector-icons';

export default function MessageChat(props) {
    return (
        <View style={styles.message}>
            <View style={styles.camContainer}>
                <FontAwesome name="camera" size={24} color="#FFF" />
            </View>

            <View style={styles.messageItems}>
                <View style={styles.messageTexts}>
                    <Text style={styles.name} >{props.name}</Text>
                    <Text>{props.message}</Text>
                </View>

                <View style={styles.notification}></View>
            </View>

        </View>
    )
}
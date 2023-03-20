import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './style'

export default function Contact({navigation}, props) {
    return (
        <TouchableOpacity
            onPress={() => { navigation.navigate('Chat') }}
            style={styles.messageContainer}
        >
            <View style={styles.NewMessageContainer}>
                <View style={styles.camContainer}>
                    <FontAwesome name="camera" size={15} color="#FFF" />
                </View>

                <View style={styles.messageItems}>
                    <View style={styles.messageTexts}>
                        <Text style={styles.name}>{props.name}</Text>
                        <Text style={styles.message}>{props.message}</Text>
                    </View>

                    <View style={styles.notification}></View>
                </View>

            </View>
        </TouchableOpacity>
    )
}
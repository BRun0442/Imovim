import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './style.js'

export default function VerMaisEventos(props) {
    return (
        <View style={styles.event}>
            <Text style={styles.eventText}>{props.nameEvent}</Text>
        </View>
    )
}
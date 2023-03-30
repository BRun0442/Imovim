import React from 'react'
import { View, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { styles } from './style'

export default function NotificationLike(props) {
    return (
        <View style={styles.container}>
            <View style={styles.iconCam}>
                <Entypo name="camera" size={15} color="white" />
            </View>

            <Text style={{ marginLeft: 15 }}>{props.name} curtiu sua postagem </Text>
        </View>
    )
}
import React from "react";
import { View, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { styles } from './style'

export default function NotificationComent(props) {
    return (
        <View style={styles.container}>
            <View style={styles.iconCam}>
                <Entypo name="camera" size={15} color="white" />
            </View>
            <Text style={{marginLeft: 15}}>{props.name} comentou em sua postagem</Text>
        </View >
    )
}
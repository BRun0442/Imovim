import React from "react";
import {View, Text} from 'react-native'
import {styles} from './style'

export default function MyMessage(props) {
    return(
        <View style={styles.myMessage}>
            <Text style={styles.myMessageText}>{props.myMessage}</Text>
        </View>
    )    
}
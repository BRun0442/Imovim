import React from "react";
import {View, Text} from 'react-native'
import {styles} from './style'

export default function FriendMessage(props) {
    return(
        <View style={styles.friendMessage}>
            <Text style={styles.friendMessageText}>{props.friendMessage}</Text>
        </View>
    )    
}
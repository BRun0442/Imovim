import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './style'

export default function Contact({navigation, name, room_id, friend_photo, room_photo, room_type, room_name}) {
    return (
        <TouchableOpacity
            onPress={() => { navigation.navigate('Chat') }}
            style={styles.messageContainer}
        >
            <View style={styles.NewMessageContainer}>
                <Image style={styles.camContainer} source={{ uri: friend_photo || 
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" }} />
                
                <View style={styles.messageItems}>
                    <View style={styles.messageTexts}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.message}>...</Text>
                    </View>

                    <View style={styles.notification}></View>
                </View>

            </View>
        </TouchableOpacity>
    )
}
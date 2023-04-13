import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './style.js'
import { FontAwesome } from '@expo/vector-icons';

export default function ResultSearchFriends(props) {
    return (
        <TouchableOpacity
            onPress={() => props.goToProfile(props.user_id)}
            style={styles.result}
        >
            <View style={styles.photoUser}>
                <Image style={{ height: "100%", width: "100%", borderRadius: 50 }} source={{
                    uri: props.profileImage ||
                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                }} />
            </View>
            <Text style={styles.resultText}>{props.name}</Text>
        </TouchableOpacity>
    )
}
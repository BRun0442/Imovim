import React from 'react'
import { View, Text, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { styles } from './style'

export default function NotificationLike(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.iconCam}
                source={{
                    uri: props.profileImage ||
                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                }}
            />

            <View style={styles.textContainer}>
                <Text style={styles.textNotifcation}>{props.text}</Text>
                <Text style={styles.textTime}>Há {props.time}</Text>
            </View>
        </View>
    )
}
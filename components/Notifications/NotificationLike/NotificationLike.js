import React, { useContext } from 'react'
import { View, Text, Image, TouchableOpacity, Touchable } from 'react-native'
import { styles } from './style'
import { AuthContext } from '../../../contexts/auth'

export default function NotificationLike({ navigation, navigateToProfile, user_id, profileImage, text, created_at, postId, nickname }) {
    const { id, setAnotherUser_id, setCurrentPost } = useContext(AuthContext)

    return (
        <TouchableOpacity
            onPress={
                () => {
                    setCurrentPost(postId)
                    navigation.navigate("Ver Post")
                }
            }

            style={styles.container}>
            <TouchableOpacity onPress={() => navigateToProfile(user_id)}>
                <Image style={styles.iconCam}
                    source={{
                        uri: profileImage ||
                            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    }}
                />
            </TouchableOpacity>

            <View style={styles.textContainer}>
                <Text style={styles.textName}>{nickname}</Text>
                <Text style={styles.textNotifcation}>{text}</Text>
                <Text style={styles.textTime}>{created_at}</Text>
            </View>
        </TouchableOpacity>
    )
}
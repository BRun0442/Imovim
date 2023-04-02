import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './style'
import { AuthContext } from "../../contexts/auth";
import MessagesModal from "../Modals/MessagesModal";

import IconExitGroup from '../Modals/IconExitGroup'

export default function Contact({ navigation, getChats, name, room_id, friend_photo, room_photo, room_type, room_name }) {
    const { setChatFocusedId, setChatProfileImage, setChatNickname, setMessageList } = useContext(AuthContext)

    const [visibleModal, setVisibleModal] = useState(false)

    return (
        <TouchableOpacity
            onPress={() => {
                setChatFocusedId(room_id)
                setChatNickname(name)
                setChatProfileImage(friend_photo)
                setMessageList([])
                navigation.navigate('Chat')
            }}

            onLongPress={() => {
                setVisibleModal(true)
            }}

            style={styles.messageContainer}
        >
            <View style={styles.NewMessageContainer}>
                <Image style={styles.camContainer} source={{
                    uri: friend_photo ||
                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                }} />

                <View style={styles.messageItems}>
                    <View style={styles.messageTexts}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.message}>...</Text>
                    </View>

                    {/* <View style={styles.notification}></View> */}
                </View>


                <Modal
                    visible={visibleModal}
                    transparent={true}
                    onRequestClose={() => setVisibleModal(false)}
                >
                    <MessagesModal
                        room_id={room_id}
                        getChats={getChats}
                        handleClose={() => setVisibleModal(false)}
                    />

                </Modal>
                
            </View>
        </TouchableOpacity>
    )
}
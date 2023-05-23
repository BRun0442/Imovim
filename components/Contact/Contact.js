import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal, Vibration } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './style'
import { AuthContext } from "../../contexts/auth";
import MessagesModal from "../Modals/MessagesModal";

import IconExitGroup from '../Modals/IconExitGroup'
import { Entypo } from '@expo/vector-icons';
import api from "../../services/api";

export default function Contact({ navigation, description, friend_id, getChats, name, room_id, friend_photo, room_photo, room_type, room_name }) {
    const { setChatMembers, groupDescription, setGroupDescription, setChatFocusedId, setChatProfileImage, setFriend_id, setChatNickname, setMessageList } = useContext(AuthContext)

    const [visibleModal, setVisibleModal] = useState(false)

    const getChatMembers = async () => {
        const results = await api.get(`/chat/get-group-members/${room_id}`)
        console.log(results.data);
        setChatMembers(results.data)
    }

    return (
        <TouchableOpacity
            onPress={() => {
                setChatFocusedId(room_id)
                setGroupDescription(description)
                setFriend_id(friend_id)
                // setMessageList([])
                if (room_type == 'private') {
                    setChatProfileImage(friend_photo)
                    setChatNickname(name)
                    navigation.navigate('Chat')
                } 
                else {
                    setChatProfileImage(room_photo)
                    setChatNickname(room_name)
                    getChatMembers()
                    .then(() => {
                        navigation.navigate('Chat Grupo')
                    })
                }
            }}

            onLongPress={() => {
                setVisibleModal(true)
                Vibration.vibrate(100)
            }}

            style={styles.messageContainer}
        >
            <View style={styles.NewMessageContainer}>
                <View style={styles.camContainer}>
                    <Image style={styles.cam} source={{
                        uri: room_type == 'private' ? (friend_photo ||
                            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png") :
                            (room_photo ||
                                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png")
                    }} />
                </View>

                <View style={styles.messageItems}>
                    <View style={styles.messageTexts}>
                        <Text style={styles.name}>{room_type == 'public' ? room_name : name}</Text>
                        <Text style={styles.name}>{room_type == 'public' ? (<Entypo name="globe" size={20} color="#000" />) : (<FontAwesome name="lock" size={20} color="#000" />)}</Text>
                        {/* <Text style={styles.message}>...</Text> */}
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
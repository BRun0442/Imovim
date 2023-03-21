import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { FlatList } from "react-native-gesture-handler";
import Header from '../../Header/Header'
import { styles } from './style'
import { FontAwesome } from "@expo/vector-icons";

import FriendMessage from '../../FriendMessage/FriendMessage';
import MyMessage from '../../MyMessage/MyMessage';
import { AntDesign } from "@expo/vector-icons";

export default function Chat({ navigation }) {
    const [messeges, setMesseges] = useState([1])
    return (
        <View>
            <Header navigation={navigation} />

            <View style={styles.chat}>
                <View style={styles.container}>

                    <View style={styles.data}>

                        <View style={styles.camContainer}>
                            <FontAwesome name="camera" size={15} color="#FFF" />
                        </View>

                        <View style={styles.dataItems}>
                            <View style={{ marginLeft: 15 }}>
                                <Text style={styles.name}>name</Text>
                                <Text style={styles.message}>message</Text>
                            </View>
                        </View>

                    </View>
                    <View style={styles.line} />

                    <FlatList
                        data={messeges}
                        
                        ListFooterComponent={
                            <View style={styles.inputContainer}>
                                <TextInput placeholder="Escreva um comentário aqui..." style={styles.input} />

                                <TouchableOpacity onPress={() => sendComment(commentText, id, postFocusedId, setCommentText, setComments)} style={styles.buttonSendComment}>
                                    <AntDesign name="arrowright" size={24} color="#FFF" />
                                </TouchableOpacity>
                            </View>
                        }

                        renderItem={({ message }) =>
                            <View style={styles.chatContainer}>
                                <View style={[styles.messages, { alignItems: 'flex-start' }]}>
                                    <View style={{ width: "100%" }} />
                                    <FriendMessage friendMessage="oi" />
                                    <FriendMessage friendMessage="tudo bemmmmmm?" />
                                </View>

                                <View style={[styles.messages, { alignItems: 'flex-end' }]}>
                                    <View style={{ width: "100%" }} />
                                    <MyMessage myMessage="oiiiiii" />
                                    <MyMessage myMessage="oiiiiii" />
                                    <MyMessage myMessage="oiiiiii" />
                                    <MyMessage myMessage="oiiiiii" />
                                    <MyMessage myMessage="oiiiiii" />
                                    <MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" /><MyMessage myMessage="oiiiiii" />
                                </View>
                            </View>
                        }
                    />
                </View>
            </View>
        </View>
    )
}
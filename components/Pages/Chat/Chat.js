import React, { useState, useEffect, useContext, useRef } from "react";
import { Image, View, Text, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Header from "../../Header/Header";
import { styles } from "./style";
import { FontAwesome } from "@expo/vector-icons";

import FriendMessage from "../../FriendMessage/FriendMessage";
import MyMessage from "../../MyMessage/MyMessage";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { AuthContext } from "../../../contexts/auth";
import { Ionicons } from '@expo/vector-icons';

import { io } from "socket.io-client";

import { saveMessage } from "../../../services/chat";
import { getMessages } from "../../../services/chat";

export default function Chat({ navigation }) {
  const flatlistRef = useRef(null);
  const { id, chatFocusedId, chatNickname, chatProfileImage, messageList, setMessageList } = useContext(AuthContext)
  const [chatAvailable, setChatAvailable] = useState(false);
  const [message, setMessage] = useState("");

  const [visible, setVisible] = useState(false);

  const socket = io.connect("https://imovim-chat.onrender.com");

  const retrieveMessages = async () => {
    await getMessages()
      .then((data) => {
        setMessageList(data)
        scrollToBottom()
      })
  }

  const joinRoom = () => {
    socket.emit("join_room", chatFocusedId); // connects to the socket and sends the room code
    retrieveMessages()
    setChatAvailable(true);
  };

  const sendMessage = async () => {
    if (message !== "") {
      const messageData = {
        room: chatFocusedId,
        author_id: id,
        message: message,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      saveMessage(messageData)

      // in the send_message it will emit the message that you sent to the receivers
      await socket.emit("send_message", messageData); // connects to the socket and sends data to it
      setMessage("");
      scrollToBottom()
      // joinRoom();
    }
  };

  const scrollToBottom = () => {
    flatlistRef.current?.scrollToEnd();
  };

  useEffect(() => {
    joinRoom();
    scrollToBottom()
  }, [chatFocusedId]);

  useEffect(() => {
    const getMessage = async () => {
      await socket.on("receive_message", (data) => {
        console.log(data);
        setMessageList((list) => [...list, data]);
        retrieveMessages()
        scrollToBottom()
      });
    };
    getMessage();
  }, [socket]); // it wll be called whenever there is a change in the socket server

  if (!chatAvailable) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Header navigation={navigation} />

        <View style={styles.container}>

          <View style={styles.chat}>

            <View style={styles.data}>

              <View style={styles.dataItems}>

                <View style={styles.dataUser}>

                  <Image style={styles.camContainer} source={{
                    uri: chatProfileImage ||
                      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  }} />

                  <View style={styles.infoUser}>
                    <Text style={styles.name}>{chatNickname}</Text>
                    <Text style={styles.message}>STATUS</Text>
                  </View>
                </View>

                {visible && (
                  <View style={styles.actionsContainer}>
                    <View style={styles.actionsButton}>
                      <TouchableOpacity>
                        <Text style={styles.textButton}>Dados do grupo</Text>
                      </TouchableOpacity>

                      <View style={styles.lineButtons}></View>

                      <TouchableOpacity>
                        <Text style={styles.textButton}>Sair do grupo</Text>
                      </TouchableOpacity>

                      <View style={styles.lineButtons}></View>

                      <TouchableOpacity>
                        <Text style={styles.textButton}>Denunciar</Text>
                      </TouchableOpacity>

                    </View>

                    <TouchableOpacity style={styles.closeIcon} onPress={() => setVisible(false)}>
                      <Ionicons name="ios-close" size={30} color="#FFF" />
                    </TouchableOpacity>
                  </View>
                )}

                {!visible && (
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => setVisible(true)}
                  >
                    <Entypo name="dots-three-vertical" size={22} color="#FFF" />
                  </TouchableOpacity>
                )}
              </View>
            </View>

            <View style={styles.line} />
            <FlatList 
              style={{ height: "60%" }}
              ref={flatlistRef}
              data={messageList}
              renderItem={({item}) => 
                  <View key={item._id}>
                    {item.author_id == id ? (
                      <View
                        style={[styles.messages, { alignItems: "flex-end" }]}
                      >
                        <View style={{ width: "100%" }} />
                        <MyMessage myMessage={item.message} />
                      </View>
                    ) : (
                      <View
                        key={item._id}
                        style={[styles.messages, { alignItems: "flex-start" }]}
                      >
                        <FriendMessage friendMessage={item.message} />
                      </View>
                    )}
                  </View>

              }
              />
              
            <View style={styles.inputContainer}>
              <TextInput
                value={message}
                onChangeText={(text) => setMessage(text)}
                placeholder="Mensagem.."
                style={styles.input}
              />

              <TouchableOpacity
                onPress={() => sendMessage()}
                style={styles.sendMessage}
              >
                <AntDesign name="arrowright" size={24} color="#FFF" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

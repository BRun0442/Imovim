import React, { useState, useEffect, useContext } from "react";
import {
  Image,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Header from "../../Header/Header";
import { styles } from "./style";
import { FontAwesome } from "@expo/vector-icons";

import FriendMessage from "../../FriendMessage/FriendMessage";
import MyMessage from "../../MyMessage/MyMessage";
import { AntDesign } from "@expo/vector-icons";
import { AuthContext } from "../../../contexts/auth";
import { io } from "socket.io-client";

export default function Chat({ navigation }) {
  const { id, chatFocusedId, chatNickname, chatProfileImage } = useContext(AuthContext)
  const [chatAvailable, setChatAvailable] = useState(false);
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const socket = io.connect("https://imovim-chat.onrender.com");

  const joinRoom = () => {
    // if (username !== "" && room !== ""){
    socket.emit("join_room", chatFocusedId); // connects to the socket and sends the room code
    setChatAvailable(true);
    // }
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
      //   saveMessage(messageData)

      // in the send_message it will emit the message that you sent to the receivers
      await socket.emit("send_message", messageData); // connects to the socket and sends data to it
      //   setMessageList((list) => [...list, messageData])
      setMessage("");
    }
  };

  useEffect(() => {
    joinRoom();
  }, [chatFocusedId]);

  useEffect(() => {
    // retrieveMessages()
    const getMessage = async () => {
      await socket.on("receive_message", (data) => {
        console.log(data);
        setMessageList((list) => [...list, data]);
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
              <Image style={styles.camContainer} source={{ uri: chatProfileImage || 
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              }} />
             
              <View style={styles.dataItems}>
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.name}>{chatNickname}</Text>
                  <Text style={styles.message}>message</Text>
                </View>
              </View>
            </View>
            <View style={styles.line} />

            <ScrollView style={{ marginBottom: 20 }}>
              {messageList.map((messageContent, index) => {
                return (
                  <View key={index}>
                    {messageContent.author_id === id ? (
                      <View
                        style={[styles.messages, { alignItems: "flex-end" }]}
                      >
                        <View style={{ width: "100%" }} />
                        <MyMessage myMessage={messageContent.message} />
                      </View>
                    ) : (
                      <View
                        key={index}
                        style={[styles.messages, { alignItems: "flex-start" }]}
                      >
                        <FriendMessage friendMessage={messageContent.message} />
                      </View>
                    )}
                  </View>
                );
              })}
              
            </ScrollView>

            <View style={styles.inputContainer}>
              <TextInput
                value={message}
                onChangeText={(text) => setMessage(text)}
                placeholder="Escreva um comentário aqui..."
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

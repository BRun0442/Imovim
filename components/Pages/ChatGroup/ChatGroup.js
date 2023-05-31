import React, { useState, useEffect, useContext, useRef } from "react";
import { Image, View, Text, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Modal, Vibration } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { styles } from "./style"

import Header from "../../Header/Header";
import MyMessage from "../../MyMessage/MyMessage";
import DeleteMessage from "../../Modals/DeleteMessage";
import ExitGroup from "../../Modals/IconExitGroup"
import ComplaintGroup from "../../Modals/ComplaintGroup";
import GroupMessage from "../../GroupMessage/GroupMessage"

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { AuthContext } from "../../../contexts/auth";
import { Ionicons } from '@expo/vector-icons';

import { io } from "socket.io-client";
import axios from "axios";

export default function ChatGroup({ navigation }) {
  const flatlistRef = useRef(null);
  const { id, setChatMembers, chatMembers, chatFocusedId, chatNickname, chatProfileImage, messageList, setMessageList, friend_id } = useContext(AuthContext)
  const [chatAvailable, setChatAvailable] = useState(false);
  const [message, setMessage] = useState("");

  const [visible, setVisible] = useState(false);
  const [visibleComplaintModal, setVisibleComplaintModal] = useState(false)
  const [visibleExitGroupModal, setVisibleExitGroupModal] = useState(false)
  const [visibleDeleteMessage, setVisibleDeleteMessage] = useState(false)

  const socket = io.connect("https://imovim-chat.onrender.com");

  const retrieveMessages = async () => {
    await axios.get(`https://imovim-api.cyclic.app/chat/get-messages/${chatFocusedId}`)
      .then(res => {
        setMessageList(res.data)
        scrollToBottom()
      })
  }

  const joinRoom = () => {
    socket.emit("join_room", chatFocusedId); // connects to the socket and sends the room code
    retrieveMessages()
    setChatAvailable(true);
  };

  const saveMessage = async (messageData) => {
    await axios.post("https://imovim-api.cyclic.app/chat/create-message", messageData)
  }

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
    // console.log('teste', socket);
  }, [socket]); // it wll be called whenever there is a change in the socket server

  if (!chatAvailable) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
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
                  </View>
                </View>

                {visible && (
                  <View style={styles.actionsContainer}>
                    <View style={styles.actionsButton}>
                      <TouchableOpacity onPress={() => navigation.navigate("Dados do Grupo")}>
                        <Text style={styles.textButton}>Dados do grupo</Text>
                      </TouchableOpacity>

                      <View style={styles.lineButtons} />

                      <TouchableOpacity onPress={() => setVisibleExitGroupModal(true)}>
                        <Text style={styles.textButton}>Sair do grupo</Text>
                      </TouchableOpacity>

                      <Modal
                        visible={visibleExitGroupModal}
                        transparent={true}
                        onRequestClose={() => setVisibleExitGroupModal(false)}
                      >
                        <ExitGroup
                          chatNickname={chatNickname}
                          handleClose={() => setVisibleExitGroupModal(false)}
                        />
                      </Modal>

                      {/* <View style={styles.lineButtons} /> */}

                      {/* <TouchableOpacity onPress={() => setVisibleComplaintModal(true)}>
                        <Text style={styles.textButton}>Denunciar</Text>
                      </TouchableOpacity> */}

                      <Modal
                        visible={visibleComplaintModal}
                        transparent={true}
                        onRequestClose={() => setVisibleComplaintModal(false)}
                      >
                        <ComplaintGroup
                          handleClose={() => setVisibleComplaintModal(false)}
                        />
                      </Modal>

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
              data={messageList} // change to message list
              renderItem={({ item }) =>

                <View key={item._id}>
                  {item.author_id == id ? (
                    <View
                      style={[styles.messages, { alignItems: "flex-end" }]}
                    >
                      <View style={{ width: "100%" }} />

                      <TouchableOpacity
                        activeOpacity={1}
                        onLongPress={
                          () => {
                            setVisibleDeleteMessage(true)
                            Vibration.vibrate(100)
                          }
                        }

                      >
                        <MyMessage myMessage={item.message} />
                      </TouchableOpacity>

                      <Modal
                        visible={visibleDeleteMessage}
                        transparent={true}
                        onRequestClose={() => setVisibleDeleteMessage(false)}
                      >
                        <DeleteMessage handleClose={() => setVisibleDeleteMessage(false)} />
                      </Modal>


                    </View>
                  ) : (
                    <View
                      key={item._id}
                      style={[styles.messages, { alignItems: "flex-start" }]}
                    >
                      {/* <FriendMessage friendMessage={item.message} /> */}
                      <GroupMessage profileImage={item.profileImage} hour={item.time} message={item.message} user={item.nickname} />
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
    </View>
  );
}

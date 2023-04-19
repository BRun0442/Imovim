import React, { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, Image, ScrollView, StatusBar, KeyboardAvoidingView, SafeAreaView } from "react-native";

import { CreateUserContext } from "../../../contexts/createUser";
import { useContext } from "react";
import Header from "../../Header/Header"

import { defaultStyle } from "../../../assets/style/style";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from "@expo/vector-icons";
import Comentario from '../../Comentario/Comentario';
import axios from "axios";
import { AccountDataContext } from "../../../contexts/accountData";
import { AuthContext } from "../../../contexts/auth";

import { getComments, sendComment } from "../../../services/comment";

function Comentarios({ navigation }, props) {
  const { id } = useContext(AuthContext)
  const { postFocusedId } = useContext(AccountDataContext)
  const [currentPost, setCurrentPost] = useState()
  const [comments, setComments] = useState(null)
  const [commentText, setCommentText] = useState('')


  const getData = () => {
    getComments(postFocusedId, setComments)
      .then(() => {
        setCurrentPost(postFocusedId)
      })
  }

  useEffect(() => {
    getData()
  }, [postFocusedId])

  if (comments === null || currentPost != postFocusedId) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    )
  }
  if (comments === []) {
    return (
      <View>
        <Text>Nenhum comentário</Text>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>


      <Header navigation={navigation} />

      {/* <View style={styles.header}>

          <View style={styles.likeAndComentsContainer}>

            <TouchableOpacity style={styles.button}>
              <AntDesign name="like1" size={24} color="white" style={{ marginRight: 15 }} />
              <Text style={styles.buttonText}>{props.likeQuantity}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Ionicons name="chatbubble" size={24} color="white" />
              <Text style={styles.buttonText}>{props.comentQuantity}</Text>
            </TouchableOpacity>

          </View>
          
          <View style={styles.shareContainer}>
            <TouchableOpacity style={styles.button}>
              <FontAwesome name="share" size={24} color="white" />
              <Text style={styles.buttonText}>{props.shareQuantity}</Text>
            </TouchableOpacity>
          </View>

        </View> */}

      <ScrollView style={styles.comentsContainer}>
        {comments.map((item, index) => {
          return (
            <Comentario
              key={index}
              comment_id={item.comment_id}
              updated={item.updated}
              user_id={item.user_id}
              profileImage={item.profileImage}
              profileName={item.nickname}
              daysAgo={item.created_at}
              coment={item.comment}
              getComments={getData}
            />
          )
        })}
      </ScrollView>


      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
        <View style={styles.writeComentContainer}>
          <TextInput value={commentText} onChangeText={(text) => setCommentText(text)} placeholder="Escreva um comentário aqui..." style={styles.input} />

          <TouchableOpacity onPress={() => sendComment(commentText, id, postFocusedId, setCommentText, setComments)} style={styles.buttonSendComment}>
            <AntDesign name="arrowright" size={24} color="#FFF" />
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
      <StatusBar />
    </SafeAreaView>
  );
}

export default Comentarios;

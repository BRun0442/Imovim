import React, { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from "react-native";

import Comentario from '../../Comentario/Comentario';
import Header from "../../Header/Header"

import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";

import { AccountDataContext } from "../../../contexts/accountData";
import { AuthContext } from "../../../contexts/auth";
import { useContext } from "react";
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
    <View style={styles.container}>

      <Header navigation={navigation} />

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
        <View style={{ paddingHorizontal: 10 }}>
          <View style={styles.writeComentContainer}>
            <TextInput value={commentText} onChangeText={(text) => setCommentText(text)} placeholder="Escreva um comentário aqui..." style={styles.input} />

            <TouchableOpacity onPress={() => sendComment(commentText, id, postFocusedId, setCommentText, setComments)} style={styles.buttonSendComment}>
              <AntDesign name="arrowright" size={24} color="#FFF" />
            </TouchableOpacity>

          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default Comentarios;

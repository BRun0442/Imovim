import React, { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, Image, ScrollView, StatusBar, KeyboardAvoidingView, SafeAreaView } from "react-native";

import { CreateUserContext } from "../../../contexts/createUser";
import { useContext } from "react";

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

function Comentarios(props) {
  const { id } = useContext(AuthContext)
  const { postFocusedId } = useContext(AccountDataContext)
  const [comments, setComments] = useState(null)
  const [commentText, setCommentText] = useState('')

  useEffect(() => {
    getComments(postFocusedId, setComments)
  }, [])

  if (comments === null) {
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
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >

        <View style={styles.header}>

          <View style={styles.likeAndComents}>

            <TouchableOpacity style={styles.button}>
              <AntDesign name="like1" size={24} color="white" style={{ marginRight: 15 }} />
              <Text style={styles.buttonText}>{props.likeQuantity}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Ionicons name="chatbubble" size={24} color="white" />
              <Text style={styles.buttonText}>{props.comentQuantity}</Text>
            </TouchableOpacity>

          </View>

          <TouchableOpacity style={styles.button}>
            <FontAwesome name="share" size={24} color="white" />
            <Text style={styles.buttonText}>{props.shareQuantity}</Text>
          </TouchableOpacity>

        </View>

        <ScrollView style={styles.comentsContainer}>
          {comments.map((item) => {
            return (
              <Comentario
                key={item.id}
                profileImage={item.profileImage}
                profileName={item.nickname}
                daysAgo={item.created_at}
                coment={item.comment}
              />
            )
          })}
        </ScrollView>

        <View style={styles.writeComentContainer}>

          <TextInput value={commentText} onChangeText={(text) => setCommentText(text)} placeholder="Escreva um comentário aqui..." style={styles.input} />

          <TouchableOpacity onPress={() => sendComment(commentText, id, postFocusedId, setCommentText, setComments)} style={styles.buttonSendComment}>
            <AntDesign name="arrowright" size={24} color="#FFF" />
          </TouchableOpacity>

        </View>
        <StatusBar />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Comentarios;

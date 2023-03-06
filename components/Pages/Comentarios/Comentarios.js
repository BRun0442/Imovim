import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar
} from "react-native";

import { CreateUserContext } from "../../../contexts/createUser";
import { useContext } from "react";

import { defaultStyle } from "../../../assets/style/style";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Comentario from '../../Comentario/Comentario';
import axios from "axios";

function Comentarios(props) {
  const { postId } = useContext(CreateUserContext)
  const [comments, setComments] = useState()

  useEffect(() => {
    const getData = async () => {
    await axios.get(`https://imovim-api.cyclic.app/comment/get-comments-of-post/${postId}`)
    .then((res) => {
      setComments(res.data)
    })
    }
    getData()
  }, [])

  if(!comments) {
    return <View>
      <Text>Loading...</Text>
    </View>
  }
  return (
    <ScrollView>
      <StatusBar/>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.likeAndComents}>
            <TouchableOpacity style={styles.button}>
              <AntDesign name="like1" size={24} color="white" />
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
        <View style={styles.comentsContainer}>
          { comments.map((item) => {
            return (
              <Comentario
              key={item.id}
              profileImage={item.profileImage}
              profileName={item.nickname}
              daysAgo={item.created_at}
              coment={item.comment}
            />
            )
          }) }
        </View>
      </View>
    </ScrollView>
  );
}

export default Comentarios;

import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import { styles } from "./styles";
import { defaultStyle } from "../../../assets/style/style";
import TopBar from "../../TopBar/TopBar";
import Post from "../../Post/Post.js";

function Cadastro() {

  const [posts, setPosts] = useState(
    [
      <Post
        profileImage="https://randomuser.me/api/portraits/thumb/men/57.jpg"
        postImage="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd54aebe14a809e43/637fda5a74b88f10ab93e298/brasil_servia_richarlison_2_gol_2.jpg"
        profileName="Osmar Bruno"
        postDate="hh/dd. quinta 24 de nov"
        postDescription="Esse gol foi realmente muito lindo! Pra cima deles Brasil!!"
        likeQuantity="35"
        comentQuantity="12"
        shareQuantity="1"
      />,

      <Post
        profileImage="https://randomuser.me/api/portraits/thumb/women/55.jpg"
        postImage="https://s2.glbimg.com/r1crSs6Eo5TfEmBeNX5zlrPiI9c=/0x0:1023x1280/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/X/A/GA28b4TdCWT7puCrVDyg/whatsapp-image-2022-11-24-at-21.21.50.jpeg"
        profileName="Camila Fernandes"
        postDate="hh/dd. quinta 24 de nov"
        postDescription="Nunca duvidei!!"

        likeQuantity="35"
        comentQuantity="12"
        shareQuantity="1"
      />,

      <Post
        profileImage="https://randomuser.me/api/portraits/thumb/men/56.jpg"
        postImage="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd54aebe14a809e43/637fda5a74b88f10ab93e298/brasil_servia_richarlison_2_gol_2.jpg"
        profileName="Luis"
        postDate="hh/dd. quinta 24 de nov"
        postDescription="Gol merecido, muito bonita a foto"

        likeQuantity="35"
        comentQuantity="12"
        shareQuantity="1"
      />,

      <Post
        profileImage="https://randomuser.me/api/portraits/thumb/men/56.jpg"
        postImage="https://midias.agazeta.com.br/2022/11/24/richarlison-comemora-gol-do-brasil-sobre-a-servia-917828.jpg"
        profileName="Luis"
        postDate="hh/dd. quinta 24 de nov"
        postDescription="Esse cara joga demais!!!"
        
        likeQuantity="35"
        comentQuantity="12"
        shareQuantity="1"
      />
  ]
  );

  return (
    <ScrollView>
      <View
        style={
          {
            // backgroundColor: 'white',
            // height: '100%',
          }
        }
      >
        <TopBar
          profileImage="https://randomuser.me/api/portraits/thumb/men/57.jpg"
          postImage="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd54aebe14a809e43/637fda5a74b88f10ab93e298/brasil_servia_richarlison_2_gol_2.jpg"
        />

        {posts}
      </View>
    </ScrollView>
  );
}

export default Cadastro;

import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { styles } from "./styles";
import { defaultStyle } from "../../../assets/style/style";
import Header from "../../Header/Header.js";
import Post from "../../Post/Post.js";
import feedManager from "../../../services/feed";
import likePost from '../../../services/post';
import { AuthContext } from '../../../contexts/auth.js';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ProfileImage from "../../ProfileImage/ProfileImage";

function Feed({navigation}) {
  let postsData = [];
  let postArray = [];
  const [posts, setPosts] = useState();
  const { id } = useContext(AuthContext);
  const [like, setLike] = useState(0);

  //Serve para atualizar a pagina quando mudar de rota e voltar para rota
  const isFocused = useIsFocused();

  async function getFeed() {
    try {
      const postsList = await feedManager()

      function getPosts(){
        postsList.forEach(post => {
          postsData.push(
            {
              id: post.id,
              profileImage: "https://randomuser.me/api/portraits/thumb/men/57.jpg",
              postImage: post.image,
              profileName: post.nickname,
              postDate: post.created_at,
              postDescription: post.caption,
              likeQuantity: post.likes,
              comentQuantity: post.comments,
              shareQuantity: post.updated
            }
          )
        })

        postsData.forEach(dictionary => {
          postArray.push(<Post
            key={dictionary.id}
            profileImage={dictionary.profileImage}
            likeFunction={() => { 
              likePost(id, dictionary.id);
            }}
            postImage={dictionary.postImage}
            profileName={dictionary.profileName}
            postDate={dictionary.postDate}
            postDescription={dictionary.postDescription}
            likeQuantity={dictionary.likeQuantity}
            comentQuantity={dictionary.comentQuantity}
            shareQuantity={dictionary.shareQuantity}
          ></Post>)
        })

        setPosts(postArray)
      }

      getPosts()
    } catch (error) {
      console.log('EEERRRROOO', error)
    }
  }

  useEffect(() => {
    getFeed();
  }, [isFocused])

  return (
    <ScrollView style={{backgroundColor: '#bcc0c4'}}>
      <Header />

      <View style={styles.TopBarContainer}>
        <View style={styles.photoContainer}>
          <TouchableOpacity styles={styles.button}>
            <MaterialCommunityIcons name="calendar" color={"#fff"} size={26} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {navigation.navigate('CriarPost')}} styles={styles.button}>
            <MaterialCommunityIcons name="camera" color={"#fff"} size={26} />
          </TouchableOpacity>
        </View>
      </View>
      
      {posts}
    </ScrollView>
  );
}

export default Feed;
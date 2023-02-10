import React, {useEffect, useState} from "react";
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
import feedManager from "../../../services/feed";

function Cadastro() {
  let postArray = [];
  const [posts, setPosts] = useState();

  async function getFeed()
  {
      try {
        const postsList = await feedManager()
        console.log(postsList)

        postsList.forEach(post => {
          postArray.push(
            <Post
              profileImage="https://randomuser.me/api/portraits/thumb/men/57.jpg"
              postImage={post.image}
              profileName={post.nickname}
              postDate={post.created_at}
              postDescription={post.caption}
              
              likeQuantity={post.likes}
              comentQuantity={post.comments}
              shareQuantity={post.updated}
            />
          )
        })
        
        setPosts(postArray)
      } catch (error) {
        console.log('EEERRRROOO', error)
      }
  }

  useEffect(() => {
    getFeed();
  }, [])

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
        />
        {posts}
      </View>
    </ScrollView>
  );
}

export default Cadastro;

import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, StatusBar } from "react-native";
import { styles } from "./styles";
import { defaultStyle } from "../../../assets/style/style";
import Header from "../../Header/Header.js";
import Post from "../../Post/Post.js";
import feedManager from "../../../services/feed";
import likePost from '../../../services/post';
import { AuthContext } from '../../../contexts/auth.js';

function Feed() {
  let postArray = [];
  const [posts, setPosts] = useState();
  const { id } = useContext(AuthContext);

  async function getFeed() {
    try {
      const postsList = await feedManager()
      postsList.forEach(post => {
        postArray.push(
          <Post
            profileImage="https://randomuser.me/api/portraits/thumb/men/57.jpg"
            likeFunction={() => { likePost(id, post.id) }}
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
      <Header />
      {posts}
    </ScrollView>
  );
}

export default Feed;

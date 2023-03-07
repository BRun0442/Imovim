import React, { useEffect, useState, useContext } from "react";
import { View, TouchableOpacity, StatusBar } from "react-native";
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
import { FlatList } from "react-native-gesture-handler";
import { CreateUserContext } from "../../../contexts/createUser";

function Feed({navigation}) {
  const { setPostId } = useContext(CreateUserContext)
  const [posts, setPosts] = useState();
  const { id } = useContext(AuthContext);
  let isLoading;

  //Refresh page when change the route
  const isFocused = useIsFocused();

  async function getFeed() {
    isLoading = true;
    try {
      setPosts(await feedManager());
    } catch (error) {
      console.log(error);
    }
    isLoading = false;
  }

  useEffect(() => {
    // getFeed();
  }, [isFocused])

  return (
    <FlatList
      data={posts}

      renderItem={({item}) => 
        <Post
          goToCommentScreen={() => {
            setPostId(item.id)
            navigation.navigate('Comentarios')
          }}
          likePost={async () => {
            await likePost(id, item.id);
            getFeed()
          }}
          
          {...item}
        />}

      keyExtractor={item => item.id}

      maxToRenderPerBatch={5}
      initialNumToRender={5}
      onRefresh={getFeed}
      refreshing={isLoading}
      
      ListHeaderComponent=
      {
        <View>
          <StatusBar/>
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
        </View>
      }
    />
  );
}

export default Feed;
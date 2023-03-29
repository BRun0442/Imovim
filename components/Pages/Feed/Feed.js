import React, { useEffect, useState, useContext } from "react";
import { View, Text, TouchableOpacity, StatusBar, Alert, SafeAreaView } from "react-native";
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
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AccountDataContext } from "../../../contexts/accountData";

import Toast from 'react-native-toast-message'
import { toastConfig } from '../../Toast/toastConfig';

function Feed({ navigation }) {
  const { setPostFocusedId } = useContext(AccountDataContext)
  const [posts, setPosts] = useState();
  const { id } = useContext(AuthContext);
  const [postAmmount, setPostAmmount] = useState(5);
  let isLoading;

  //Refresh page when change the route
  const isFocused = useIsFocused();

  async function getFeed() {
    isLoading = true;
    try {
      const feedData = await feedManager(postAmmount)
      setPosts(await feedData);
      return feedData
    } catch (error) {
      console.log(error);
    }
    isLoading = false;
  }

  const handlePostsLoading = async () => {
    setPostAmmount(postAmmount + 5)
    try {
      const feedData = await feedManager(postAmmount)
      setPosts(await feedData);
      return feedData
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getFeed();
  }, [isFocused])

  return (
    <FlatList
      data={posts}

      renderItem={({ item }) =>
        <Post
          goToCommentScreen={() => {
            setPostFocusedId(item.id)
            navigation.navigate('Comentarios')
          }}
          likePost={async () => {
            await likePost(id, item.id);
            getFeed()
          }}

          {...item}
        />}

      onEndReached={() => handlePostsLoading()}
      maxToRenderPerBatch={5}
      initialNumToRender={5}
      onRefresh={getFeed}
      refreshing={isLoading}
      keyExtractor={item => item.id}
      ListFooterComponent={
        <View style={{ height: 80, display: 'flex', width: '100%', alignItems: "center", justifyContent: "center" }}>
          <Text>Loading...</Text>
        </View>
      }
      ListHeaderComponent=
      {
        <SafeAreaView>
          <StatusBar />
          <Header navigation={navigation} />
          <View style={styles.TopBarContainer}>
            <View style={styles.photoContainer}>
              <TouchableOpacity onPress={() => { navigation.navigate('Criar Evento') }} styles={styles.button}>
                <MaterialCommunityIcons name="calendar" color={"#FFF"} size={26} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => { navigation.navigate('Camera') }} styles={styles.button}>
                <MaterialCommunityIcons name="camera" color={"#FFF"} size={26} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => { navigation.navigate('Criar Post') }} styles={styles.button}>
                <FontAwesome5 name="edit" size={24} color="#FFF" />
              </TouchableOpacity>
            </View>
            <Toast config={toastConfig} />
          </View>
        </SafeAreaView>
      }
    />
  );
}

export default Feed;
import React, { useEffect, useState, useContext, useCallback } from "react";
import { View, Text, ScrollView, FlatList, TouchableOpacity, StatusBar, RefreshControl, Alert, ActivityIndicator } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { styles } from "./styles";

import Header from "../../Header/Header.js";
import PostEvent from "../../PostEvent/PostEvent";
import Post from "../../Post/Post.js";
import Toast from 'react-native-toast-message'
import PTRView from "react-native-pull-to-refresh";

import { useIsFocused } from "@react-navigation/native";
import feedManager from "../../../services/feed";
import likePost from '../../../services/post';

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AuthContext } from '../../../contexts/auth.js';
import { FontAwesome5 } from '@expo/vector-icons';
import { AccountDataContext } from "../../../contexts/accountData";
import { toastConfig } from '../../Toast/toastConfig';
import { getFriendPosts } from "../../../services/feed";

export default function Feed({ navigation }) {
  const { setPostFocusedId } = useContext(AccountDataContext)
  const { id, setAnotherUser_id, setCurrentPost } = useContext(AuthContext);
  const [refreshing, setRefreshing] = useState(false);
  const [posts, setPosts] = useState();
  const [friendPosts, setFriendPosts] = useState()
  const [postAmmount, setPostAmmount] = useState(5);

  //Refresh page when change the route
  const isFocused = useIsFocused();

  async function getFeed() {
    isLoading = true;
    try {
      const feedData = await feedManager(postAmmount, id)
      setPosts(await feedData);
      return feedData
    } catch (error) {
      console.log(error);
    }
    isLoading = false;
  }

  async function handleFriendPosts() {
    const data = await getFriendPosts(id)
      .then((res) => setFriendPosts(res))
  }

  const handlePostsLoading = async () => {
    setPostAmmount(postAmmount + 5)
    try {
      const feedData = await feedManager(postAmmount, id)
      setPosts(await feedData);
      return feedData
    } catch (error) {
      console.log(error);
    }
  }

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };

  const [globalPosts, setGlobalPosts] = useState(true)

  useEffect(() => {
    getFeed();
    handleFriendPosts()
  }, [isFocused])

  const handleRefresh = () => {
    setRefreshing(true);
      setTimeout(async () => {
        await getFeed();
        await handleFriendPosts()
        setRefreshing(false);
      }, 2000)
  }

  if (!posts || !friendPosts) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View
      style={styles.container}
    >

      <StatusBar />

      <Header navigation={navigation} />

      <View>

        <View style={styles.TopBarContainer}>

          <View style={styles.topBar}>

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

        </View>

        <View style={styles.optionPost}>

          <View style={[styles.buttonGlobal, globalPosts ? { backgroundColor: "#F1F1F1" } : { backgroundColor: "#FFF" }]}>
            <TouchableOpacity
              onPress={() => setGlobalPosts(true)}
              style={[styles.optionPostButton, globalPosts ? { backgroundColor: "#D9D9D9" } : { backgroundColor: "#F1F1F1" }]}
            >
              <Text style={styles.optionPostButtonText}>Global</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.buttonFriends, globalPosts ? { backgroundColor: "#FFF" } : { backgroundColor: "#F1F1F1" }]}>
            <TouchableOpacity
              onPress={() => {
                // handleFriendPosts()
                setGlobalPosts(false)
              }}
              style={[styles.optionPostButton, globalPosts ? { backgroundColor: "#F1F1F1", } : { backgroundColor: "#D9D9D9" }]}
            >
              <Text style={styles.optionPostButtonText}>Amigos</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>

      <FlatList
        data={globalPosts ? posts : friendPosts}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        renderItem={({ item }) =>
              <View>
                { item.post_type == 'post' ? (
                <Post
                  goToReportScreen={() => navigation.navigate("Denuncia")}
      
                  goToProfile={() => {
                    if (item.user_id != id) {
                      setAnotherUser_id(item.user_id)
                      navigation.navigate('Outros Perfis')
                    } else {
                      navigation.navigate('Meu Perfil')
                    }
                  }}
      
                  goToCommentScreen={() => {
                    setPostFocusedId(item.id)
                    navigation.navigate('Comentarios')
                  }}
      
                  goToSeePostScreen={() => {
                    setCurrentPost(item.id)
                    navigation.navigate('Ver Post')
                  }}
      
                  likePost={async () => {
                    await likePost(id, item.id);
                    { globalPosts ? getFeed() : handleFriendPosts() }
                  }}
      
                  {...item}
                />

                ) : (
                  <PostEvent 
                    {...item}  
                  />
                ) }
              </View>
        }
        onEndReached={() => handlePostsLoading()}
        maxToRenderPerBatch={5}
        initialNumToRender={5}
        keyExtractor={item => item.id}
        onRefresh={() => getFeed()}
        refreshing={refreshing}
      />


      {/* <View style={styles.loadingContainer}>
        <Text style={styles.loading} >Loading...</Text>
        <ActivityIndicator animating={true} size={20} color={"#FF6709"} />
      </View> */}

      <Toast config={toastConfig} />
    </View >
  );
}
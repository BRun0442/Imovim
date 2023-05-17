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
import { AntDesign } from '@expo/vector-icons';
import api from "../../../services/api";
import Toast from 'react-native-toast-message'
import { toastConfig } from '../../Toast/toastConfig';
import { getFriendPosts } from "../../../services/feed";

export default function Feed({ navigation }) {
  const { setPostFocusedId } = useContext(AccountDataContext)
  const [posts, setPosts] = useState();
  const [friendPosts, setFriendPosts] = useState()
  const { id, setAnotherUser_id, setCurrentPost } = useContext(AuthContext);
  const [postAmmount, setPostAmmount] = useState(5);
  let isLoading;

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

  const [globalPosts, setGlobalPosts] = useState(true)

  useEffect(() => {
    getFeed();
    handleFriendPosts()
  }, [isFocused])

  return (
    <View style={{ backgroundColor: "#FFF" }}>
      <StatusBar />
      <Header navigation={navigation} />
      <FlatList
        data={globalPosts ? posts : friendPosts}

        renderItem={({ item }) =>
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
          <View>
            {/* <View style={styles.TopBarContainer}>
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
            </View> */}

            <View style={styles.notificationTypes}>
              <TouchableOpacity
                onPress={() => setGlobalPosts(true)}
                style={[styles.notificationTypesButton, globalPosts ? { backgroundColor: "#D9D9D9", } : { backgroundColor: "#F1F1F1" }]}
              >
                <Text style={styles.notificationTypesText}>Global</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  // handleFriendPosts()
                  setGlobalPosts(false)
                }}
                style={[styles.notificationTypesButton, globalPosts ? { backgroundColor: "#F1F1F1", } : { backgroundColor: "#D9D9D9" }]}
              >
                <Text style={styles.notificationTypesText}>Amigos</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      />
      <Toast config={toastConfig} />
    </View>
  );
}
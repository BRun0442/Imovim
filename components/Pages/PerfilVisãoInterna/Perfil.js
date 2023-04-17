import React, { useState, useContext, useEffect } from "react";
import { View, Text, StatusBar, Image, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from "react-native";
import { styles } from "./style.js";

import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from "@expo/vector-icons";

import Header from "../../Header/Header";
import Post from "../../Post/Post";
import likePost from "../../../services/post";
// import { getUserData } from '../../../services/user'

import { AuthContext } from "../../../contexts/auth";
import { AccountDataContext } from "../../../contexts/accountData";

import { getAnotherUserData } from "../../../services/user";

export default function PerfilVisãoInterna({ navigation }, props) {
  const { setPostFocusedId } = useContext(AccountDataContext);
  const { profilePicture, id, posts, setPosts, profileUpdated, setProfileUpdated } = useContext(AuthContext);
  const [loaded, setLoaded] = useState(false)
  const [visible, setVisible] = useState(false);
  const [accountData, setAccountData] = useState()

  const [profileImage, setProfileImage] = useState()
  const [backgroundImage, setBackgroundImage] = useState()
  const [name, setName] = useState('')
  const [location, setLocation] = useState()
  const [currentUser, setCurrentUser] = useState()
  // const [posts, setPosts] = useState()

  const goToProfile = () => {
    navigation.navigate('Meu Perfil')
  }

  const getData = async () => {
    const data = await getAnotherUserData(id, id)
    console.log(data)
    console.log(data.profileInfo[0].profileImage)
    setProfileImage(data.profileInfo[0].profileImage)
    setLocation(data.profileInfo[0].localization)
    setName(data.profileInfo[0].nickname)
    setCurrentUser(data.profileInfo[0].user_id)
    setPosts(data.userPosts)
    setBackgroundImage(data.profileInfo[0].profileBackground)
    setLoaded(true)
    return data
  }

  useEffect(() => {
    getData()
  }, [profileUpdated])

  if (!loaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <Post
            goToProfile={goToProfile}
            goToCommentScreen={() => {
              setPostFocusedId(item.id);
              navigation.navigate("Comentarios");
            }}
            likePost={async () => {
              await likePost(id, item.id);
              getData()
            }}
            {...item}
          />
        )}
        keyExtractor={(item) => item.id}
        maxToRenderPerBatch={5}
        initialNumToRender={5}
        //   onRefresh={getFeed}
        //   refreshing={isLoading}
        ListHeaderComponent={
          <View>

            <Header navigation={navigation} />

            <Image style={styles.background} source={{ uri: backgroundImage }} />

            <View>

              <View style={styles.icons}>

                <View style={styles.iconCam}>
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 100,
                    }}
                    source={{
                      uri:
                        profileImage ||
                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
                    }}
                  />
                </View>

                <TouchableOpacity
                  style={styles.buttonSeeFriends}
                  onPress={() => {
                    navigation.navigate("Ver Amigos");
                  }}
                >
                  <Ionicons name="person-add" size={22} color="#FFF" />
                  <Text style={styles.textButtonSeeFriends}>Ver Amigos</Text>
                </TouchableOpacity>

              </View>

              <View style={styles.infos}>

                <View style={styles.data}>

                  <Text style={styles.name}>
                    {name}
                  </Text>

                  <Text style={styles.location}>
                    {location}
                  </Text>

                </View>

                <View>

                  <TouchableOpacity
                    style={styles.iconPencil}
                    onPress={() => {
                      navigation.navigate("Editar Perfil");
                    }}
                  >
                    <MaterialCommunityIcons name="pencil" size={28} color="#000" />
                  </TouchableOpacity>

                </View>

              </View>

            </View>

            <View style={styles.border} />

            <View style={styles.tagsView}>

              <View style={styles.tagsContainer}>

                <ScrollView horizontal={true}>

                  <TouchableOpacity
                    style={styles.addFavoriteSports}
                    onPress={() => {
                      navigation.navigate("Tela Tags");
                    }}
                  >
                    <Text style={styles.addFavoriteSportsText}>
                      #Adicione seus esportes favoritos
                    </Text>
                  </TouchableOpacity>

                </ScrollView>

              </View>

              <View style={styles.editProfileContainer}>

                {visible && (
                  <View style={styles.editProfile}>

                    <View style={styles.editProfileButtonContainer}>

                      <TouchableOpacity
                        style={styles.editProfileButton}
                        onPress={() => {
                          navigation.navigate("Tela Tags");
                        }}
                      >
                        <MaterialCommunityIcons name="pencil" size={25} color="#FFF" />
                        <Text style={styles.editProfileText}>Editar Tags</Text>
                      </TouchableOpacity>

                      <View style={styles.whiteLine} />

                      <TouchableOpacity
                        style={styles.editProfileButton}
                        onPress={() => {
                          navigation.navigate("Tela Ver Mais");
                        }}
                      >
                        <AntDesign name="eye" size={26} color="#FFF" />
                        <Text style={styles.editProfileText}>Ver Mais</Text>
                      </TouchableOpacity>

                    </View>

                    <TouchableOpacity
                      onPress={() => setVisible(false)}
                      style={styles.closedButton}
                    >
                      <Ionicons name="ios-close" size={30} color="#FFF" />
                    </TouchableOpacity>
                  </View>
                )}

                {!visible && (
                  <View>
                    <TouchableOpacity
                      onPress={() => setVisible(true)}
                      style={styles.openEdit}
                    >
                      <Entypo name="dots-three-horizontal" size={24} color="#FFF" />
                    </TouchableOpacity>
                  </View>
                )}

              </View>
            </View>
          </View>
        }
      />
      < StatusBar />
    </SafeAreaView >
  );
}
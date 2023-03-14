import React, { useState, useContext, useEffect } from "react";
import { View, Text, StatusBar, Image } from "react-native";
import { styles } from "./style.js";
import { FlatList } from "react-native-gesture-handler";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../Header/Header";

import Post from "../../Post/Post";
import likePost from "../../../services/post";
import getUserData from '../../../services/user'

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

{
  /* <FontAwesome5 name="user-check" size={24} color="black" /> */
}

// icone para quando a pessoa clicar em adicionar não sei por sapoha Ainda...
import { AuthContext } from "../../../contexts/auth";
import { AccountDataContext } from "../../../contexts/accountData";

export default function PerfilVisãoInterna({ navigation }, props) {
  const { accountData } = useContext(AccountDataContext);
  const { setAccountData } = useContext(AccountDataContext);
  const { setPostFocusedId } = useContext(AccountDataContext);
  const { profilePicture } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <FlatList
        data={accountData.userPosts}
        renderItem={({ item }) => (
          <Post
            goToCommentScreen={() => {
              setPostFocusedId(item.id);
              navigation.navigate("Comentarios");
            }}
            likePost={async () => {
              await likePost(accountData.profileInfo[0].id, item.id);
              getUserData(accountData.profileInfo[0].id, setAccountData);
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
            <View style={styles.background} />
            <View style={styles.perfil}>
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
                        accountData.profileInfo[0].profileImage ||
                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
                    }}
                  />
                </View>
                <TouchableOpacity
                  style={styles.iconPencil}
                  onPress={() => {
                    navigation.navigate("Editar Perfil");
                  }}
                >
                  <Foundation name="pencil" size={25} color="black" />
                </TouchableOpacity>
              </View>
              <View style={styles.infos}>
                <View style={styles.data}>
                  <Text style={styles.name}>
                    {accountData.profileInfo[0].nickname}
                  </Text>
                  <Text style={styles.location}>
                    {accountData.profileInfo[0].localization}
                  </Text>
                </View>
                <View style={styles.seeMore}>
                  <TouchableOpacity
                    style={styles.buttonSeeMore}
                    onPress={() => {
                      navigation.navigate("Ver Amigos");
                    }}
                  >
                    <Ionicons name="person-add" size={20} color="#FFF" />
                    <Text style={styles.textButtonSeeMore}>Ver Amigos</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.border}></View>
            <View style={styles.tagsView}>
              <View style={styles.tags}>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Tela Tags");
                  }}
                >
                  <Text style={styles.tagsText}>
                    #Adicione seus esportes favoritos
                  </Text>
                </TouchableOpacity>
              </View>
              
              <View>
                {visible && (
                  <View style={styles.editProfile}>

                    <View>

                      <TouchableOpacity
                        style={styles.editProfileButton}
                        onPress={() => {
                          navigation.navigate("Tela Tags");
                        }}
                      >
                        <Foundation name="pencil" size={24} color="#FFF" />
                        <Text style={styles.editProfileText}>Editar Tags</Text>
                      </TouchableOpacity>

                      <View style={styles.whiteLine}></View>
                      <TouchableOpacity
                        style={styles.editProfileButton}
                        onPress={() => {
                          navigation.navigate("Tela Ver Mais");
                        }}
                      >
                        <AntDesign name="eye" size={24} color="#FFF" />
                        <Text style={styles.editProfileText}>Ver Mais</Text>
                      </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                      onPress={() => setVisible(false)}
                      style={styles.closedButton}
                    >
                      <Ionicons name="ios-close" size={24} color="#FFF" />
                    </TouchableOpacity>
                  </View>
                )}

                {!visible && (
                  <View>
                    <TouchableOpacity
                      onPress={() => setVisible(true)}
                      style={styles.openEdit}
                    >
                      <Text style={styles.openEditText}>...</Text>
                    </TouchableOpacity>
                  </View>
                )}

              </View>
            </View>
            <View style={styles.line}></View>
          </View>
        }
      />
      < StatusBar />
    </View >
  );
}

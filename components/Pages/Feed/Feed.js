import React, { useEffect, useState, useContext, useCallback, useRef } from "react";
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity, ActivityIndicator, RefreshControl, Alert, Modal
} from "react-native";
import { styles } from "./styles";

import Header from "../../Header/Header.js";
import PostEvent from "../../PostEvent/PostEvent";
import Post from "../../Post/Post.js";
import Toast from "react-native-toast-message";
import { Modalize } from "react-native-modalize";
import ProfileImage from "../../ProfileImage/ProfileImage";
import ShowingGoingEvent from "../../Modals/ShowingGoingEvent";

import { useIsFocused } from "@react-navigation/native";
import feedManager from "../../../services/feed";
import likePost from "../../../services/post";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AuthContext } from "../../../contexts/auth.js";
import { FontAwesome5 } from "@expo/vector-icons";
import { AccountDataContext } from "../../../contexts/accountData";
import { toastConfig } from "../../Toast/toastConfig";
import { getFriendPosts } from "../../../services/feed";
import { getEvent } from "../../../services/events";
import { goToEvent } from "../../../services/events";
import { saveEvent } from "../../../services/events";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import Loading from "../../Loading/Loading";

export default function Feed({ navigation }) {
  const { setPostFocusedId } = useContext(AccountDataContext);
  const {
    id,
    setAnotherUser_id,
    setCurrentPost,
    updatingEvent,
    setUpdatingEvent,
  } = useContext(AuthContext);
  const [refreshing, setRefreshing] = useState(false);
  const [posts, setPosts] = useState();
  const [friendPosts, setFriendPosts] = useState([]);
  const [postAmmount, setPostAmmount] = useState(5);

  const [currentEvent, setCurrentEvent] = useState();
  const [participants, setParticipants] = useState();
  const [userGoes, setUserGoes] = useState();
  const [userSaved, setUserSaved] = useState();
  const [author, setAuthor] = useState();
  const [profileImage, setProfileImage] = useState();
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  const [location, setLocation] = useState();
  const [description, setDescription] = useState();
  const [eventId, setEventId] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const [visibleIgoEvent, setVisibleIgoEvent] = useState(false)

  const getEspecificData = async (event_id) => {
    await getEvent(id, event_id).then((event) => {
      setCurrentEvent(event[0].id);
      setParticipants(event[0].participants);
      setUserGoes(event[0].userGoesToEvent);
      setUserSaved(event[0].userSavedEvent);
      setAuthor(event[0].nickname);
      setProfileImage(event[0].profileImage);
      setName(event[0].event_name);
      setImage(event[0].photo);
      setDate(event[0].event_date);
      setHour(event[0].event_hour);
      setLocation(event[0].localization);
      setDescription(event[0].description);
      setLatitude(event[0].latitude);
      setLongitude(event[0].longitude);
    });
  };

  //Refresh page when change the route
  const isFocused = useIsFocused();

  async function getFeed() {
    isLoading = true;
    try {
      const feedData = await feedManager(postAmmount, id);
      setPosts(await feedData);
      return feedData;
    } catch (error) {
      console.log(error);
    }
    isLoading = false;
  }

  async function handleFriendPosts() {
    const data = await getFriendPosts(id, postAmmount).then((res) =>
      setFriendPosts(res)
    );
  }

  const handlePostsLoading = async () => {
    setPostAmmount(postAmmount + 5);
    try {
      if (globalPosts) {
        const feedData = await feedManager(postAmmount, id);
        setPosts(await feedData);
        return feedData;
      } else {
        const feedData = await handleFriendPosts();
        return feedData;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const modalizeEvents = useRef(null);

  const onOpenEvents = () => {
    modalizeEvents.current?.open();
  };

  // const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  //   const paddingToBottom = 20;
  //   return layoutMeasurement.height + contentOffset.y >=
  //     contentSize.height - paddingToBottom;
  // };

  const [globalPosts, setGlobalPosts] = useState(true);

  useEffect(() => {
    getFeed();
    handleFriendPosts();
  }, [isFocused]);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(async () => {
      await getFeed();
      await handleFriendPosts();
      setRefreshing(false);
    }, 1);
  };

  if (!posts) {
    return <Loading height={"100%"} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
      ListEmptyComponent={<View><Text>Nenhum Post</Text></View>}
        ListHeaderComponent={
          <View>
            <Header navigation={navigation} />

            <View>
              <View style={styles.TopBarContainer}>
                <View style={styles.topBar}>
                  <TouchableOpacity
                    onPress={() => {
                      setUpdatingEvent(false);
                      navigation.navigate("Criar Evento");
                    }}
                    styles={styles.button}
                  >
                    <MaterialCommunityIcons
                      name="calendar"
                      color={"#FFF"}
                      size={26}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Camera");
                    }}
                    styles={styles.button}
                  >
                    <MaterialCommunityIcons
                      name="camera"
                      color={"#FFF"}
                      size={26}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Criar Post");
                    }}
                    styles={styles.button}
                  >
                    <FontAwesome5 name="edit" size={24} color="#FFF" />
                  </TouchableOpacity>
                </View>

                <View style={styles.changePostsContainer}>
                  <TouchableOpacity
                    onPress={() => setGlobalPosts(true)}
                    style={styles.optionPostButton}
                    activeOpacity={0.8}
                  >
                    <FontAwesome
                      name="globe"
                      size={globalPosts ? 35 : 22}
                      color={globalPosts ? "#F8670E" : "#A512BD"}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      // handleFriendPosts()
                      setGlobalPosts(false);
                    }}
                    activeOpacity={0.8}
                    style={styles.optionPostButton}
                  >
                    <Ionicons
                      name="people"
                      size={globalPosts ? 22 : 35}
                      color={globalPosts ? "#A512BD" : "#F8670E"}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        }
        data={globalPosts ? posts : friendPosts}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        renderItem={({ item }) => (
          <View>
            {item.post_type == "post" ? (
              <Post
                goToReportScreen={() => navigation.navigate("Denuncia")}
                goToProfile={() => {
                  if (item.user_id != id) {
                    setAnotherUser_id(item.user_id);
                    navigation.navigate("Outros Perfis");
                  } else {
                    navigation.navigate("Meu Perfil");
                  }
                }}
                goToCommentScreen={() => {
                  setPostFocusedId(item.id);
                  navigation.navigate("Comentarios");
                }}
                goToSeePostScreen={() => {
                  setCurrentPost(item.id);
                  navigation.navigate("Ver Post");
                }}
                likePost={async () => {
                  await likePost(id, item.id);
                  {
                    globalPosts ? getFeed() : handleFriendPosts();
                  }
                }}
                {...item}
              />
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setEventId(item.id);
                  getEspecificData(item.id);
                  onOpenEvents();
                }}
                activeOpacity={0.7}
              >
                <PostEvent {...item} />
              </TouchableOpacity>
            )}
          </View>
        )}
        onEndReached={() => handlePostsLoading()}
        maxToRenderPerBatch={5}
        initialNumToRender={5}
        keyExtractor={(item) => item.id}
        onRefresh={() => getFeed()}
        refreshing={refreshing}
      />

      <Modalize ref={modalizeEvents}>
        {currentEvent == eventId ? (
          <ScrollView style={styles.content}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.button}>
                <FontAwesome5 name="calendar-plus" size={25} color="#F8670E" />
                <Text style={styles.headerText}>{name}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.contentContainer}>
              <View style={styles.authorEvent}>
                <ProfileImage profileImage={profileImage} />
                <Text style={styles.authorTitle}>Criado por: </Text>
                <Text style={styles.author}>{author}</Text>
              </View>

              <View style={styles.eventImage}>
                <Image style={styles.image} source={{ uri: image }} />
              </View>

              <View style={styles.contentInfo}>
                <View style={styles.dateEvent}>
                  <Text style={styles.dateTitle}>Data: </Text>
                  <Text style={styles.date}>{date}</Text>
                </View>

                <View style={styles.hourEvent}>
                  <Text style={styles.hourTitle}>Horário: </Text>
                  <Text style={styles.hour}>{hour}</Text>
                </View>

                <View style={styles.locationEvent}>
                  <Text style={styles.locationTitle}>Local: </Text>

                  <View style={styles.locationDataContainer}>
                    <View style={styles.locationData}>
                      <Text style={styles.location}>{location}</Text>
                    </View>
                  </View>

                  <View style={styles.containerButtons}>
                    <TouchableOpacity
                      style={styles.buttonMap}
                      onPress={() => handleMap()}
                    >
                      <FontAwesome5
                        name="map-marked-alt"
                        size={30}
                        color="#F8670E"
                      />
                      <Text>Ver a localização</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.buttonCopy}
                      onPress={() => {
                        copyToClipboard();
                        showToastBottom("Copiado com sucesso!", "bottom");
                      }}
                    >
                      <FontAwesome5 name="copy" size={30} color="#F8670E" />
                      <Text>Copiar a localização</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.descritpionEvent}>
                  <Text style={styles.description}>
                    <Text style={styles.descriptionTitle}>
                      Descrição do Evento:{" "}
                    </Text>
                    {description}
                  </Text>
                </View>
              </View>

              <View style={styles.interactiveButtonContainer}>
                <TouchableOpacity
                  onLongPress={() => setVisibleIgoEvent(true)}
                  onPress={() => {
                    goToEvent(id, eventId).then(() => {
                      console.log("testeeee");
                      getEspecificData(eventId);
                    });
                  }}
                  style={styles.interactiveButton}
                >
                  <AntDesign
                    name="like1"
                    size={50}
                    color={userGoes ? "purple" : "#FFF"}
                  />
                  <Text style={styles.interactiveText}>Eu vou!</Text>

                  <View style={styles.iGoContainer}>
                    <Text style={styles.iGo}>{participants}</Text>
                  </View>

                  <Modal
                    visible={visibleIgoEvent}
                    transparent={true}
                    onRequestClose={() => setVisibleIgoEvent(false)}
                  >
                    <ShowingGoingEvent
                      event_id={currentEvent}
                      handleClose={() => setVisibleIgoEvent(false)}
                    />
                  </Modal>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    saveEvent(id, eventId).then(() => {
                      console.log("testeeee");
                      getEspecificData(eventId);
                    });
                  }}
                  style={styles.interactiveButton}
                >
                  {userSaved ? (
                    <View style={styles.iconContainer}>
                      <Feather name="check-circle" size={55} color="#8B04A2" />
                      <Text style={styles.interactiveText}>Salvo</Text>
                    </View>
                  ) : (
                    <View style={styles.iconContainer}>
                      <Ionicons
                        name="add-circle-outline"
                        size={75}
                        color="#FFF"
                      />
                      <Text style={styles.interactiveText}>Salvar</Text>
                    </View>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        ) : (
          <Loading height={600} />
        )}
      </Modalize>
    </View>
  );
}

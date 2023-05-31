import React from "react";
import { View, Text, TextInput, StatusBar, ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import { styles } from "./style"
import Header from "../../Header/Header";
import { Entypo } from "@expo/vector-icons";
import { Image } from "react-native";

export default function CriarGrupo({ navigation }) {
    return (
        <View style={styles.container}>

            <Header navigation={navigation} />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Editar grupo</Text>
            </View>

            <ScrollView>
                <View style={styles.form}>

                    <Text style={styles.formText}>Nome do Grupo</Text>

                    <View style={styles.nameInputs}>
                        <TextInput
                            style={styles.inputType1}
                            keyboardType="default"
                        />
                    </View>

                    <Text style={styles.formText}>Descrição do grupo</Text>
                    <View style={styles.nameInputs}>
                        <TextInput style={styles.inputType1}
                            onChangeText={(text) => setDescription(text)}
                            keyboardType="default"
                        />
                    </View>

                    <View style={{ marginVertical: 30 }}>
                        <Text style={styles.formText}>Foto do grupo</Text>

                        <View style={styles.banner}>
                            <TouchableOpacity
                                style={styles.editProfileIconContainerBanner}
                            >

                                <View style={styles.editBanner}>
                                    <Entypo name="camera" size={22} color="#FFF" />
                                </View>

                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity 
                    style={styles.button}
                    onPress={()=> navigation.navigate("Adicionar Participantes")}
                    >
                        <Text style={styles.text}>Criar Grupo</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>

            <StatusBar />
            <StatusBar barStyle={'light-content'} />
        </View>
    );
}
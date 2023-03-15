import React, {useContext} from "react";
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import {styles} from './style'

import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { AuthContext } from '../../contexts/auth.js';
import { AccountDataContext } from '../../contexts/accountData.js';

export default function CustomDrawer({ navigation }, props) {
    const { setLogin } = useContext(AuthContext);
    const { accountData } = useContext(AccountDataContext);

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Menu</Text>
                </View>

                <View style={styles.dataContainer}>
                    <Image style={styles.dataContainerImage} source={{
                        uri: (accountData.profileInfo)[0].profileImage
                    }}
                    />
                    <Text style={styles.dataContainerText}>{(accountData.profileInfo)[0].nickname}</Text>
                </View>

                <View style={styles.containerItems}>
                    <TouchableOpacity style={styles.items}
                        onPress={() => { navigation.navigate('Página Inicial') }}
                    >
                        <Entypo name="home" size={22} color="#FFF" />
                        <Text style={styles.itemText}>Página Inicial</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.items}
                        onPress={() => 
                            { 
                                navigation.navigate('Meu Perfil', {accountData: accountData}) 
                            }
                        }
                    >
                        <FontAwesome5 name="user-alt" size={22} color="#FFF" />
                        <Text style={styles.itemText}>Meu Perfil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.items}
                        onPress={() => { navigation.navigate('Eventos') }}
                    >
                        <FontAwesome5 name="calendar-plus" size={22} color="#FFF" />
                        <Text style={styles.itemText}>Eventos</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity onPress={() => setLogin(false)}>
                <View style={styles.exitContainer}>
                    <View style={styles.exit}>
                        <Ionicons name="exit-outline" size={24} color="#FFF" />
                        <Text style={styles.exitText}>SAIR</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}
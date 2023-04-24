import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from './contexts/auth';

import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Cadastro from './components/Pages/Cadastro/Cadastro';
import CadastroContinuacao from './components/Pages/CadastroContinuacao/CadastroContinuacao'
import CadastroValidacao from './components/Pages/CadastroValidacao/CadastroValidacao'

import Comentarios from './components/Pages/Comentarios/Comentarios';
import CriarPost from './components/Pages/CriarPost/CriarPost';
import Camera from './components/Pages/Camera/Camera';

import PerfilVisãoInterna from './components/Pages/PerfilVisãoInterna/Perfil';
import PerfilVisãoExterna from './components/Pages/PerfilVisãoExterna/Perfil'

import EditarPerfil from './components/Pages/EditarPerfil/EditarPerfil'
import TelaVerMais from './components/Pages/TelaVerMais/TelaVerMais'
import Fotos from './components/Pages/Fotos/Fotos';
import TelaTags from './components/Pages/TelaTags/TelaTags';
import VerAmigos from './components/Pages/VerAmigos/VerAmigos';

import MarcarEvento from './components/Pages/MarcarEventos/MarcarEventos'
import MeusEventos  from './components/Pages/MeusEventos/MeusEventos'

import DrawerRoutes from './components/Drawer/Drawer';

import Messages from './components/Pages/Messages/Messages'
import Chat from './components/Pages/Chat/Chat';
import CriarGrupo from './components/Pages/CriarGrupo/CriarGrupo';
import SelectGroup from './components/Pages/SelectGroup/SelectGroup';
import DadosGrupo from './components/Pages/DadosGrupo/DadosGrupo';

import Pesquisa from './components/Pages/Pesquisa/Pesquisa'
import EditPhoto from './components/Pages/EditPhoto/EditPhoto';
import Notificacoes from './components/Pages/Notificacoes/Notificações';
import ChatGroup from './components/Pages/ChatGroup/ChatGroup';
import EditarGrupo from './components/Pages/EditarGrupo/EditarGrupo'

import Map from './components/Pages/Map/Map'

import * as SecureStore from 'expo-secure-store';

const { Screen, Navigator } = createNativeStackNavigator();

export default function Routes() {
  const { login } = useContext(AuthContext);

  //Rotas caso o usuário não esteja logado
  const loginPages = (
    <Navigator screenOptions={{
      headerShown: false,
      // swipeEnabled: false
    }}>
      <Screen name="Home" component={Home} />
      <Screen name="Login" component={Login} />
      <Screen name="Cadastro" component={Cadastro} />
      <Screen name="Cadastro Continuacao" component={CadastroContinuacao} />
      <Screen name="Cadastro Validacao" component={CadastroValidacao} />
    </Navigator>
  )

  //Rotas caso o usuário esteja logado
  const userPages = (
    <Navigator initialRouteName='Feed' screenOptions={{
      headerShown: true,
      // headerBackVisible: true
    }}>
        <Screen name="Drawer" component={DrawerRoutes} options={{ headerShown: false, }} />
    </Navigator>
  )

  //Verifica se o usuário está logado
  function loginRequire() {
    console.log("Usuário logado: ", login);

    if (login === true) {
      return userPages;
    }

    return loginPages;
  }


  return loginRequire();
}
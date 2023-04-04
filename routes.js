import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from './contexts/auth';

import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Cadastro from './components/Pages/Cadastro/Cadastro';
import CadastroContinuacao from './components/Pages/CadastroContinuacao/CadastroContinuacao'

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

import Map from './components/Pages/Map/Map'

import * as SecureStore from 'expo-secure-store';

const { Screen, Navigator } = createNativeStackNavigator();

export default function Routes() {
  const { login } = useContext(AuthContext);

  //Rotas caso o usuário não esteja logado
  const loginPages = (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen name="Home" component={Home} />
      <Screen name="Login" component={Login} />
      <Screen name="Cadastro" component={Cadastro} />
      <Screen name="CadastroContinuacao" component={CadastroContinuacao} />
    </Navigator>
  )

  //Rotas caso o usuário esteja logado
  const userPages = (
    <Navigator initialRouteName='Feed' screenOptions={{
      headerShown: false
    }}>
      <Screen name="Drawer" component={DrawerRoutes} options={{ headerShown: false, }} />
      <Screen name="Camera" component={Camera} options={{ headerShown: false, }} />
      <Screen name="Comentarios" component={Comentarios} options={{ headerShown: false, }} />
      <Screen name="Criar Post" component={CriarPost} options={{ headerShown: false, }} />
      <Screen name="Criar Evento" component={MarcarEvento} options={{ headerShown: false, }} />
      <Screen name="Editar Perfil" component={EditarPerfil} options={{ headerShown: false, }} />
      <Screen name="Tela Ver Mais" component={TelaVerMais} options={{ headerShown: false, }} />
      <Screen name="Tela Tags" component={TelaTags} options={{ headerShown: false, }} />
      <Screen name="Chat" component={Chat} options={{ headerShown: false, }} />
      <Screen name="Mensagens" component={Messages} options={{ headerShown: false, }} />
      <Screen name="Pesquisa" component={Pesquisa} options={{ headerShown: false, }} />
      <Screen name="Ver Amigos" component={VerAmigos} options={{ headerShown: false, }} />
      <Screen name="Meus Eventos" component={MeusEventos} options={{ headerShown: false, }} />
      <Screen name="Fotos" component={Fotos} options={{ headerShown: false, }} />
      <Screen name="Editar Foto" component={EditPhoto} options={{ headerShown: false, }} />
      <Screen name="Meu Perfil" component={PerfilVisãoInterna} options={{ headerShown: false, }} />
      <Screen name="Outros Perfis" component={PerfilVisãoExterna} options={{ headerShown: false, }} />
      <Screen name="Notificações" component={Notificacoes} options={{ headerShown: false, }} />
      <Screen name="Criar Grupo" component={CriarGrupo} options={{ headerShown: false, }} />
      <Screen name="Adicionar Participantes" component={SelectGroup} options={{ headerShown: false, }} />
      <Screen name="Dados do Grupo" component={DadosGrupo} options={{ headerShown: false, }} />
      <Screen name="Chat Grupo" component={ChatGroup} options={{ headerShown: false, }} />
      <Screen name="Mapa" component={Map} options={{ headerShown: false, }} />
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
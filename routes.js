import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from './contexts/auth';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Cadastro from './components/Pages/Cadastro/Cadastro';
import Feed from './components/Pages/Feed/Feed';
import Comentarios from './components/Pages/Comentarios/Comentarios';
import CadastroContinuacao from './components/Pages/CadastroContinuacao/CadastroContinuacao'
import EditarPerfil from './components/Pages/EditarPerfil/EditarPerfil'
import TelaVerMais from './components/Pages/TelaVerMais/TelaVerMais'
import CriarPost from './components/Pages/CriarPost/CriarPost';
import TelaTags from './components/Pages/TelaTags/TelaTags';
import Chat from './components/Pages/Chat/Chat';
import VerAmigos from './components/Pages/VerAmigos/VerAmigos';
import Pesquisa from './components/Pages/Pesquisa/Pesquisa'

import DrawerRoutes from './components/Drawer/Drawer';

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
      <Screen name="Feed" component={DrawerRoutes} options={{ headerShown: false, }} />
      <Screen name="Comentarios" component={Comentarios} options={{ headerShown: false, }} />
      <Screen name="CriarPost" component={CriarPost} options={{ headerShown: false, }} />
      <Screen name="Editar Perfil" component={EditarPerfil} options={{ headerShown: false, }} />
      <Screen name="Tela Ver Mais" component={TelaVerMais} options={{ headerShown: false, }} />
      <Screen name="Tela Tags" component={TelaTags} options={{ headerShown: false, }} />
      <Screen name="Chat" component={Chat} options={{ headerShown: false, }} />
      <Screen name="Ver Amigos" component={VerAmigos} options={{ headerShown: false, }} />
      <Screen name="Tela Pesquisa" component={Pesquisa} options={{ headerShown: false, }} />
    </Navigator>
  )

  //Verifica se o usuário está logado
  function loginRequire() {
    console.log("Usuário logado: ", login);

    if (login == true) {
      return userPages;
    }

    return loginPages;
  }


  return loginRequire();
}
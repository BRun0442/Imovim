import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from './contexts/auth';

import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Cadastro from './components/Pages/Cadastro/Cadastro';
import CadastroContinuacao from './components/Pages/CadastroContinuacao/CadastroContinuacao'
import CadastroValidacao from './components/Pages/CadastroValidacao/CadastroValidacao'

import RecuperarSenha1 from './components/Pages/RecuperarSenha/RecuperarSenha1';
import RecuperarSenha2 from './components/Pages/RecuperarSenha/RecuperarSenha2';
import RecuperarSenha3 from './components/Pages/RecuperarSenha/RecuperarSenha3';

import DrawerRoutes from './components/Drawer/Drawer';

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
      <Screen name="Recuperar Senha 1" component={RecuperarSenha1} />
      <Screen name="Recuperar Senha 2" component={RecuperarSenha2} />
      <Screen name="Recuperar Senha 3" component={RecuperarSenha3} />
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
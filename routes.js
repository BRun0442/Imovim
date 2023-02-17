import React, { useContext } from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { AuthContext } from './contexts/auth';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Cadastro from './components/Pages/Cadastro/Cadastro';
import Feed from './components/Pages/Feed/Feed';
import Comentarios from './components/Pages/Comentarios/Comentarios';
import CadastroContinuacao from './components/Pages/CadastroContinuacao/CadastroContinuacao'
import CriarPost from './components/Pages/CriarPost/CriarPost.js';

const { Screen, Navigator} = createNativeStackNavigator();

function Routes()
{
  const { login } = useContext(AuthContext);

  //Rotas caso o usuário não esteja logado
  const loginPages = (
    <Navigator screenOptions={{
      headerShown: false
    }}>
        <Screen name="Home" component={Home} />
        <Screen name="Login" component={Login} />
        <Screen name="Cadastro" component={Cadastro}/>
        <Screen name="CadastroContinuacao" component={CadastroContinuacao}/>
    </Navigator>
  )

  //Rotas caso o usuário esteja logado
  const userPages = (
    <Navigator screenOptions={{
      headerShown: false
    }}>
        <Screen name="Feed" component={Feed} />
        <Screen name="Comentarios" component={Comentarios} />
        <Screen name="CriarPost" component={CriarPost} />
    </Navigator>
  )

  //Verifica se o usuário está logado
  function loginRequire() {
    console.log("Usuário logado: ", login);

    if(login == true)
    {
      return userPages;
    }
    
    return loginPages;
  }
  
  
  return loginRequire();
}

export default Routes;
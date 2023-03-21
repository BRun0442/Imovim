import react, { useContext } from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import Feed from '../Pages/Feed/Feed';
import Perfil from '../Pages/PerfilVisãoInterna/Perfil'
import Eventos from '../Pages/Eventos/Eventos';
import CriarPost from '../Pages/CriarPost/CriarPost';
import EditarPerfil from '../Pages/EditarPerfil/EditarPerfil';
import TelaVerMais from '../Pages/TelaVerMais/TelaVerMais';
import TelaTags from '../Pages/TelaTags/TelaTags';
import MarcarEventos from '../Pages/MarcarEventos/MarcarEventos';
import MeusEventos from '../Pages/MeusEventos/MeusEventos'
import Camera from '../Pages/Camera/Camera';
import Fotos from '../Pages/Fotos/Fotos';
import Messages from '../Pages/Messages/Messages'
import Chat from '../Pages/Chat/Chat';
import Pesquisa from '../Pages/Pesquisa/Pesquisa';
import PerfilVisãoExterna from '../Pages/PerfilVisãoExterna/Perfil';
import { AccountDataContext } from '../../contexts/accountData';

import CustomDrawer from './CustomDrawer';
import VerAmigos from '../Pages/VerAmigos/VerAmigos';
import EditPhoto from '../Pages/EditPhoto/EditPhoto';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  const { accountData } = useContext(AccountDataContext); 

  return (
    <Drawer.Navigator 
      drawerContent={props => 
        <CustomDrawer {...props} accountData={accountData}/>
      } 

      initialRouteName='Feed'
    >
      <Drawer.Screen name="Página Inicial" component={Feed} options={{ headerShown: false, }} />
      <Drawer.Screen name="Meu Perfil" component={Perfil} options={{ headerShown: false, }} />
      <Drawer.Screen name="Camera" component={Camera} options={{ headerShown: false, }} />
      <Drawer.Screen name="Eventos" component={Eventos} options={{ headerShown: false, }} />
      <Drawer.Screen name="Criar Post" component={CriarPost} options={{ headerShown: false, }} />
      <Drawer.Screen name="Editar Perfil" component={EditarPerfil} options={{ headerShown: false, }} />
      <Drawer.Screen name="Tela Tags" component={TelaTags} options={{ headerShown: false, }} />
      <Drawer.Screen name="Tela Ver Mais" component={TelaVerMais} options={{ headerShown: false, }} />
      <Drawer.Screen name="Criar Evento" component={MarcarEventos} options={{ headerShown: false, }} />
      <Drawer.Screen name="Fotos" component={Fotos} options={{ headerShown: false, }} />
      <Drawer.Screen name="Meus Eventos" component={MeusEventos} options={{ headerShown: false, }} />
      <Drawer.Screen name="Pesquisa" component={Pesquisa} options={{ headerShown: false, }} />
      <Drawer.Screen name="Mensagens" component={Messages} options={{ headerShown: false, }} />
      <Drawer.Screen name="Chat" component={Chat} options={{ headerShown: false, }} />
      <Drawer.Screen name="Ver Amigos" component={VerAmigos} options={{ headerShown: false, }} />
      <Drawer.Screen name="Editar Foto" component={EditPhoto} options={{ headerShown: false, }} />
      <Drawer.Screen name="Outros Perfis" component={PerfilVisãoExterna} options={{ headerShown: false, }} />
    </Drawer.Navigator>
  );
}

import React from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation";
import BoasVindas from './components/BoasVindas'
import FormLogin from './components/FormLogin'
import Principal from './components/Principal'
import FormCadastro from './components/FormCadastro'
import AdicionarContato from './components/AdicionarContato'
import Conversa from './components/Conversa'
import Contatos from './components/Contatos'
import TabNavigation from     './components/TabNavigation'


import  Header from './components/Header'
const AppNavigator = createStackNavigator({
    BoasVindas: {
        screen: BoasVindas
    },
    FormLogin: {
        screen: FormLogin
    },
    Principal: {
        screen: Principal
    },
    AdicionarContato: {
        screen: AdicionarContato
    },
    FormCadastro: {
        screen: FormCadastro
    },
    Conversa: {
        screen: Conversa
    },
    Contatos: {
        screen: Contatos
    },
    TabNavigation: {
        screen: TabNavigation
    },
},
  {
      initialRouteName:'FormLogin',
      defaultNavigationOptions:{
        header: ({navigation}) => ( /* Your custom header */
            <Header navigation={navigation}/>
          )
      },
  }
);

export default createAppContainer(AppNavigator);

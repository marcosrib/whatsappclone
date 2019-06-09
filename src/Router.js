
import React from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation";
import BoasVindas from './components/BoasVindas'
import FormLogin from './components/FormLogin'
import Principal from './components/Principal'
import AdicionarContato from './components/AdicionarContato'


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

},
  {
      initialRouteName:'Principal',
     
      headerMode: 'screen' ,
      defaultNavigationOptions:{
        header: null
      }
  }
);

export default createAppContainer(AppNavigator);

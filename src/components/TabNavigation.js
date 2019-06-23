import React from 'react'
import { createMaterialTopTabNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Contatos from './Contatos'
import Conversas from './Conversas'
import Header from './Header'
const TabNavigation = createMaterialTopTabNavigator({

    Conversas: {
      screen: Conversas,
  
    },
    Contatos: {
      screen: Contatos
    },
  
  },
    {
      tabBarOptions: {
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: '#115E54',
        },
       
  
      }
    });
  
   export default createAppContainer(TabNavigation);
  
  
  
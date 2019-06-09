import { createMaterialTopTabNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Contatos from './Contatos'
import Conversas from './Conversas'
const TabNavigation = createMaterialTopTabNavigator({
    Contatos: {
      screen: Contatos
    },
    Conversas: {
      screen: Conversas,
  
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
  
  
  
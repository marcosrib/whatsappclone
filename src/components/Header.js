
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'


const Header = props => {
  return (
    <View style={{ flex: .1 }}>
      <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#115E54', }} >
        <View style={{ flex: 6, justifyContent: 'center' }}>
          <Text style={{ color: '#fff', fontWeight: 'bold', margin: 2 }}>Whatsapp Clone</Text>
        </View>

        <TouchableOpacity
          onPress={()=> props.navigation.navigate('AdicionarContato')}
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="person-add" style={{ fontSize: 20, color: '#fff' }} />
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontWeight: 'bold', margin: 2 }}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}
export default Header




Header.navigationOptions = {
  header: null
}
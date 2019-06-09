import React from 'react';
import { View, Text, StatusBar } from 'react-native';

const Contatos = props => {
    return (
        <View style={{marginTop:50}}>
        
        <StatusBar backgroundColor = 'red' />
            <Text>Contatos</Text>
        </View>
    )

}
export default Contatos
Contatos.navigationOptions = {
    header: null
}

import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { Icon } from 'native-base'


const AdicionarContato = props => {
    return (

        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#115E54', }} >
                <TouchableOpacity
                    onPress={() => props.navigation.goBack()}
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', padding: 4 }}>
                    <Icon name="arrow-round-back" style={{ fontSize: 20, color: '#fff' }} />
                </TouchableOpacity>

                <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', margin: 2 }}>Adicionar Contatos</Text>
                </View>
            </View>

            <View style={{ flex: 12, }}>
            <TextInput>
            </TextInput>
                <TouchableOpacity
                    onPress={null}
                    style={{ flex: .2, justifyContent: 'center', alignItems: 'flex-start', padding: 4, backgroundColor:'#115E54' }}>
                    <Icon name="arrow-round-back" style={{ fontSize: 20, color: '#fff' }} />
                </TouchableOpacity>
            </View>
        </View>

    )
}
export default AdicionarContato




AdicionarContato.navigationOptions = {
    title: 'DICIONA CONTATO'
}
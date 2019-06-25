import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base'
import HeaderComponents from './HeaderComponents'
import { connect } from 'react-redux'
import { modificaMensagem, enviaMensagem } from '../actions/AppActions'
const Conversa = props => {
    const [teste, setTeste] = useState('testet')
    function enviaMensagem() {
        const { nome, email } = props.navigation.state.params;
        props.enviaMensagem(props.mensagem, nome, email)
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#eee4dc' }}>
            <View style={{ flex: 1 }}>

                <Text>{props.navigation.getParam('titulo', 'NO-ID')}</Text>
            </View>
            <View style={{ height: 60, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                    value={props.mensagem}
                    onChangeText={texto => props.modificaMensagem(texto)}
                    placeholder='Digite Aqui' style={{ flex: 1, backgroundColor: '#fff', marginLeft: 4 }} />
                <TouchableOpacity onPress={()=> enviaMensagem()}
                style={{ paddingLeft: '1%', alignItems: 'center', justifyContent: 'center', marginLeft: 4, marginRight: 4, backgroundColor: '#115E54', borderRadius: 25, width: 50, height: 50 }}>
                    <Icon name="send" style={{ fontSize: 22, color: '#fff', }}></Icon>
                </TouchableOpacity>
            </View>

        </View>
    )
}
mapStateToprops = state => {
    return ({
        mensagem: state.AppReducer.mensagem
    })
}

export default connect(mapStateToprops, {modificaMensagem, enviaMensagem})(Conversa)

Conversa.navigationOptions = {

    header: props => <HeaderComponents />
};


import React, { useState, useLayoutEffect, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Icon } from 'native-base'
import HeaderComponents from './HeaderComponents'
import { connect } from 'react-redux'
import _ from 'lodash'
import { modificaMensagem, enviaMensagem, conversaUsuarioFecth } from '../actions/AppActions'

const Conversa = props => {

    const [conversa, setConversa] = useState(["test"])

    useLayoutEffect(() => {
        const { email } = props.navigation.state.params;
        props.conversaUsuarioFecth(email)
        setConversa(props.conversa.reverse())
    }, [])

    useLayoutEffect(() => {
        setConversa(props.conversa.reverse())
    }, [props.conversa])

    function enviaMensagem() {
        const { nome, email } = props.navigation.state.params;
        props.enviaMensagem(props.mensagem, nome, email)
    }
    function renderRow(item, index) {
        
        
        if (item.tipo === 'e') {
            return (
                <View key={index} style={{ flex: 1, alignItems: 'flex-end', marginBottom: 5 , marginTop:5, marginLeft:40, marginRight:10 }}>
                    <Text style={{fontSize:18, color:'#000',padding:10, backgroundColor:'#dbf5b4', elevation:1}}>{item.mensagem}</Text>
                </View>

            )
        }
        return (
            <View key={index} style={{ flex: 1, alignItems: 'flex-start', marginBottom: 5 , marginTop:5, marginRight:40, marginLeft:10 }}>
                <Text style={{fontSize:18, color:'#000',padding:10, backgroundColor:'#fff', elevation:1}}>{item.mensagem}</Text>
            </View>

        )
    }

        return (
            <View style={{ flex: 1, backgroundColor: '#eee4dc' }}>
                <View style={{ flex: 1 }}>

                    <FlatList
                        data={conversa}
                        inverted
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => (
                            renderRow(item, index)
                        )}
                    />
                </View>
                <View style={{ height: 60, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput
                        value={props.mensagem}
                        onChangeText={texto => props.modificaMensagem(texto)}
                        placeholder='Digite Aqui' style={{ flex: 1, backgroundColor: '#fff', marginLeft: 4 }} />
                    <TouchableOpacity onPress={() => enviaMensagem()}
                        style={{ paddingLeft: '1%', alignItems: 'center', justifyContent: 'center', marginLeft: 4, marginRight: 4, backgroundColor: '#115E54', borderRadius: 25, width: 50, height: 50 }}>
                        <Icon name="send" style={{ fontSize: 22, color: '#fff', }}></Icon>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
    mapStateToprops = state => {
        const conversa = _.map(state.ListaConversasReducer, (val, uid) => {
            return { ...val, uid };
        })


        return ({
            conversa,
            mensagem: state.AppReducer.mensagem
        })
    }

    export default connect(mapStateToprops, { modificaMensagem, enviaMensagem, conversaUsuarioFecth })(Conversa)

    Conversa.navigationOptions = {

        header: props => <HeaderComponents />
    };


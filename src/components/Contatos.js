import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { View, Text, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import _ from 'lodash'
import { contatoUsuarioFetch } from '../actions/AppActions'
import Header from './Header'
const Contatos = props => {
    const [contatos, setContatos] = useState([])
    useEffect(() => {
        props.contatoUsuarioFetch()
        setContatos(props.lista_contato_usuario)

    }, [])

    useEffect(() => {
        setContatos(props.lista_contato_usuario)


    }, [props.lista_contato_usuario])

   function navegar(){
      props.navigation.navigate('Conversa') 
   }

    return (
        <View style={{ marginTop: 50 }}>
            <StatusBar backgroundColor='red' />
            <FlatList
                data={contatos}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={navegar}>
                        <View style={{ flex: 1, borderBottomWidth: 1, margin: 5 }}>
                            <Text style={{ color: '#000', fontWeight: 'bold' }}>{item.nome}</Text>
                            <Text>{item.email}</Text>
                        </View>
                    </TouchableOpacity>

                )}
            />
        </View>
    )
}

const mapStateToprops = state => (
    {
        lista_contato_usuario: state.AppReducer.lista_contato_usuario
    }
)
export default connect(mapStateToprops, { contatoUsuarioFetch })(Contatos)
Contatos.navigationOptions = {
    tabBarLabel: 'Home!',
  };
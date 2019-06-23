import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { View, Text, StatusBar, FlatList } from 'react-native';
import _ from 'lodash'
import { contatoUsuarioFetch } from '../actions/AppActions'
const Contatos = props => {
    const [contatos, setContatos] = useState([])
    useEffect(() => {
        props.contatoUsuarioFetch()
        setContatos(props.lista_contato_usuario)
        
    }, [])

    useEffect(() => {
        setContatos(props.lista_contato_usuario)
     
        
    }, [props.lista_contato_usuario])

    return (
        <View style={{ marginTop: 50 }}>
            <StatusBar backgroundColor='red' />
            <FlatList
                data={contatos}
                renderItem={({ item }) => (
                    <View style={{ flex: 1, borderBottomWidth: 1, margin:5 }}>
                        <Text style={{color:'#000', fontWeight:'bold'}}>{item.nome}</Text>
                        <Text>{item.email}</Text>
                    </View>


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
    header: null
}
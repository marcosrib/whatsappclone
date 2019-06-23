
import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native'
import { Icon } from 'native-base'
import { connect } from 'react-redux'
import { modificaAdicionaContatoEmail, adicionaContato } from '../actions/AppActions'
const AdicionarContato = props => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: .5, flexDirection: 'row', backgroundColor: '#115E54', }} >
                <TouchableOpacity
                    onPress={() => props.navigation.goBack()}
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', padding: 4 }}>
                    <Icon name="arrow-round-back" style={{ fontSize: 20, color: '#fff' }} />
                </TouchableOpacity>

                <View style={{ flex: 4 , justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', margin: 2 }}>Adicionar Contatos</Text>
                </View>
            </View>

            <View style={{ flex: 1 }}>
                <TextInput 
                placeholder="Digite o"
                onChangeText={(texto)=>props.modificaAdicionaContatoEmail(texto)}
                value={props.adiciona_contato_email}
                />
                
            </View>
            <View style={{ flex: 4 }}>
            <Button title='acessar' 
            color='#115E54'
            onPress={() => props.adicionaContato(props.adiciona_contato_email)} />
            <Text style={{color:'#ff0000', fontSize:20}}>
            {props.cadastro_resultado_txt_erro}
            </Text>
            </View>
        </View>

    )
}
const mapStateToprops = state => (
    {
        adiciona_contato_email: state.AppReducer.adiciona_contato_email,
        cadastro_resultado_txt_erro: state.AppReducer.cadastro_resultado_txt_erro
    }
)

export default connect(mapStateToprops, { modificaAdicionaContatoEmail,adicionaContato })(AdicionarContato)




AdicionarContato.navigationOptions = {
    title: 'DICIONA CONTATO'
}
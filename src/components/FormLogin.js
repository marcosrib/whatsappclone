import React, { Component } from 'react';
import { View, Text, TextInput, Button, ImageBackground, TouchableHighlight, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';

class FormLogin extends Component {
    static navigationOptions = {
        header:null
      };
    _autenticarUsuario() {
        const { email, senha, navigation } = this.props;
        this.props.autenticarUsuario({ email, senha, navigation });
    }

    renderBtnAcessar() {

        if (this.props.loandingLogin) {

            return (
                <ActivityIndicator size="large" />
            )
        }

        return (
            <Button title='acessar'
                color='#115E54'
                onPress={() => this._autenticarUsuario()} />
        )


    }
    render() {
        return (
            <ImageBackground style={{ flex: 1, width: null }} source={require('../imgs/bg.png')} >
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, color: '#fff' }} >Whatsapp Clone</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <TextInput value={this.props.email}
                            style={{ fontSize: 20, height: 45 }}
                            placeholder='E-mail'
                            placeholderTextColor='#fff'
                            onChangeText={texto => this.props.modificaEmail(texto)}
                        />
                        <TextInput secureTextEntry value={this.props.senha}
                            style={{ fontSize: 20, height: 45 }}
                            placeholder='Senha'
                            placeholderTextColor='#fff'
                            onChangeText={texto => this.props.modificaSenha(texto)}
                        />
                        <Text style={{ fontSize: 20, color: '#ff0000' }}> {this.props.erroLogin} </Text>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('FormCadastro')} >
                            <Text style={{ fontSize: 15, color: '#fff' }}>Ainda não possui cadastro? cadastre-se</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{ flex: 2 }}>
                        {this.renderBtnAcessar()}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToprops = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
        loandingLogin: state.AutenticacaoReducer.loandingLogin
    }
)

export default connect(mapStateToprops, { modificaEmail, modificaSenha, autenticarUsuario })(FormLogin);

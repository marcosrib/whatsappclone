import React, { Component } from 'react';
import { View, Text, TextInput, Button, ImageBackground, ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';
import { modificaEmail, 
         modificaSenha, 
         modificaNome,
         cadastraUsuario 
} from '../actions/AutenticacaoActions';


class formCadastro extends Component {

    _cadastraUsuario() {
        const { nome, email, senha } = this.props;
        this.props.cadastraUsuario({ nome, email, senha });
    }

    renderBtnCadastro() {

              var t = this.props.loading_cadastro
              console.log(t);
        if (this.props.loading_cadastro) {
            return (
               <ActivityIndicator  size = "large"/>
            )
        }
            return (
                <Button title='cadastrar' 
                color='#115E54' 
                onPress ={() => this._cadastraUsuario()}
            />
            )
        
    }

    render() {
        return (
            <ImageBackground style = {{flex:1, width:  null }} source={require('../imgs/bg.png')} > 
                <View style={{ flex: 1, padding: 10 }}>
                    <View  style={{ flex: 4, justifyContent: 'center'}}>
                        <TextInput value={this.props.nome} 
                            style={{ fontSize: 20, height: 45 }} 
                            placeholder='Nome:' placeholderTextColor='#fff'
                            onChangeText = {texto => this.props.modificaNome(texto)} 
                         /> 
                        <TextInput value={this.props.email} 
                            style={{ fontSize: 20, height: 45 }} 
                            placeholder='E-mail:'placeholderTextColor='#fff'
                            onChangeText = {texto => this.props.modificaEmail(texto)}
                        />  
                        <TextInput secureTextEntry value={this.props.senha}
                            style={{ fontSize: 20, height: 45 }}
                            placeholder='Senha:'
                            placeholderTextColor='#fff' 
                            onChangeText = {texto => this.props.modificaSenha(texto)} />   
                            <Text style={{ fontSize: 20, color:'#ff0000' }}> {this.props.erroCadastro} </Text>
                    </View>    
                    <View  style={{ flex: 1 }}>
                      { this.renderBtnCadastro() }
                    </View>    
                </View>    
             </ImageBackground>
        );
    }   
}
const mapStateToprops = state => (
    {
        nome: state.AutenticacaoReducer.nome, 
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroCadastro: state.AutenticacaoReducer.erroCadastro,
        loading_cadastro: state.AutenticacaoReducer.loading_cadastro
    }
)

export default connect(
    mapStateToprops, 
    {
        modificaEmail, 
        modificaSenha,
        modificaNome, 
        cadastraUsuario
    }
 )(formCadastro);
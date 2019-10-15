/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import Reducers from './src/redurces'
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Router from './src/Router'

import { createStore, applyMiddleware } from 'redux';
export default class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "whatsapp-clone-53c5c.appspot.com",
      messagingSenderId: "436231702992"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(Reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>

    );
  }
}

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
      apiKey: "AIzaSyAdIOBGYFkHcPy-lq2bnDv9ojBSPy-hEpY",
      authDomain: "whatsapp-clone-53c5c.firebaseapp.com",
      databaseURL: "https://whatsapp-clone-53c5c.firebaseio.com",
      projectId: "whatsapp-clone-53c5c",
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

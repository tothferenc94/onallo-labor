import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import ResultsFeed from './src/ResultsFeed';
import LoginScreen from './src/LoginScreen';
import { Router, Scene } from 'react-native-router-flux';
import MyMenu from './src/MyMenu';
import UserData from './src/UserData';

export default class App extends Component {

  render() {
    return (
      <Router
        navigationBarStyle={ styles.navigation }
        navBarButtonColor={ 'rgb(255,255,255)' }
        titleStyle={ styles.textStyle }>

        <Scene key='root'>
          <Scene
            key='fokepernyo'
            component={ LoginScreen }
            title='Bejelentkezés'
            hideNavBar='true'
            initial
          />
          <Scene
            key='eredmenyek'
            component={ UserData }
            title='Eredmények'
            renderRightButton={ <MyMenu/> }
          />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    color: 'rgb(255,255,255)',
    flex: 1,
    textAlign: 'center'
  },
  navigation: {
    backgroundColor: 'rgb(0,0,0)',
  }
})

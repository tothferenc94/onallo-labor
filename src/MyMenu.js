import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

export default class MyMenu extends React.PureComponent {
    _menu = null;
 
    setMenuRef = ref => {
      this._menu = ref;
    };
   
    hideMenu = () => {
      this._menu.hide();
    };
   
    showMenu = () => {
      this._menu.show();
    };
   
    render() {
      return (
        <View>
          <Menu
            ref={this.setMenuRef}
            button={<Text
                      style={ styles.buttonStyle }
                      onPress={this.showMenu}>
                      Menü
                    </Text>}
          >
            <MenuItem onPress={this.hideMenu}>Saját fiók</MenuItem>
            <MenuDivider />
            <MenuItem onPress={this.hideMenu}>Beállítások</MenuItem>
          </Menu>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  buttonStyle:{
    fontSize: 16,
    fontWeight: '700',
    color: "rgb(255,255,255)",
    marginRight: 10
  }
})
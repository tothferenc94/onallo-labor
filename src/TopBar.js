import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import MyMenu from './MyMenu';

export default class TopBar extends Component {
    render(){
        return(
            <View style={ styles.mainStyle }>
                <View style={ styles.positionStyle }>
                    <Image
                        style={ styles.imageStyle }
                        source={require('../icons/icons8-undo-24.png')}
                    />
                    <Text style={ styles.textStyle }>Results</Text>
                    <MyMenu/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainStyle: {
        height: 50,
        backgroundColor: 'rgb(0,140,110)'
    },
    positionStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        width: 30,
        height: 30
    },
    textStyle: {
        //fontFamily: 'cursive',
        fontSize: 24,
        fontWeight: '900',
        color: 'rgb(0,0,0)'
    }
})
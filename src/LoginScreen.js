import React, { Component } from 'react';
import { Image, View, Text, Button, ImageBackground, Linking, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class LoginScreen extends Component {
    render(){
        return(
                <ImageBackground
                    source={{ 
                        uri: 
                         'https://timedotcom.files.wordpress.com/2019/01/nike-air-max-1-golf-grass-sneakers.jpg'
                        }}
                    style={ styles.backGround }>
                <View style={ styles.mainStyle }>
                    <Image
                        style={ styles.imageStyle }
                        source={require('../icons/icons8-facebook-480.png')}
                        />
                    <Button
                        title="Bejelentkezés"
                        type="outline"
                        onPress={ () => Actions.eredmenyek() }
                    />
                    <Text 
                        style={ styles.textStyle }
                        onPress={ () => Linking.openURL('https://hu-hu.facebook.com/') }
                        >
                        Regisztráció
                    </Text>
                </View>
                </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backGround: {
        height: 100+'%',
        width: 100+'%'
    },
    mainStyle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
        width: 120,
        height: 120
    },
    textStyle: {
        marginTop: 10,
        fontSize: 16,
        color: 'rgb(255,255,255)'
    }
})
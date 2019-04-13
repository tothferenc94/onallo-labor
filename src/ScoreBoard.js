import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ScoreBoard extends Component {
    render(){
        return(
            <View style={ styles.mainStyle }>
                <Text style={ styles.homeTeam }>Hazai csapat Hazai csapat</Text>
                <Text style={ styles.scoreStyle }>4 : 3</Text>
                <Text style={ styles.visitTeam }>Vendég csapat Vendég csapat</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainStyle: {
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'rgb(220,220,220)',
        borderRadius: 20
    },
    homeTeam: {
        fontSize: 20,
        color: 'rgb(0,0,0)',
        marginTop: 10
    },
    scoreStyle: {
        fontSize: 20,
        color: 'rgb(0,0,0)'
    },
    visitTeam: {
        fontSize: 20,
        color: 'rgb(0,0,0)',
        marginBottom: 10
    }
});
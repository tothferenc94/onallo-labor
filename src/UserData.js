import React, { Component } from 'react';
import { Image, View, Text, FlatList } from 'react-native';
import { getResults } from './FootballApi';

export default class UserData extends Component{
    state = {    
        dataApi: null
    }

    componentDidMount(){
        getResults("2019-04-16").then((result) => {
                
                var teams = []
                result.map(team => {
                    teams.push({
                        id: team.id,
                        name: team.title
                    })
                })
                this.setState({teams:teams})
            }).catch((err) => {
                alert("Hiba!")
            });
        }

    render(){
        return(
            <View>
                <Text>{this.state.dataApi}</Text>
                <FlatList
                    data={this.state.teams}
                    keyExtractor={(item) => item.id}
                    renderItem={this._renderItem}
            />
            </View>
        );
    }

    _renderItem = (item) => {
        return(
            <Text>{item.item.name}</Text>

        )
    }

}
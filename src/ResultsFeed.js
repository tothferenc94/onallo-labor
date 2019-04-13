import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import ScoreBoard from './ScoreBoard';
import TopBar from './TopBar';

export default class ResultsFeed extends Component {

  _renderResult({item}){
    return <TouchableOpacity><ScoreBoard/></TouchableOpacity>;
  }

  _returnKey(item){
    return item.toString();
  }

  render() {
    return (
      <ImageBackground
                    source={{ 
                        uri:
                         'https://timedotcom.files.wordpress.com/2019/01/nike-air-max-1-golf-grass-sneakers.jpg'
                        }}
                    style={{
                        height: 100+'%',
                        width: 100+'%'
                    }}>
          <FlatList
              data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]}
              keyExtractor={this._returnKey}
              renderItem={this._renderResult}
          />
      </ImageBackground>
    );
  }
}
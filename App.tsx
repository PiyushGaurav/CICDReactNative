import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5FCFF',
        }}>
        <Text style={{marginVertical: 10}}> Inflation Calc </Text>
        <Button title="Click me" onPress={() => {}} />
      </View>
    );
  }
}

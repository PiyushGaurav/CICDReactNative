import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import Crashes from 'appcenter-crashes';

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
        <Button
          title="Click me"
          onPress={() => {
            throw new Error('new error occurred');
            //Crashes.generateTestCrash();
          }}
        />
      </View>
    );
  }
}

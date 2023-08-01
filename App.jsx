import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';

export default class App extends Component {
  constructor() {
    super();
    this.checkPreviousSession();
  }

  async checkPreviousSession() {
    const didCrash = await Crashes.hasCrashedInLastSession();
    if (didCrash) {
      const report = await Crashes.lastSessionCrashReport();
      alert("Sorry about that crash, we're working on it");
    }
  }

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
          title="Calculate Inflation"
          onPress={() => {
            Analytics.trackEvent('Calculate_Inflation', {
              Internet: 'Celular',
              GPS: 'on',
            });
          }}
        />
      </View>
    );
  }
}

import React, { Component } from 'react';
import { View } from 'react-native-easy-layout-view'

import { Background, Divider, Waves, PlayerControls } from '@components';

export default class Main extends Component {
  render() {
    return (
      <Background>
        <Waves style={{ position: 'absolute', bottom: 0 }}>
          <View flex-1>
            <View height-25 style={{ backgroundColor: 'pink' }}></View>
            <Divider height={10} />
            <View height-65 style={{ backgroundColor: 'blue' }}></View>
            <Divider height={40} />
            <View height-60>
              <PlayerControls />
            </View>
          </View>
        </Waves>
      </Background>
    );
  }
}

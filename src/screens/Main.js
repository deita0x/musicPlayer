import React, { Component } from 'react';
import { View } from 'react-native-easy-layout-view';

import {
  Background,
  Divider,
  Waves,
  PlayerControls,
  PlaybackBar,
  TrackInfo,
  SongsList,
} from '@components';

export default class Main extends Component {
  render() {
    return (
      <Background>
        <View height-35 />

        <View flex-1 marginT-35>
          <SongsList />
        </View>

        <View flex-1>
          <Waves style={{ position: 'absolute', bottom: 0 }}>
            <View flex-1>
              <View height-25 marginH-25>
                <PlaybackBar />
              </View>

              <View height-65 marginT-10>
                <TrackInfo />
              </View>

              <View height-60 marginT-40>
                <PlayerControls />
              </View>
            </View>
          </Waves>
        </View>
      </Background>
    );
  }
}

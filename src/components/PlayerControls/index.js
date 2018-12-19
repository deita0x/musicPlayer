import React from 'react';
import { View } from 'react-native-easy-layout-view';

import Icon from './Icon';

const PlayerControls = () => {
  return (
    <View flex-1 row centerH>
      <View row width-170>
        <View width-40 right>
          <Icon name='back' width={30} />
        </View>

        <View width-90 centerH>
          <Icon name='pause' width={45} />
        </View>

        <View width-40>
          <Icon name='next' width={30} />
        </View>
      </View>
    </View>
  );
};

export default PlayerControls;

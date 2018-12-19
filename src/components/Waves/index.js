import React from 'react';
import Image from 'react-native-remote-svg';
import { View } from 'react-native';
import resolveAssetSource from 'resolveAssetSource';
import { WavesSvg } from '@assets';

const svg = resolveAssetSource(WavesSvg);

const Waves = ({ children, style = {} }) => {
  const lStyle = { height: svg.height, width: '100%' };

  return (
    <View style={[lStyle, style]}>
      <Image source={WavesSvg} />
      <View style={{ height: 270, width: '100%', position: 'absolute', bottom: 0 }}>
        {children}
      </View>
    </View>

  );
};

export default Waves;

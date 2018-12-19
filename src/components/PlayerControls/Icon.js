import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Icons } from '@assets';

const Icon = ({ name, width = null }) => {
  let imageWidth = width;
  if (name === 'play' || name === 'pause') {
    imageWidth = null;
  }

  return (
    <TouchableOpacity style={{ width, flex: 1 }}>
      <Image source={Icons[name]} style={{
        flex: 1,
        width: imageWidth,
        height: null,
        resizeMode: 'contain'
      }} />
    </TouchableOpacity>
  );
};

export default Icon;

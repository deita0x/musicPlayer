import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Icons } from '@assets';

const Icon = ({ name, width = null }) => {
  let imageWidth = width;
  if (name === 'play' || name === 'pause') {
    imageWidth = null;
  }

  return (
    <TouchableOpacity style={{ width, flex: 1 }}>
      <Image
        source={Icons[name]}
        style={[styles.imageIcon, { width: imageWidth }]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageIcon: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  }
});

export default Icon;

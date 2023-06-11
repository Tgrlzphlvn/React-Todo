import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {itemStyles} from './ItemStyles';

const Item = ({item}) => {
  return (
    <TouchableOpacity
      style={itemStyles.container}>
      <Text
        style={item.isComplete ? itemStyles.textLineThrough : itemStyles.text}>
        {item.todo}
      </Text>
    </TouchableOpacity>
  );
};

export default Item;

import {Text, View} from 'react-native';
import React from 'react';
import {outlineContainerStyles} from './OutlineContainerStyles';

const OutlineContainer = ({title}) => {
  return (
    <View style={outlineContainerStyles.buttonFrame}>
      <Text style={outlineContainerStyles.addButton}>{title}</Text>
    </View>
  );
};

export default OutlineContainer;

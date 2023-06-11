import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {headerStyles} from './HeaderStyles';
import OutlineContainer from './OutlineContainer/OutlineContainer';

const Header = ({finishedTodoCount, onAddToDo}) => {
  return (
    <View style={headerStyles.headerContainer}>
      <Text style={headerStyles.header}>To Do</Text>
      <View style={headerStyles.innerContainer}>
        <OutlineContainer title={finishedTodoCount} />
        <TouchableOpacity onPress={onAddToDo}>
          <OutlineContainer title="Add" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

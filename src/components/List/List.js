import {FlatList} from 'react-native';
import React from 'react';
import Item from './Item/Item';

const List = ({data, onChangeIsComplete}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Item item={item} />}
    />
  );
};

export default List;

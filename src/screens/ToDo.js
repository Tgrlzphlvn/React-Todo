import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {todoStyles} from './TodoStyles';
import Header from '../components/Header/Header';
import BottomSheet from '../components/BottomSheet/BottomSheet';
import {v4 as uuidv4} from 'uuid';
import 'react-native-get-random-values';
import List from '../components/List/List';

const ToDo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [length, setLength] = useState(0);
  const [todo, setToDo] = useState([]);

  const showOnAddToDo = () => setModalVisible(!modalVisible);

  const onAddToDo = todo =>
    setToDo(prev => [{id: uuidv4(), todo: todo, isComplete: false}, ...prev]);

  return (
    <SafeAreaView style={todoStyles.container}>
      <Header onAddToDo={showOnAddToDo} finishedTodoCount={length} />
      <List data={todo} />
      <BottomSheet
        modalVisible={modalVisible}
        setToDo={onAddToDo}
        onModalVisible={showOnAddToDo}
      />
    </SafeAreaView>
  );
};

export default ToDo;

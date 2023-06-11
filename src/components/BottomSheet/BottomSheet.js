import {Modal, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import bottomSheetStyles from './BottomSheetStyles';

export default BottomSheet = ({modalVisible, onModalVisible, setToDo}) => {
  const [text, setText] = useState('');

  return (
    <View style={bottomSheetStyles.container}>
      <Modal animationType="slide" transparent visible={modalVisible}>
        <View style={bottomSheetStyles.modalContainer}>
          <TextInput
            style={bottomSheetStyles.input}
            placeholder="I will.."
            value={text}
            onChangeText={text => setText(text)}
          />
          <TouchableOpacity
            style={bottomSheetStyles.buttonContainer}
            onPress={() => {
              if (text !== '') {
                setToDo(text);
                setText('');
              }
              onModalVisible(false);
            }}>
            <Text style={bottomSheetStyles.buttonText}>Save To Do</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

import {StyleSheet, Dimensions} from 'react-native';

export default bottomSheetStyles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#415a77',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginTop: Dimensions.get('window').height / 1.35,
    height: 200,
    width: Dimensions.get('window').width,
  },
  input: {
    width: '80%',
    height: '25%',
    borderWidth: 2,
    borderColor: '#f6bd60',
    borderRadius: 10,
    color: '#f6bd60',
    padding: 10,
    margin: 10,
  },
  buttonContainer: {
    borderWidth: 2,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#f6bd60',
  },
  buttonText: {
    color: '#f6bd60',
  },
});

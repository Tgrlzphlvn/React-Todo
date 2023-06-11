import {StyleSheet} from 'react-native';

export const itemStyles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#f6bd60',
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    margin: 4,
  },
  text: {
    padding: 10,
    fontSize: 16,
    fontWeight: '700',
    color: '#f6bd60',
  },
  textLineThrough: {
    padding: 10,
    fontSize: 16,
    fontWeight: '700',
    color: '#e9c46a',
    textDecorationLine: 'line-through',
    fontStyle: "italic"
  },
});

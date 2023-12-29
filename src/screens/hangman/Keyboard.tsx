import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { key } from '../../config/StaticColors';

type KeyboardProps = {
  correctLetters: any;
  wrongLetters: any;
  onPress: any;
};

type KeyProps = {
  text: string;
  onKeyPress: any;
  disabled: any;
};

const Key = ({ text, onKeyPress, disabled }: KeyProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => onKeyPress(text)} style={[styles.keyContainer, { backgroundColor: disabled ? '#99a' : key }]}>
      <Text style={styles.key}>{text}</Text>
    </TouchableOpacity>
  )
}

const Keyboard = ({ correctLetters, wrongLetters, onPress }: KeyboardProps) => {
  const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return (
    <View style={styles.container}>
      {keys.split('').map((ltr, index) => {
        const disable = correctLetters.includes(ltr) || wrongLetters.includes(ltr)
        return (
          <Key key={index} text={ltr} onKeyPress={onPress} disabled={disable} />)
      })}
    </View>
  )
}

export default Keyboard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
    flexWrap: 'wrap',
  },
  keyContainer: {
    width: 30,
    height: 38,
    backgroundColor: key,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  key: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
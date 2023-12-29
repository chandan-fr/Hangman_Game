import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { inputBox } from '../../config/StaticColors';


type InputBoxProps = {
  correctLetters: any;
  answer: any;
};


const InputBox = ({ correctLetters, answer }: InputBoxProps) => {
  return (
    <View style={styles.inputContainer}>
      {answer.split('').map((letter: string, index: number) => {
        const l = letter.toUpperCase();
        return (
          <Text key={index} style={styles.text}>
            {correctLetters.includes(l) ? l : '-'}
          </Text>
        )
      })}
    </View>
  )
}

export default InputBox;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: inputBox,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 3,
  },
});
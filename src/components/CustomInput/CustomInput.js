import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

const CustomInput = ({Value,setValue,placeholder,secureTextEntry}) => {Value
  return (
    <View style={styles.container}>
      <TextInput
        value={Value}
        onChangeText={setValue}
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 50,
    marginBottom: 5,
    backgroundColor: 'white',
  },
  input: {
    
  }
});

export default CustomInput;

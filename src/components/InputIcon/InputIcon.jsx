import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

const IconTextInput = ({ placeholder, icon, style, ...props }) => {
  return (
    <View style={[styles.container, style]}>
      <AntDesign name={icon} size={24} color="white" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#fff"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'white'
  },
});

export default IconTextInput;

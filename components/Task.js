import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Ionicons } from '@expo/vector-icons';

const Task = ({text}) => {
  const [checkboxState, setCheckboxState] = useState(false);
  
  return (
    <View style={styles.itemWrapper}>
      <BouncyCheckbox
        bounceEffect="1"
        isChecked={checkboxState}
        onPress={() => setCheckboxState(!checkboxState)}
        fillColor="#676D7D"
      />
      <Text
        style={{
          ...styles.itemText, 
          textDecorationLine: checkboxState ? 'line-through' : 'none',
        }}
      >
        {text}
      </Text>
      <TouchableOpacity style={styles.itemDeleteBtn}>
        <Ionicons name="trash-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  itemWrapper: {
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
  },
  itemText: {
    fontSize: 14,
    color: '#fff',
    flexWrap: 'wrap',
    flex: 1,
  },
  itemDeleteBtn: {
    marginLeft: 'auto',
  },
});

export default Task;
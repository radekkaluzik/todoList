import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Task = ({text}) => {
  
  return (
    <View style={styles.item}>
      <BouncyCheckbox
        bounceEffect="1"
        onPress={(isChecked) => {}}
        fillColor="#676D7D"
      />
      <Text style={styles.itemText}>
        {text}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    color: 'white',
  },
  itemText: {
    fontSize: 14,
    color: 'white',
  },
});

export default Task;
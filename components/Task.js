import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Task = ({text}) => {
  
  return (
    <View style={styles.item}>
      <BouncyCheckbox
        onPress={(isChecked) => {}}
        fillColor="#676D7D"
        unfillColor="#D1DEE7"
      />
      <Text style={styles.itemText}>
        {text}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
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
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';
import { MaterialIcons } from '@expo/vector-icons';
import image from './assets/wallpaper.jpg';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    // console.log(task);
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const handleDeleteTask = (index) => {
    let taskItemsCopy = [...taskItems];
    taskItemsCopy.splice(index, 1);
    setTaskItems(taskItemsCopy);
  }

  return (
    <ImageBackground source={image} style={styles.image}>
      <SafeAreaView style={styles.container}>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>
            To Do List
          </Text>
          <ScrollView style={styles.items}>
            {
              taskItems.map((item, index) => {
                return <Task key={index} id={index} delete={handleDeleteTask} text={item} />
              })
            }
          </ScrollView>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput
            style={styles.taskInput}
            placeholder={'Add a new task...'}
            placeholderTextColor={'#fff'}
            onChangeText={text => setTask(text)}
            value={task}
          />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addTaskWrapper}>
              <MaterialIcons name="playlist-add" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <StatusBar style="auto" />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    paddingHorizontal: 40,
    paddingTop: 80,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
        marginBottom: 30,
  },
  sectionTitle: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  items: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 200,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    // backgroundColor: 'yellow',
  },
  taskInput: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    flex: 1,
    fontWeight: 'bold',
    color: '#ffffff',
    borderRadius: 10,
  },
  addTaskWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  addTaskText: {
    fontSize: 24,
  }
});

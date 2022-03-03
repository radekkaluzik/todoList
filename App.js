import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/Task';
import { MaterialIcons } from '@expo/vector-icons';
import image from './assets/wallpaper.jpg';

// const image = { uri: "https://static.posters.cz/image/1300/fototapety/cute-kitten-i77094.jpg" };

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>
            To Do List
          </Text>
          <View style={styles.items}>
            <Task text="This is a task"/>
            <Task text="This is another task"/>
          </View>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput
            style={styles.taskInput}
            placeholder={'Add a new task...'}
          />
          <TouchableOpacity>
            <View style={styles.addTaskWrapper}>
              <MaterialIcons name="playlist-add" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    paddingHorizontal: 40,
    paddingTop: 80,
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
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 40,
    marginBottom: 30,
    // backgroundColor: 'yellow',
  },
  taskInput: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    width: '70%',
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
  },
  addTaskText: {
    fontSize: 24,
  }
});

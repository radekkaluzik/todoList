import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

const image = { uri: "https://mashtrelo.com/wp-content/uploads/2017/11/galaxy-iphone-8-plus-wallpaper.jpg" };

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>
            To Do List
          </Text>
          <View style={styles.items}>
            <Task text="This is some random text"/>
            <Task text="This is some random text 2"/>
          </View>
        </View>
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
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  items: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

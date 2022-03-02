import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

const image = { uri: "https://mashtrelo.com/wp-content/uploads/2017/11/galaxy-iphone-8-plus-wallpaper.jpg" };

export default function App() {
  return (
    <ImageBackground source={image} style={styles.image}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.sectionTitle}>
          To Do List
        </Text>
        <ScrollView style={styles.items}>
          <Task text="This is some random text"/>
          <Task text="This is some random text 2"/>
          <Task text="This is some random text 3"/>
          <Task text="This is some random text 4"/>
          <Task text="This is some random text 5"/>
          <Task text="This is some random text 6"/>
          <Task text="This is some random text 7"/>
          <Task text="This is some random text 8"/>
          <Task text="This is some random text 9"/>
          <Task text="This is some random text 10"/>
          <Task text="This is some random text 11"/>
          <Task text="This is some random text 12"/>
          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 0,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    paddingTop: 20,
    paddingHorizontal: 40,
  },
  items: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 40,
  },
});

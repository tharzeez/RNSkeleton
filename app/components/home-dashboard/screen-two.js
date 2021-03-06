import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class ScreenTwo extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerLeft: (
        <TouchableOpacity style={{ height: 44, width: 44, backgroundColor: '#986709' }} onPress ={() => {
          navigation.openDrawer();
        }}>
        </TouchableOpacity>
    ),
    title: 'Hello from Two'
  });

  render() {
    return (
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
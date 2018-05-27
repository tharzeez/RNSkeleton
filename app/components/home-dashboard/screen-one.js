import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default class ScreenOne extends React.Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerLeft: (
        <TouchableOpacity style={{ height: 44, width: 44, backgroundColor: '#986709' }} onPress ={() => {
          navigation.openDrawer();
        }}>
        </TouchableOpacity>
    ),
    title: 'Hello'
  });

  render() {
    return (
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the menu.</Text>
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
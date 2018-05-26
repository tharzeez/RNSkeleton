import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootNavigator, HomeDrawer } from "./app/routes/index"

export default class App extends React.Component {
  render() {
    return (
        <RootNavigator/>
    );
  }
}

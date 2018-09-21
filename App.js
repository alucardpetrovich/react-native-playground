import React from 'react';
import { StyleSheet, Text, View, ToastAndroid } from 'react-native';
import ViewPagerExample from './components/ViewPagerExample';

export default class App extends React.Component {
  render() {
    /*ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
    ToastAndroid.showWithGravity('All Your Base Are Belong To Us', ToastAndroid.LONG, ToastAndroid.CENTER);
    ToastAndroid.showWithGravityAndOffset('A wild toast appeared!', ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);*/

    return (
      <View style={styles.container}>
        <ViewPagerExample />
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

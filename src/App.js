import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.icon}>ICON</Text>
          <Text style={styles.temperature}>24°</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>Build a Fucking Weather App</Text>
          <Text style={styles.subtitle}>Let's make it rain</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#efc017',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  body: {
    flex: 5,
    flexDirection: 'column',
    // backgroundColor: 'green',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    margin: 10,
  },
  temperature: {
    fontFamily: 'HelveticaNeue',
    fontWeight: 'bold',
    fontSize: 45,
    color: 'white',
  },
  title: {
    fontFamily: 'HelveticaNeue',
    fontWeight: 'bold',
    fontSize: 85,
    color: 'white',
  },
  subtitle: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;

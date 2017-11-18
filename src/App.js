import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class App extends React.Component {

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(
      data => console.log(data),
      err => console.log(err),
      { timeout: 5000 }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.header}>
          <Icon name="wb-sunny" size={60} color="white" />
          <Text style={styles.temperature}>24°</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>
            Build a <Text style={{ color: 'red' }}>Fucking</Text> Weather App
          </Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  body: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    margin: 20,
  },
  temperature: {
    fontFamily: 'HelveticaNeue',
    fontWeight: 'bold',
    fontSize: 55,
    color: 'white',
  },
  title: {
    fontFamily: 'HelveticaNeue',
    fontWeight: 'bold',
    fontSize: 90,
    color: 'white',
  },
  subtitle: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;

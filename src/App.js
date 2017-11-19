import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { fetchWeather } from './weatherAPI';

const ICON_NAMES = {
  Default: 'timer-sand',
  Clear: 'weather-sunny',
  Rain: 'weather-pouring',
  Thunderstorm: 'weather-lightning',
  Clouds: 'weather-cloudy',
  Snow: 'weather-snowy',
  Drizzle: 'weather-rainy',
  Haze: 'weather-fog',
};

const PHRASES = {
  Default: {
    title: 'Fetching the fucking weather...',
    subtitle: 'Have fucking patience',
    color: 'black',
  },
  Clear: {
    title: 'It is fucking clear, mate!',
    subtitle: 'Fuck yeah!',
    highlight: 'fucking',
    color: 'blue',
  },
  Rain: {
    title: 'It is fucking raining',
    subtitle: 'Fuck this shit',
    highlight: 'fucking',
    color: 'grey',
  },
  Thunderstorm: {
    title: 'This is fucking scary man!',
    subtitle: 'Lightning bolt!',
    highlight: 'fucking',
    color: 'black',
  },
  Clouds: {
    title: 'Cloud storage limit reached',
    subtitle: 'Error: 500 Cirrocumulus',
    highlight: 'limit',
    color: 'grey',
  },
  Snow: {
    title: 'Brain fucking freeze',
    subtitle: "You ain't supposed to eat it",
    highlight: 'fucking',
    color: 'grey',
  },
  Drizzle: {
    title: "Meh... don't even ask",
    subtitle: 'What did I just say?',
    highlight: 'Meh',
    color: 'grey',
  },
  Haze: {
    title: "It's fucking hazy, mate!",
    subtitle: "I don't give a fuck!",
    highlight: 'fucking',
    color: 'green',
  },
};

class App extends React.Component {

  state = {
    temperature: 0,
    weather: 'Default',
  };

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(
      data => {
        fetchWeather(data.coords.latitude, data.coords.longitude)
          .then(({ temperature, weather }) => {
            console.log({ temperature, weather });
            this.setState({ temperature, weather });
          });
      },
      error => console.log(error),
      { timeout: 10000 }
    );
  }

  renderTitle() {
    switch (this.state.weather) {
      case 'Default':
        return <Text>Fetching the <Text style={styles.highlight}>fucking</Text> weather...</Text>;
      case 'Clear':
        return <Text>It is fucking clear, mate!</Text>;
      case 'Rain':
        return <Text>It is fucking raining</Text>;
      case 'Thunderstorm':
        return <Text>This is fucking scary man!</Text>;
      case 'Clouds':
        return <Text>Cloud storage limit reached</Text>;
      case 'Snow':
        return <Text>Brain fucking freeze</Text>;
      case 'Drizzle':
        return <Text>Meh... don't even ask</Text>;
      case 'Haze':
        return <Text>It's fucking hazy, mate!</Text>
      default:
        return <Text>ERROR</Text>;
    }
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: PHRASES[this.state.weather].color }]}>
        <StatusBar hidden />
        <View style={styles.header}>
          <Icon name={ICON_NAMES[this.state.weather]} size={60} color="white" />
          <Text style={styles.temperature}>{this.state.temperature}°</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>
            {this.renderTitle()}
          </Text>
          <Text style={styles.subtitle}>
            {PHRASES[this.state.weather].subtitle}
          </Text>
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
    fontSize: 80,
    color: 'white',
  },
  subtitle: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  highlight: { color: 'red' },
});

export default App;

const APPID = '19e6d91a4b43f822c7b772c6e573e59c';
const rootUrl = 'http://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = (latitute, longigute) => {
  const url = `${rootUrl}?apikey=${APPID}&lat=${latitute}&lon=${longigute}&units=metric`;
  console.log(url);
  return fetch(url)
    .then(res => res.json())
    .then(json => ({
      temperature: Math.round(json.main.temp),
      weather: json.weather[0].main
    }));
};

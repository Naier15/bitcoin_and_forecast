import React, { Component } from 'react';
import { Alert } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WeekWeather from "./weekweather";
import { Context } from './context';
import Home from './home';
import * as Location from 'expo-location';

const months = ['Янв','Фев','Март','Апр','Мая','Июн','Июл','Авг','Сент','Окт','Нояб','Дек'];
const Stack = createStackNavigator();

class App extends Component {

  key = '9fa1ce256ad3a2ba717acb0ba65a6385';

  state = {
    latitude: 1,
    longitude: 1,
    name: '',
    maxTemp: 0,
    minTemp: 0,
    clouds: 0,
    windSpeed: 0,
    date: '',
    month: '',
    daily: ''
  };

  componentDidMount() {
    this.getData();
    //setInterval(() => this.getData(), 43200 * 1000);
  }

  render(){
    return (
      <Context.Provider value={
        {
          state: this.state,
        }
      }>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}} >
            <Stack.Screen name="home" component={Home}/>
            <Stack.Screen name="weekweather" component={WeekWeather}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Context.Provider>
    );    
  }

  async getRequest(){
    var response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.latitude}&lon=${this.state.longitude}&exclude=weekly&appid=${this.key}&units=metric`);
    response = await response.json();
    response.daily.pop();
    this.setState({
            name: response.timezone.split('/')[1],
            maxTemp: response.daily[0].temp.max.toFixed(1),
            minTemp: response.daily[0].temp.min.toFixed(1),
            clouds: response.daily[0].clouds,
            windSpeed: response.daily[0].wind_speed,
            daily: response.daily,
            date: new Date(response.current.dt * 1000).getDate(),
            month: months[new Date(response.current.dt * 1000).getMonth()],
          });
  }

  async getData() {
    try {
      var status = await Location.requestForegroundPermissionsAsync();
      if (status.status !== 'granted') {
        Alert.alert('Разрешите приложению отслеживать локацию');
        return;
      }
      var location = await Location.getCurrentPositionAsync({});
      this.setState({latitude: location.coords.latitude, 
                    longitude: location.coords.longitude}, ()=>{ this.getRequest()});
    } catch (error){
        alert("Erroring: " + error.message);
    }
  }  
}
App.contextType = Context;

export default App;

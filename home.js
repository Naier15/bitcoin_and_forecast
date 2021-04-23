import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { Context } from './context';
import Btc from "./btc";
import Weather from "./weather";
//import 'react-native-gesture-handler';

class Home extends Component {

    render() {
        return (
            <View style={styles.container}>
                  <View style={styles.header}>
                    <Text style={styles.headertext}>Биткоин и Погода</Text>
                  </View>
                  
                  <View style={styles.btc}>
                    <Btc></Btc>
                  </View>
            
                  <View style={styles.weather}>
                    <Weather name={this.context.state.name}
                            minTemp={this.context.state.minTemp}
                            maxTemp={this.context.state.maxTemp}
                            clouds={this.context.state.clouds}
                            windSpeed={this.context.state.windSpeed}
                            date={this.context.state.date}
                            month={this.context.state.month} />
                    <View style={styles.btn}>
                      <Button title='Прогноз погоды на неделю' onPress={()=> {this.context.state.name === '' ? Alert.alert("Дождитесь определения вашего местоположения") : this.props.navigation.navigate('weekweather')}}></Button>        
                    </View>
                  </View>
            </View>
        );
    }
}
Home.contextType = Context;

const styles = StyleSheet.create({
    btc: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 20,
    },
    header: {
      backgroundColor: '#1E90FF',
      alignItems: 'center',
      justifyContent: 'flex-end',
      height: 100
    },
    headertext: {
      width: 200,
      paddingVertical: 10,
      color: '#FFFFFF',
      fontSize: 22,
      fontWeight: 'bold'
    },
    weather: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 20,
    },
    btn: {
      marginTop: 5,
      backgroundColor: '#0cc',
      borderRadius: 8,
      padding: 2,
    },
    container: {
      backgroundColor: '#fff',
    }
  });


export default Home;
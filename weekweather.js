import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { Context } from './context';

const months = ['Янв','Фев','Март','Апр','Мая','Июн','Июл','Авг','Сент','Окт','Нояб','Дек'];

class WeekWeather extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headertext}>Биткоин и Погода</Text>
        </View>
        
        <View style={styles.row}>
          <View style={styles.view2}>
            <Text style={styles.othertext}>Дата:</Text>
            <Text style={styles.othertext}>Температура:</Text>
            <Text style={styles.othertext}>Сила ветра:</Text>
            <Text style={styles.othertext}>Облачность:</Text>
          </View>
          <ScrollView horizontal={true} >
            {this.context.state.daily.map((item, key) => (  
              <View key={key} style={styles.view}>
                <Text style={styles.border}>{new Date(item.dt * 1000).getDate()} {months[new Date(item.dt * 1000).getMonth()]}</Text>
                <Text style={styles.othertext}>{item.temp.min}°C--{item.temp.max}°C</Text>
                <Text style={styles.othertext}>{item.wind_speed} м/с</Text>
                <Text style={styles.othertext}>{item.clouds}%</Text>
              </View>))
            }
          </ScrollView>
        </View>

        <View style={styles.btns}>
          <View style={styles.btn}>
            <Button title="Назад" onPress={() => this.props.navigation.goBack()} />
          </View>
        </View>
        
      </View>
    );
  }
}
WeekWeather.contextType = Context;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1E90FF',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 100,
  },
  headertext: {
    width: 200,
    paddingVertical: 10,
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  view: {
    margin: 5,
    backgroundColor: '#0cc',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
    borderRadius: 8,
    flexDirection: 'column',
    
    },
  view2: {
      margin: 5,
      backgroundColor: '#1E90FF',
      alignItems: 'flex-end',
      justifyContent: 'center',
      padding: 5,
      borderRadius: 8,
      flexDirection: 'column',
      borderBottomEndRadius: 1,
      borderTopEndRadius: 1,
      borderRightWidth: 4
    },
  othertext: {
    fontSize: 14,
    paddingVertical: 5,
  },
  row: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    marginVertical: 40
  },
  container: {
    backgroundColor: '#fff',
  },
  btns: {
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 5
  },
  border: {
    fontSize: 14,
    textAlign: 'center',
    backgroundColor: '#00FFFF',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: '#000',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    opacity: 0.85
  }
});

export default WeekWeather;
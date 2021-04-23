import React, { Component } from "react";
import { View, Text, StyleSheet} from "react-native";

class Weather extends Component {

    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.text}>Ваше местоположение: {this.props.name}</Text>
                <Text style={styles.othertext2}>Последнее обновление:</Text>
                <Text style={styles.othertext}>{this.props.date} {this.props.month}</Text>
                <Text style={styles.othertext}>Температура: {this.props.minTemp}°C-{this.props.maxTemp}°C</Text>
                <Text style={styles.othertext}>Облачность: {this.props.clouds}%</Text>
                <Text style={styles.othertext}>Сила ветра: {this.props.windSpeed} м/с</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    view: {
        backgroundColor: '#0cc',
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 10,
    },
    text: {
        marginTop: 5,
        marginBottom: 10, 
        fontSize: 19,
        textAlign: 'center',
        backgroundColor: '#00FFFF',
        borderRadius: 10,
        borderColor: '#000',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        opacity: 0.85
    },
    othertext2: {
        paddingBottom: 0, 
        fontSize: 17
    },
    othertext: {
        paddingBottom: 5, 
        fontSize: 17
    },
});

export default Weather;
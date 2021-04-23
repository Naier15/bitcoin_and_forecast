import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Btc extends Component {

    url = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD';
    state = {
        btc: 0
    }

    constructor(props){
        super(props);
        this.getData();
    }
    
    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.text}>Биткоин: {this.state.btc}$</Text>
                <Button title='Обновить' onPress={() => {this.getData()}}></Button>
            </View>
        );
    }

    async getData(){
        try {
            var response = await fetch(this.url);
            response = await response.json();
            this.setState({btc: response.USD});
        } catch (error){
            this.setState({btc: 0});
            alert("Error: " + error.message);
        }
    } 
}

var styles = StyleSheet.create({
    view: {
        backgroundColor: '#0cc',
        width: 250,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
    },
    text: {
       paddingBottom: 10, 
       fontSize: 19
    }
})

export default Btc;
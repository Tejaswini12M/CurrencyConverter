import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Alert,TouchableWithoutFeedback, Keyboard } from 'react-native';

const currencyPerRupee = {
  DOLLAR:0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL:0.93,
  AUSDOLLAR:0.2,
  CANDOLLAR:0.019,
  YEN:1.54,
  DINAR:0.0043,
  BITCOIN:0.0000041
}

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      inputValue: "",
      resultValue: "0.0"
    };
  }

  buttonPressed = currency => {
    if(this.state.inputValue === ""){
      Alert.alert("Enter Some Value");
    }
    // Alert.alert("Enter Some Value" + currency);
    let result = parseFloat(this.state.inputValue) * currencyPerRupee[currency]
    this.setState({resultValue: result.toFixed(2)});
  }


  render(){
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
            <Text style={styles.header}> 
            Currency Converter
            </Text>
        </View>
      <View style={styles.screenView}>
        <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>
             {this.state.resultValue}
            </Text>
        </View>
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} 
            selectionColor="#FFF" 
            keyboardType="numeric" 
            placeholder="Enter Value" 
            value={this.state.inputValue}
            onChangeText={inputValue=> this.setState({
              inputValue
            })}/>
        </View>
        <View>
          <View style={styles.converterButtonContainer}>
              <TouchableOpacity style={styles.converterButton}>
                <Text onPress={() => {
                  this.buttonPressed("DOLLAR")
                }} style={styles.converterButtonText}>$</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.converterButton}>
                <Text onPress={() => {
                  this.buttonPressed("EURO")
                }} style={styles.converterButtonText}>Euro</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.converterButton}>
                <Text onPress={() => {
                  this.buttonPressed("POUND")
                }} style={styles.converterButtonText}>Pound</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.converterButton}>
                <Text onPress={() => {
                  this.buttonPressed("YEN")
                }} style={styles.converterButtonText}>Yen</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.converterButton}>
                <Text onPress={() => {
                  this.buttonPressed("DINAR")
                }} style={styles.converterButtonText}>Dinar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.converterButton}>
                <Text onPress={() => {
                  this.buttonPressed("AUSDOLLAR")
                }} style={styles.converterButtonText}>Aus</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.converterButton}>
                <Text onPress={() => {
                  this.buttonPressed("CANDOLLAR")
                }} style={styles.converterButtonText}>Canada</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.converterButton}>
                <Text onPress={() => {
                  this.buttonPressed("BITCOIN")
                }} style={styles.converterButtonText}>BitCoin</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.converterButton}>
                <Text onPress={() => {
                  this.buttonPressed("RUBEL")
                }} style={styles.converterButtonText}>Rubel</Text>
              </TouchableOpacity>
          </View>
        </View>
        </View>
      </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAE0E2',
    marginTop:20
  },
  screenView:{
    flex:1
  },
  resultContainer:{
    height: 70,
    marginTop:20,
    justifyContent:"center",
    alignItems:"center",
    borderWidth: 2,
    borderColor: "#c1c1c1",
    backgroundColor:"#0A79DE"
  },
  resultValue:{
    fontSize:30,
    fontWeight:"bold",
    color:"#FFF"
  },
  inputContainer:{
    marginTop:20,
    height:70,
    justifyContent:"center",
    alignItems:"center",
    borderColor:"#c1c1c1",
    borderWidth:2,
    backgroundColor:"#0A79DE"
  },
  input:{
    fontSize: 30,
    color:"#FFFFFF"
  },
  converterButtonContainer:{
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:20,
    borderColor:"#c1c1c1",
    borderWidth:2
  },
  converterButton:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#0A79DE",
    height:100,
    borderColor:"#c1c1c1",
    borderWidth:2,
    width: "33.33%"
  },
  converterButtonText:{
    fontSize: 30,
    fontWeight:"bold",
    color:"#FFFFFF"
  },
  header:{
    fontSize: 30,
    fontWeight:"bold",
    color:"#FFFFFF"
  }

});

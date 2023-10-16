// rcc
// rfc

// react
import React, { Component } from 'react'

// react native
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

// CLASS
export default class ButtonCounter extends Component {

    // STATE
    state = {
      counter: 0,
    }

    // onPress
    counterPlus = () => {
        this.setState({
            counter: this.state.counter + 1, // X++
        });
    };
    counterMinus = () => {
      this.setState({
          counter: this.state.counter - 1, // X--
      });
    };
    counterReset = () => {
      this.setState({
          // counter: 0, // X=0
          counter: this.state.counter=0 // X=0
      });
    };
    // RENDER
    render() {
        // RETURN
        return (
          
            <View style={styles.container}>
              <View>
                  <Text style={styles.textStyle}>Counter:{this.state.counter}</Text>
                </View>
                {/* <View></View> 
                {/* Button(+) */}
                <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.buttonStylePlus} onPress={this.counterPlus}>
                    <Text style ={styles.textStyle}> Counter Artır</Text>
                </TouchableOpacity>
                {/* Button(-) */}
                <TouchableOpacity style={styles.buttonStyleMinus} onPress={this.counterMinus}>
                    <Text style ={styles.textStyle}> Counter Azalt</Text>
                </TouchableOpacity>
                {/* Button(0) */}
                <TouchableOpacity style={styles.buttonStyleReset} onPress={this.counterReset}>
                    <Text style ={styles.textStyle}> Counter Reset</Text>
                </TouchableOpacity>
                </View>

                {/* <View>
                    <Text> Counter: {this.state.counter}</Text>
                </View> */}
            </View>
        ) //end return
    } //end render
} //end class

const styles = StyleSheet.create({
    container: {
        // flex-start:sol
        // flex-end: sağ
        // center
        flex: 1,//bütün ekranı kaplar
        alignItems: 'center',     // satır düzleminde
        justifyContent: 'center', // sutun düzleminde
        backgroundColor: 'black',
    },

    buttonStylePlus: {
      backgroundColor: 'pink',
      padding: 5, //içerden sağdan soldan boşluk
      borderRadius: 10, //butonun kenarlarını torpuler
      height: 50,
      marginRight: 3,
      marginBottom: 30, //buton ve yazı arasındaki boşluk 
      justifyContent:'center',
      alignContent:'center' ,
      

    },
    buttonStyleMinus: {
      backgroundColor: 'red',
      padding: 5, //içerden sağdan soldan boşluk
      borderRadius: 10, //butonun kenarlarını torpuler
      height: 50,
      marginRight: 3,
      marginBottom: 30, //buton ve yazı arasındaki boşluk 
      justifyContent:'center',
      alignContent:'center' ,
    

    },
    buttonStyleReset: {
      backgroundColor: '#006',
      padding: 5, //içerden sağdan soldan boşluk
      borderRadius: 10, //butonun kenarlarını torpuler
      height: 50,
      marginRight: 3,
      marginBottom: 30, //buton ve yazı arasındaki boşluk 
      justifyContent:'center',
      alignContent:'center' 

    },
    
  
    textStyle: {
      color: "blue",
      fontSize: 21,
      marginBottom: 10
    }
    
    
});
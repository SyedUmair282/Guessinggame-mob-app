/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Alert,
    BackHandler
    
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Menu extends React.Component{
    
    componentDidMount() {
    	
        SplashScreen.hide()
    }
    exit=()=>{
        Alert.alert("Attention!","Do you want to exit?",[{text:"Yes",onPress:()=>BackHandler.exitApp()},{text:"No"}])
    }
    render(){

    
    return ( 
        <View style={styles.main}>
		    <Text style={styles.head}>Guessing game</Text>
            <View style={styles.main2}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("End")}} style={styles.button} activeOpacity={0.5}>
                    <Text style={styles.start}>Start the game!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={()=>{Alert.alert("Help","There are nine buttons when you click on any button it shows a number you have total 5 chance to click on any button but remember dont click on that button that you already press each number has count if there count is equal to or greather than 50 then you will win otherwise you lost",[{text:"Close",onPress:()=>console.log("alert closed")}])}} activeOpacity={0.5}>
                    <Text style={styles.start}>?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.exit} style={styles.button3} activeOpacity={0.5}>
                    <Text style={styles.start}>X</Text>
                </TouchableOpacity>
            </View>

	    </View>
    );
    }
};

const styles = StyleSheet.create({
    
    
    head: {
        color: 'white',
        fontSize: 45,
        textAlign: 'center',
        marginTop:10,
        fontFamily:'times new roman',
        textShadowColor:"white",
        textShadowRadius:15,
        textShadowOffset: { width: 3, height: 4 }


    },
    main:{
        backgroundColor:"black",
        flex:1
    },
    main2:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        marginBottom:50
    },
    start:{
        color:"black",
        fontFamily:'times new roman',
        fontSize:18
    },
    button:{
        backgroundColor:"white",
        width:150,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:15,
    },
    button2:{
        backgroundColor:"white",
        width:50,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:50,
        position: 'absolute',
        bottom:-15,
        left:15
    },
    button3:{
        backgroundColor:"white",
        width:50,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:50,
        position: 'absolute',
        bottom:-15,
        right:15
    }
});

export default Menu;
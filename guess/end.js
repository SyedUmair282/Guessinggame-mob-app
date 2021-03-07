/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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

class End extends React.Component{
    
    constructor(){
        super()
        this.state={
            count:0,
            first:null,
            second:null,
            third:null,
            fourth:null,
            fifth:null,
            sixth:null,
            seventh:null,
            eighth:null,
            ninth:null,
            total:null
        }
    }
    

    
    
    cal1=()=>{
        let a=Math.floor(Math.random()*20)
        this.setState({
            first:a,
            count:this.state.count+=1
        })
        
        
        
    }
    cal2=()=>{
        
        let b=Math.floor(Math.random()*20)
        this.setState({
            second:b,
            count:this.state.count+=1
        })
        
    }
    cal3=()=>{
        
        let c=Math.floor(Math.random()*20)
        this.setState({
            third:c,
            count:this.state.count+=1
        })
        
    }
    cal4=()=>{
        
        let d=Math.floor(Math.random()*20)
        this.setState({
            fourth:d,
            count:this.state.count+=1
        })
        
    }
    cal5=()=>{
        
        let e=Math.floor(Math.random()*20)
        this.setState({
            fifth:e,
            count:this.state.count+=1
        })
      
    }
    cal6=()=>{
        
        let f=Math.floor(Math.random()*20)
        this.setState({
            sixth:f,
            count:this.state.count+=1
        })
        
    }
    cal7=()=>{
        
        let g=Math.floor(Math.random()*20)
        this.setState({
            seventh:g,
            count:this.state.count+=1
        })
        
    }
    cal8=()=>{
        
        let h=Math.floor(Math.random()*20)
        this.setState({
            eighth:h,
            count:this.state.count+=1
        })
    }
    cal9=()=>{
        
        let i=Math.floor(Math.random()*20)
        this.setState({
            ninth:i,
            count:this.state.count+=1
        })
    }
    clear=()=>{
        this.setState({
            count:0,
            first:null,
            second:null,
            third:null,
            fourth:null,
            fifth:null,
            sixth:null,
            seventh:null,
            eighth:null,
            ninth:null,
            total:null
        })
    }
    check=()=>{
        let tot=this.state.first+this.state.second+this.state.third+this.state.fourth+this.state.fifth+this.state.sixth+this.state.seventh+this.state.eighth+this.state.ninth
        this.setState({
            total:this.state.total=tot
        })
        if(this.state.total>=50)
        {
            Alert.alert(
                "CONGRATULATIONS",
                "YOU WON THE GAME",
                [{text:"OK", onPress: () => console.log('OK Pressed'),style:"cancel"}]
            )
        }
        else{
            Alert.alert(
                "TRY AGAIN",
                "YOU LOST THE GAME",
                [{text:"OK", onPress: () => console.log('OK Pressed'),style:"destructive"}]
            )
        }
        this.setState({
            count:0,
            first:null,
            second:null,
            third:null,
            fourth:null,
            fifth:null,
            sixth:null,
            seventh:null,
            eighth:null,
            ninth:null,
            total:null
        })
    }
    
    
    
    render(){
    return ( 
        <View style={styles.main}>
		    {/* <Text style={styles.head}>Press the buttons</Text> */}
            <View style={styles.main2}>
                <TouchableOpacity disabled={this.state.first || this.state.count >= 5 ? true : false}  onPress={this.cal1} style={styles.button} activeOpacity={0.5}>
                    <Text style={styles.start}>{this.state.first}</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.second || this.state.count >= 5 ?true:false} onPress={this.cal2} style={styles.button} activeOpacity={0.5}>
                    <Text style={styles.start}>{this.state.second}</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.third || this.state.count >= 5 ?true:false} onPress={this.cal3} style={styles.button} activeOpacity={0.5}>
                    <Text style={styles.start}>{this.state.third}</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.fourth || this.state.count >= 5 ?true:false} onPress={this.cal4} style={styles.button} activeOpacity={0.5}>
                    <Text style={styles.start}>{this.state.fourth}</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.fifth || this.state.count >= 5 ?true:false} onPress={this.cal5} style={styles.button} activeOpacity={0.5}>
                    <Text style={styles.start}>{this.state.fifth}</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.sixth || this.state.count >= 5 ?true:false} onPress={this.cal6} style={styles.button} activeOpacity={0.5}>
                    <Text style={styles.start}>{this.state.sixth}</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.seventh || this.state.count >= 5 ?true:false} onPress={this.cal7} style={styles.button} activeOpacity={0.5}>
                    <Text style={styles.start}>{this.state.seventh}</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.eighth || this.state.count >= 5 ?true:false} onPress={this.cal8} style={styles.button} activeOpacity={0.5}>
                    <Text style={styles.start}>{this.state.eighth}</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.ninth || this.state.count >= 5 ?true:false} onPress={this.cal9} style={styles.button} activeOpacity={0.5}>
                    <Text style={styles.start}>{this.state.ninth}</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.count >= 1 ?false:true} onPress={this.clear} style={styles.button2} activeOpacity={0.5}>
                    <Text style={styles.start2}>Clear</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.count >= 5 ?false:true} onPress={this.check} style={styles.button2} activeOpacity={0.5}>
                    <Text style={styles.start2}>Check</Text>
                </TouchableOpacity>
            </View>
	    </View>
    );

    }
};

const styles = StyleSheet.create({
    
    
    head: {
        color: 'white',
        fontSize: 35,
        textAlign: 'center',
        marginTop:10,
        fontFamily:'times new roman'
    },
    main:{
        backgroundColor:"black",
        flex:1
    },
    button:{
        backgroundColor:"ivory",
        width:90,
        height:90,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:15,
        marginTop:35
    },
    button2:{
        backgroundColor:"black",
        width:130,
        height:90,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:15,
        marginTop:35,
        borderWidth:2,
        borderColor:"white"
        
    },
    main2:{
        flexDirection:"row",
        justifyContent:"space-around",
        flexWrap:"wrap",
        marginLeft:1,
        marginTop:25
    },
    start:{
        fontSize:18,
        fontFamily:'times new roman'
    },
    start2:{
        fontSize:25,
        fontFamily:'times new roman',
        color:"white"
    }
    
});

export default End;

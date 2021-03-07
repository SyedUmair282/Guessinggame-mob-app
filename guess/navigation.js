import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './menu'
import End from './end'

const Stack = createStackNavigator();

class Navigate extends React.Component{
    render(){
    
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} options={{title:false,
          headerStyle: {
            backgroundColor: 'black'
          }}} />
          <Stack.Screen name="End" component={End} options={{title:"Back to main menu",
          headerStyle: {
            backgroundColor: 'black'
          },
          headerTitleStyle: {
            fontFamily: "my-custom-font",
            fontWeight: "200",
            color:"white",
          },
          headerTintColor:"white"
          
         }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
    }
}

export default Navigate;
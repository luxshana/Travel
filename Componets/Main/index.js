import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../Home';
import  Search from "../Search"
import Setting from '../Setting';


const homeName = "Home";
const searchName = "Search";
const settingsName = "Setting";

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <NavigationContainer>
      
      
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === searchName) {
              iconName = focused ? 'search' : 'search-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={searchName} component={Search} />
        <Tab.Screen name={settingsName} component={Setting} />

      </Tab.Navigator>
      
    </NavigationContainer>
    
  );
}

export default Main;
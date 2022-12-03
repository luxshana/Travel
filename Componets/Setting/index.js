import * as React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from '@rneui/themed';
import { Input } from '@rneui/themed';
export default function Setting({ navigation }) {
    return (
        <View   style={{backgroundColor:"lightblue",}}>
            <View style={{flex: 1,alignItems: 'center',padding:20 }}>
            
            <Avatar
          size={200}
          rounded
          source={{ uri: 'https://randomuser.me/api/portraits/women/57.jpg' }}
          title="Bj"
          containerStyle={{ backgroundColor: 'grey' }}
        />
        <Text
                style={{ fontSize: 26, fontWeight: 'bold' }}>Change profile picture</Text>
        </View>
        <br/>
        <View style={{padding:6,}}>
        <Input
      placeholder='First Name'
    />
    <br/>
    <Input
      placeholder='Last Name'
    />
    <br/>
    <Input
      placeholder='User Name'
    />
    <br/>
     <Input
      placeholder='Email'
    />
    <br/>
     <Input
      placeholder='Password'
    />
    <br/>
     <Input
      placeholder='ID'
    />
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </View>

        </View>
        
    );
}
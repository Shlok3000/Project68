import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class InstagramScreen extends React.Component {
    render(){
        return(
            <View>
                <Text>This is Instagram</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class FacebookScreen extends React.Component {
    render(){
        return(
            <View>
                <Text>This is Facebook</Text>
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
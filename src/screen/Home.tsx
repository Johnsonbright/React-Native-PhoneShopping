import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

// navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import Details from './Details'

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.smallText}>Home</Text>
      <Button
      title="Go to details"
      onPress={() => navigation.navigate("Details", {
        productId: '86'
      }) }

      // onPress={() => navigation.navigate('Details')} 

      // onPress={() => navigation.push('Details', {
      //   productId: '90'
      // })}
      />
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  smallText : {
    color: '#0000'

  }
})
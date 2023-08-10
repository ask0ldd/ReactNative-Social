import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const Appointment = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', columnGap:18, paddingHorizontal:18, width:'100%'}}>
        <View style={styles.specialistCard}>aaabbb</View>
      </View>
    </View>
  )
}

export default Appointment

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#dfdfdf',
    rowGap:24,
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundImage: `linear-gradient(180deg, rgba(48, 191, 225, 0.15) 0%, 
    rgba(48, 191, 225, 0.00) 20.90%), radial-gradient(147.16% 91.22% at 94.81% 10.22%, rgba(113, 255, 238, 0.30) 0%, 
    rgba(113, 255, 255, 0.00) 100%)`,
  },
  specialistCard:{
    height:200,
    width:'100%',
    backgroundImage: 'linear-gradient(180deg, rgba(125, 215, 237, 0.00) 39.39%, rgba(125, 215, 237, 0.20) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.90) 100%)',
    borderRadius:20,
    boxShadow: '0px 16px 64px 0px rgba(35, 190, 227, 0.45), 0px 4px 8px 0px rgba(92, 169, 188, 0.15)',
  },
})
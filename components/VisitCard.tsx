import { StyleSheet, Text, View, Image } from 'react-native'
import Ratings from './Ratings'

type Props = {}

const VisitCard = (props: Props) => {
  return (
    <View style={styles.card}>
        <Image style={{opacity:0.93, alignSelf:'flex-end', marginLeft:10}} source={require('../assets/avatars/oliver_avatar.png')}/>
        <View style={styles.infosContainer}>
          <Text style={{color:'#374B4C', fontSize: 16, fontFamily: 'Montserrat_700Bold', marginTop:24}}>Dr Oliver SYKES</Text>
          <Text style={{color:'rgba(137, 164, 171, 0.9)', fontSize: 12, fontFamily: 'Montserrat_600SemiBold', marginTop:6}}>HEAR SURGEON</Text>
          <View style={{flexDirection:'row', alignItems:'center', columnGap:8, marginTop:6}}>
            <Ratings rating={5}/>
            <Text style={{color:'rgba(137, 164, 171, 0.9)', fontSize: 12, fontFamily: 'Montserrat_600SemiBold'}}>(22 Reviews)</Text>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card : {
        width:312,
        // can only stack linear-gradients, so needs to convert plain colors into constant linear gradients
        backgroundImage : 'linear-gradient(180deg, rgba(125,215,237,0) 33%, rgba(125,215,237,0.2) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.8) 100%)',
        height:200,
        borderRadius:20,
        boxShadow:'0 8px 16px rgba(35, 190, 227, 0.45), 0 2px 4px rgba(92, 169, 188, 0.15)',
        flexDirection:'row',
    },
    infosContainer : {
      height:'100%',
      flexDirection : 'column',
      marginLeft : 8,
    }
})

export default VisitCard
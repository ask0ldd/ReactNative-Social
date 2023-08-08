import { Image, StyleSheet, Text, View } from 'react-native'

type Props = {
    text : string
}

const Card = (props: Props) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={{position:'absolute'}}>{props.text}</Text>
      <Image style={[styles.avatar, {zIndex:999}]} source={require('../assets/avatars/connie_avatar.png')}/>
      <Image style={styles.avatar} blurRadius={1} source={require('../assets/avatars/connie_avatar.png')}/>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    cardContainer : {height:66, width:66, backgroundColor:'#fff', padding:20, borderRadius:6, fontFamily: 'Nunito_500Medium',
     border: '2px solid #fff',
     backgroundImage: `linear-gradient(0deg, rgba(55, 216, 255, 0.30) 0%, rgba(55, 216, 255, 0.30) 100%), 
     linear-gradient(180deg, rgba(138, 221, 239, 0.50) 0%, rgba(0, 127, 134, 0.50) 100%)`,
    },
    avatar : {position:'absolute',height:'100%',width:'100%', top:0, left:0,
    },
})
import { StyleSheet, Text, View } from 'react-native'

type Props = {
    text : string
}

const Card = (props: Props) => {
  return (
    <View style={styles.cardContainer}>
      <Text>{props.text}</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    cardContainer : {height:120, width:120, backgroundColor:'#fff', padding:20, borderRadius:6, fontFamily: 'Nunito_500Medium', boxShadow:'0 4px 8px #aaaaaa'}
})
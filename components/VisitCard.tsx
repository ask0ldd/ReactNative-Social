import { StyleSheet, Text, View, Image } from 'react-native'

type Props = {}

const VisitCard = (props: Props) => {
  return (
    <View style={styles.card}></View>
  )
}

const styles = StyleSheet.create({
    card : {
        width:312,
        // can only stack linear-gradients, so needs to convert plain colors into constant linear gradients
        backgroundImage : 'linear-gradient(180deg, rgba(125,215,237,0) 33%, rgba(125,215,237,0.2) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.8) 100%)',
        height:'100%',
        borderRadius:20,
        boxShadow:'0 8px 16px rgba(35, 190, 227, 0.45), 0 2px 4px rgba(92, 169, 188, 0.15)'
    }
})

export default VisitCard
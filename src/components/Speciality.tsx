import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native'

type Props = {
    speciality : string
    specialityIconUri : ImageSourcePropType
}

const Speciality = (props: Props) => {
  return (
    <View style={styles.specialityContainer}>
        <View style={styles.specialityButton}>
            <Image style={styles.icon} source={props.specialityIconUri}/>
        </View>
        <Text style={{textAlign:'center', fontSize:12, color:'#374B4C', fontFamily:'Montserrat_600SemiBold'}}>
            {props.speciality}
        </Text>
    </View>
  )
}

export default Speciality

const styles = StyleSheet.create({
    specialityContainer:{
        width:64,
        flexDirection:'column',
        rowGap:4,
    },
    specialityButton:{
        height:64,
        width:64,
        borderRadius:10,
        backgroundColor:'rgba(35, 190, 227, 0.6)',
        backgroundImage: `linear-gradient(222deg, rgba(255, 255, 255, 0.3) 41%, rgba(255, 255, 255, 0) 100%), 
        rgba(35, 190, 227, 0.7)`,
        justifyContent:'center',
        alignItems:'center',
        border: '2px solid #fff',
        boxShadow: 'inset 0 4px 8px #1AB9DE',
        overflow:'hidden',
    },
    icon : {height:64, width:64, zIndex:3},
})
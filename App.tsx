import { StatusBar } from 'expo-status-bar'
import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native'
import Card from './components/Card'
// import {  useFonts, Nunito_500Medium } from '@expo-google-fonts/nunito';

const {height, width} = Dimensions.get('window')

export default function App() {

  /*let [fontsLoaded] = useFonts({
    Nunito_500Medium,
  })*/

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.searchBar}>
          <Text style={{color:'#93AEB5'}}>Search</Text><Text style={{color:'#93AEB5'}}>Send</Text>
        </View>
        <View style={styles.practitionersContainer}>
            <ScrollView horizontal={true} contentContainerStyle={{columnGap: 16, paddingLeft:16, paddingRight:16, paddingBottom:20}}>
              <Card text={'aaa'} avatarUri={'../assets/avatars/connie_avatar.png'}/>
              <Card text={'bbb'} avatarUri={'../assets/avatars/connie_avatar.png'}/>
              <Card text={'ccc'} avatarUri={'../assets/avatars/connie_avatar.png'}/>
              <Card text={'ddd'} avatarUri={'../assets/avatars/connie_avatar.png'}/>
              <Card text={'eee'} avatarUri={'../assets/avatars/connie_avatar.png'}/>
            </ScrollView>
        </View>
      </View>
    </View>
  )
}

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
  main :{
    flex:0,
    width:'100%',
    marginHorizontal:'auto',
    paddingTop:20,
    flexDirection:'column',
  },
  searchBar:{
    flex:0,
    flexDirection:'row',
    backgroundColor:'rgba(255, 255, 255, 0.80)',
    border:'1px solid #A5E3EC',
    width: width-32,
    justifyContent:'space-between',
    alignItems:'center',
    padding: 18,
    borderRadius:10,
    marginHorizontal: 16,
    color:'#93AEB5',
  },
  practitionersContainer:{
    height:66,
    marginTop:20,
  }
})

const data : Array<IItem> = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
]

interface IItem {
  id : string
  title : string
}

/*

<ImageBackground source={'./assets/bg.png'} resizeMode={'cover'} style={styles.image}>
  <Text style={styles.topText}>Open up App.tsx to start working on your app!</Text>
  <FlatList data={data}
  renderItem={({item} : {item:IItem}) => <Item title={item.title} />}
  keyExtractor={(item : IItem) => item.id}/>
</ImageBackground>

image: {
    flex: 1,
    width: '100%', height: '100%',
    justifyContent: 'center',
  },
  gradientContainer:{
    flex:1,
    width:'100%',
    height:'100%',
    backgroundColor:'#fff',
    zIndex:1,
  },
  topText:{
    height:48, 
    display:'flex',
    color:'#fff',
    fontWeight:'600',
    justifyContent:'center', 
    alignItems:'center',
    backgroundImage:'linear-gradient(45deg, blue, red)',
    boxShadow:'0px 4px 8px rgba(0,0,0,0.5)',
    zIndex:2,
    border:'1px solid blue',
    borderRadius:32,
    overflow:'hidden',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    color:'#000',
  },

*/

/*const Item = ({title} : {title:string, id?:string}) => (
  <View style={styles.item}>
    <Text>{title}</Text>
  </View>
)*/
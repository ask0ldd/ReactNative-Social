import { StatusBar } from 'expo-status-bar'
import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.searchBar}>
          <Text style={styles.searchText}>Search</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfdfdf',
    rowGap:24,
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
  },
  main :{
    flex:1,
    width:'80%',
    justifyContent:'center',
    maxWidth:960,
    marginHorizontal:'auto',
  },
  searchBar:{
    flex:1,
    backgroundColor:'#fff',
    border:'1px solid #afafaf',
    width:'100%',
    maxHeight:48,
  },
  searchText:{
    width:'100%',
    padding: 16,
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
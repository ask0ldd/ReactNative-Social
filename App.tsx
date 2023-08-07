import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={'./assets/bg.png'} resizeMode={'cover'} style={styles.image}>
        <Text style={styles.topText}>Open up App.tsx to start working on your app!</Text>
        
        <View style={styles.gradientContainer}></View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  }
});

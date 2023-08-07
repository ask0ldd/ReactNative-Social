import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={'./assets/bg.png'} resizeMode={'cover'} style={styles.image}>
        <Text style={{height:'48px', display:'flex', justifyContent:'center', alignItems:'center'}}>Open up App.tsx to start working on your app!</Text>
        
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
    backgroundColor:'#000'
  }
});

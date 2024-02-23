import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground } from 'react-native';

export default function App() {

  btn = () => {
    alert("Logado com Sucesso");
  }

//inserir os elementos

  return (
    <View style={styles.container}>
       <ImageBackground source={require('./assets/toji.png')} resizeMode="cover" style={styles.sun}>
      <Text style={styles.titulo}>Login</Text>
      
      <TextInput style={styles.inputname} placeholder='Digite seu Nome' />
      <TextInput style={styles.inputname} placeholder='Digite seu E-mail' />
      <TextInput style={styles.inputname} placeholder='Digite sua Senha' secureTextEntry={true}/>
      <Button 
        onPress={btn}
        style={styles.button} 
        title='Logar'  
      />
        <Image
          style={styles.sunny}
          source={require('./assets/toji.png')}
        />
        </ImageBackground>
      <StatusBar style="auto" />
    </View>
  ); 
}

//definir o estilo dos elementos

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  text: {
    color: 'white',
    fontSize: 50,
  },
  inputname: {
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    width: 300,
    height: 50, 
    backgroundColor: 'white',
  
  },
  button: {
    color: 'white',
    backgroundColor: 'black',
    fontSize: 20,
  },
  sunny: {
      width: 250,
      height: 250,
      bottom: 550,

    },
  titulo: {
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  sun: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height: '100%',
  },
});




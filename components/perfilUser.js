
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    StatusBar,
    Button,
    TextInput,
    Alert,
    FlatList
  } from 'react-native';
  
  import React from 'react';

  export default class PerfilUser extends React.Component {
    state ={
        object:[],
    }

    perfilUser = async() =>{
        try {
            const response = await 
            fetch('http://10.67.168.146:3000/usuario-buscar');
            const data = await response.json();
      
            if (data) {
              console.log(data);
              this.setState({
                object: data,
              });
            } else {
              console.warn('Dados não encontrados.');
            }
          } catch (error) {
            console.error('Erro na requisição:', error);
          }
        }
    render(){
    
        const { adress}  = this.props;
        return(
        <View>
            <Button
            title='usuario'
            onPress={()=> this.perfilUser()}
            />

<FlatList
          data={this.state.object}
          keyExtractor={(item) => item.idUser.toString()}
          renderItem={({ item }) => (
            <View style={{ marginTop: 20 }}>
              <Text> email: </Text>
              
              <Text> email: {item.email}</Text>
              
              <Text> nome: {item.name}</Text>

              
            </View>
            
          )}
        />
        <View>
                <Text>Endereços:</Text>
                </View>

               <FlatList
          data={adress}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginTop: 20 }}>
              <Text> id: {item.id}</Text>
              <Text> cep: {item.cep}</Text>
              <Text> estado: {item.uf}</Text>
              <Text> municipio: {item.municipio}</Text>
              <Text> bairro: {item.bairro}</Text>
              <Text> rua: {item.logradouro}</Text>
              <Text> numero: {item.numero}</Text>
              <View
                style={{ width: 300, height: 1, backgroundColor: 'black' }}
              ></View>

        </View>
                  )}
        />
</View>
      );
    }
}
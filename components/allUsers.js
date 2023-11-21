import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  FlatList,
  Button,
  ScrollView,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      object: [],
    };
  }

  getUsers = async () => {
    fetch(' exp://192.168.1.64:8081/getAllUsers')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          object: data,
        });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <ScrollView>
        <Text>Usuários:</Text>
        <Text>Teste</Text>
        <FlatList
          data={this.state.object}
          keyExtractor={(item) => item.idUser.toString()}
          renderItem={({ item }) => (
            <View style={{ marginTop: 20 }}>
              
              <Text> id: {item.idUser}</Text>
              <Text> email: {item.email}</Text>
              <Text> senha: {item.password}</Text>
              <Text>nome: {item.name}</Text>
              <Text>sexo: {item.sexo}</Text>
              <Text>Data de Nascimento: {item.dataNasc}</Text>
              <View
                style={{ width: 300, height: 1, backgroundColor: 'black' }}
              ></View>
            </View>
          )}
        />
      </ScrollView>
    );
  }
}

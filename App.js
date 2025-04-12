// Importa componentes de navegação e React Native
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'; //criação do Drawer Navigator
import {ProductDetailScreen} from './assets/src/pages/Produto/index'

// importa icones do react native vector icons
import Feather from 'react-native-vector-icons/Feather';

// importa paginas criadas
import Routes from './assets/src/Routes/index';

// criação da constante de navegação
const Drawer = createDrawerNavigator();

export default function App() {
  return <Routes />;
}

const styles = StyleSheet.create({});

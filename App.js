import React from 'react'
import { View, Text, SafeAreaView } from 'react-native';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import Body from './Container/Index';
import GraphClient from './Container/config';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

const client = new ApolloClient({
  uri: 'https://dentalcityserver.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

export default function App() {
  return (

      <ApolloProvider client={GraphClient}>
        <SafeAreaView>
          <Body />
        </SafeAreaView>
      </ApolloProvider>

  )
}

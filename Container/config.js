import { ApolloClient, InMemoryCache,createHttpLink,ApolloLink, concat } from '@apollo/client';
import env from './api/env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setContext } from '@apollo/client/link/context';

const apiLink = createHttpLink({
    uri:env.url,
});
  
const authLink = setContext(async (_, { headers }) => {
const token = await AsyncStorage.getItem('token')
// console.log('token-->',token)
    return {
        headers: {
        ...headers,
        'authorization': token ? `${token}` : "",
        }
    }
});
const client = new ApolloClient({
    link: concat(authLink, apiLink),
    
    cache: new InMemoryCache()

});

export default client;

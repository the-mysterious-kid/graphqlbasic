import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import Exchange from './Exchange';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery, useMutation } from '@apollo/client';
import { EXCHANGE_RATES, LIST_EMPLOYEE, LOGIN, LIST_ROLE } from './gql';


export default function Index() {

    const [login, { data, loading, error } ] = useMutation(LOGIN);

    useEffect(() => {
        login();
        
        setToken();
        testToken();
    }, []);

    const setToken = async () => {


        await AsyncStorage.setItem('token', data.login.token);

    }

    const testToken = async() => {
        const abc = await AsyncStorage.getItem('token');

        // console.log('Token:', abc);

        // console.log("token recieved", data && JSON.stringify(data.login.token));
    }

    return (
        <View>

            <Exchange />
        </View>
    )
}

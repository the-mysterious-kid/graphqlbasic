import React, { useEffect, useState} from 'react';
import { View, Text } from 'react-native'
import { useQuery } from '@apollo/client';
import { EXCHANGE_RATES, LIST_EMPLOYEE, LOGIN, LIST_ROLE } from './gql';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ExchangeRates() {
   
    const [role, setRole] = useState([]);

    const {loading, error, data} = useQuery(LIST_ROLE, {
        onCompleted:(res) =>{
            setRole(data.listRole);
        }
    });

    useEffect( () => {
        
        setToken();
        
    }, [])

    const setToken = async () => {
        const abc = await AsyncStorage.getItem('token');
        // console.log("login token", abc );
    }

    // console.log("Data", data && JSON.stringify(data.listRole));

    console.log("hey there", role);

    return (
<>
        {role.map((item) => {
            return(
                <View>
                <Text style={{padding: 5, fontSize: 18}}>{item.name}</Text>
                </View>
            )
        })}
</>
    )

}

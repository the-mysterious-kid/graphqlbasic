import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import { useQuery } from '@apollo/client';
import { LIST_ROLE, LIST_AGENCY } from './gql';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '@react-navigation/native';


export default function ExchangeRates() {


    // const [role, setRole] = useState([]);

    // const { loading, error, data, called } = useQuery(LIST_ROLE, {
    //     onCompleted: (res) => {
    //         setRole(data.listRole);
    //     }
    // });

    const [agency, SetAgency] = useState([]);

    const { loading, error, data, called } = useQuery(LIST_AGENCY, {
        onCompleted: (res) => {
            SetAgency(data.listAgency.data);
        }
    });

    console.log('hey', called);

    console.log("Data", data && JSON.stringify(data));

    return (
        <>
            {/* {!called && role.map((item) => {
                return (
                    <View>
                        <Text style={{ padding: 5, fontSize: 18 }}>hi there{item.name}</Text>
                    </View>
                )
            })} */}

            <View>

                <View style={styles.container}>
                    <Text style={styles.header}>Agency</Text>
                </View>

                {data === undefined ?
                    <View style={{height: '90%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>No data available to show</Text>
                    </View>

                    :

                    <ScrollView style={{ height: '100%' }}>

                        {agency.map((item) => {
                            return (
                                <List item={item} />
                                // <Text>{item.agencyName}</Text>
                            )
                        })}
                    </ScrollView>
                }
            </View>
        </>
    )

}

function List(props) {
    // console.log(props.item);
    const { colors } = useTheme();

    return (
        <View style={styles.AgencyContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                <View style={{ backgroundColor: '#fff', borderRadius: 200, }}>
                    <Image source={{ uri: props.item.logo }} style={{ height: 60, width: 60, margin: 15, backgroundColor: '#fff' }}
                        resizeMode={'contain'}
                    />
                </View>
                <View>
                    <Text style={styles.AName}>
                        {props.item.agencyName}
                    </Text>

                    <Text style={styles.ANumber}>
                        {props.item.phone}
                    </Text>
                </View>
            </View>

            <Text style={[{ marginVertical: 10, fontSize: 14, color: colors.text }]}>Contact Info</Text>

            <Text style={{ fontSize: 18 }}>{props.item.contactPerson.firstName} {props.item.contactPerson.lastName}</Text>
            <Text style={styles.subList}>Survey: {props.item.surveyCount}</Text>
            <Text style={styles.subList}>Employee: {props.item.employeeCount}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        alignItems: 'center'
    },
    header: {
        fontSize: 20,
        padding: 20,
        color: '#fff'
    },
    AgencyContainer: {
        backgroundColor: '#acacac',
        alignSelf: 'center',
        padding: 15,
        marginTop: 20,
        width: '85%'
    },
    AName: {
        fontSize: 22
    },
    ANumber: {

    },
    subList: {
        marginTop: 10
    }
})

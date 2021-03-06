
import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Explorepage from '../explore/explore.page'
import Profile from '../profile/profile'
import MyTrips from '../mytrips/mytrips.page'
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons'
import FIcon from 'react-native-vector-icons/Feather'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, ImageBackground } from 'react-native'
var { height, width } = Dimensions.get('window');
import * as Animatable from 'react-native-animatable';



const TabNavigator = createMaterialTopTabNavigator({

    ExploreActivity: {
        screen: Explorepage,
        navigationOptions: {
            header: null,
            title: 'Upcoming',
            tabBarIcon: ({ tintColor, focused }) => {

                focused ? console.log('Yay') : null

                return (
                    <View style={{ alignItems: 'center', justifyContent: 'space-around' }}>
                        <FIcon name="search" size={20} color='white' />
                        <Text style={[styles.name, { color: tintColor }, { marginTop: 5 }]}>Explore</Text>
                    </View>
                )
            }
        }
    },
    TripActivity: {
        screen: MyTrips,
        navigationOptions: {
            header: null,
            title: 'Finished',
            tabBarIcon: ({ tintColor, focused }) => {
                focused ? console.log('Fine') : null
                return (

                    <View>

                        <View style={styles.tab}>
                            {focused ?
                                <Animatable.View
                                    animation="bounceInUp"
                                    duration={1000}
                                    easing="ease-out">
                                    <TouchableOpacity style={{
                                        width: "130%", height: 35,
                                        backgroundColor: 'blue', borderRadius: 25,
                                        position: 'absolute'
                                    }} />

                                </Animatable.View>
                                : null}
                            <View style={{ alignItems: 'center', justifyContent: 'space-around' }}>
                                <FIcon name="heart" size={20} color='white' style={{ marginRight: 15 }} />
                                <Text style={[styles.name, { color: tintColor },
                                { marginTop: 5 },
                                { fontWeight: 'bold', fontSize: 13 }]}>Trips</Text>
                            </View>
                        </View>
                    </View>
                )
            }
        }
    },
    ProfileActivity: {
        screen: Profile,
        navigationOptions: {
            header: true,
            title: 'Favourites',
            tabBarIcon: ({ tintColor, focused }) => {

                focused ? console.log('Yay') : null

                return (
                    <View style={{ alignItems: 'center', justifyContent: 'space-around' }}>
                        <FIcon name="user" size={20} color='white' />
                        <Text style={[styles.name, { color: tintColor }, { marginTop: 5 }]}>Profile</Text>
                    </View>
                )
            }
        }
    },
},
    {
        initialRouteName: 'ExploreActivity',
        tabBarOptions: {
            activeTintColor: '#61cec7',
            inactiveTintColor: 'gray',
            textTransform:'lowercase',
            showLabel: true,
            style: {
                height: 60,
                backgroundColor: 'white'
            },
            labelStyle: {
                fontSize: 12,
                fontFamily: 'Abel-Regular',
            },
            style: {
                backgroundColor: '#F3F4F5',

                borderRadius: 50,
                marginLeft: 20,
                marginRight: 20,
                marginTop: 40,
                marginBottom:40
                
            },
            indicatorStyle: {
                backgroundColor: 'transparent'
            }
        }
    },
    // {
    //     initialRouteName: 'FilterActivity',
    //     tabBarOptions: {
    //         activeTintColor: '#0F9D58',
    //         inactiveTintColor: '#fff',
    //         showLabel: false,
    //         style: {
    //             height: 60,
    //             backgroundColor: '#485155'
    //         },
    //         labelStyle: {
    //             fontSize: 12,
    //             fontFamily: 'Abel-Regular'
    //         }
    //     }
    // }
)


const styles = StyleSheet.create({
    tab: {
        flexDirection: 'row',
        // backgroundColor: 'blue',
        // borderRadius:25

    },
    tab2: {
        flexDirection: 'row',
        marginLeft: 20
        // backgroundColor: 'blue',
        // borderRadius:25

    },

})


const Container = createAppContainer(TabNavigator);
export default Container;

import {Dimensions, FlatList, StyleSheet, TouchableHighlight} from 'react-native';

import {Image, Text, View} from '../components/Themed';
import {RootStackScreenProps} from '../types';
import {useEffect, useState} from "react";
import Colors from "../constants/Colors";
import {Message, Room} from "../types/Entity";

export default function RoomMembersScreen({route, navigation}: RootStackScreenProps<'RoomMembers'>) {
    const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width)
    if (route.params === undefined) return <></>

    const room: Room = route.params as Room

    useEffect(() => {
        setWindowWidth(Dimensions.get('window').width)

        function handleResize() {
            setWindowWidth(Dimensions.get('window').width)
        }

        window.addEventListener('resize', handleResize)
    }, [])

    return (
        <View style={{
            flex: 1,
            alignItems: 'flex-start',
            backgroundColor: Colors.common.contactListBackground,
        }}>
            <FlatList
                data={room.members}
                renderItem={({item}) =>
                    <TouchableHighlight
                        style={{
                            height: 73,
                            borderStyle: 'solid',
                            borderColor: Colors.common.contactListBackgroundDark,
                            borderBottomWidth: 0.1,
                            width: windowWidth,
                        }}
                        onPress={() => {
                            const roomOfChoseMember: Room = {
                                ...room,
                                currentWriter: item
                            }
                            navigation.navigate('Chat', roomOfChoseMember)
                        }
                        }
                    >
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                        }}>
                            <View style={{
                                justifyContent: 'center',
                                paddingLeft: 17,
                                paddingRight: 9,
                                backgroundColor: Colors.common.contactListBackground,
                            }}>
                                <Image
                                    style={{
                                        width: 55,
                                        height: 55,
                                    }}
                                    source={require('../assets/images/icon.png')}/>
                            </View>
                            <View style={{
                                flex: 1,
                                paddingTop: 13,
                                backgroundColor: Colors.common.contactListBackground,
                            }}>

                                {
                                    <><Text style={{
                                        fontSize: 20,
                                        fontWeight: "bold",
                                        color: '#46474B',
                                    }}>{item.firstName}</Text>
                                        <Text style={{
                                            fontSize: 17,
                                            fontWeight: "bold",
                                            color: '#76797E',
                                        }}>{item.club}</Text>
                                    </>
                                }
                            </View>
                        </View>
                    </TouchableHighlight>
                }/>
        </View>
    );
}

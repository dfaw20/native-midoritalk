import {Dimensions, FlatList, StyleSheet, TouchableHighlight} from 'react-native';

import {Image, Text, View} from '../components/Themed';
import {RootTabScreenProps} from '../types';
import {loadRooms} from "../repository/LocalRepository";
import {useEffect, useState} from "react";
import Colors from "../constants/Colors";
import {Message, Room} from "../types/Entity";
import i18next from "i18next";

function getLastMessage(room: Room): Message {
    return room.talks
        .filter((t) => {
            return t.type === 'Message'
        })
        .at(-1) as Message
}

export default function RoomsScreen({navigation}: RootTabScreenProps<'Rooms'>) {
    const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width)
    const rooms = loadRooms()

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
                data={rooms}
                renderItem={({item}) => <TouchableHighlight style={{
                    height: 73,
                    borderStyle: 'solid',
                    borderColor: Colors.common.contactListBackgroundDark,
                    borderBottomWidth: 0.1,
                    width: windowWidth,
                }}
                onPress={() => {
                    navigation.navigate('RoomMembers', item)
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
                                }}>{getLastMessage(item).character.firstName.ja}</Text>
                                    <Text>
                                        {i18next.language}
                                    </Text>
                                    <Text style={{
                                        fontSize: 17,
                                        fontWeight: "bold",
                                        color: '#76797E',
                                    }}>{getLastMessage(item).text}</Text>
                                </>
                            }
                        </View>
                    </View>
                </TouchableHighlight>}
            />
        </View>
    );
}

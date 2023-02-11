import {Dimensions, FlatList, StyleSheet} from 'react-native';

import {Image, Text, View} from '../components/Themed';
import {RootTabScreenProps} from '../types';
import {loadRooms} from "../repository/Repository";
import {useState} from "react";
import Colors from "../constants/Colors";
import {Message, Room} from "../types/Entity";

function getLastMessage(room: Room): Message {
    return room.talks
        .filter((t) => {
            return t.type === 'Message'
        })
        .at(-1) as Message
}

export default function RoomsScreen({navigation}: RootTabScreenProps<'Rooms'>) {
    const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width)
    const [rooms, setRooms] = useState(loadRooms())

    return (
        <View style={styles.container}>
            <FlatList
                data={rooms}
                renderItem={({item}) => <View style={{width: windowWidth}}>
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
                                }}>{getLastMessage(item).character.}</Text>
                                    <Text style={{
                                        fontSize: 17,
                                        fontWeight: "bold",
                                        color: '#76797E',
                                    }}>{getLastMessage(item).text}</Text>
                                </>
                            }
                        </View>
                    </View>
                </View>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

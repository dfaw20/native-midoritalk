import {FlatList, StyleSheet} from 'react-native';

import {Image, Text, View} from './Themed';
import {Character} from "../types/Entity";

import {Dimensions} from "react-native";
import {useEffect, useState} from "react";
import Colors from "../constants/Colors";

export default function ContactList({characters}: { characters: Character[] }) {
    const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width)

    useEffect(() => {
        setWindowWidth(Dimensions.get('window').width)

        function handleResize() {
            setWindowWidth(Dimensions.get('window').width)
        }

        window.addEventListener('resize', handleResize)
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.contactFlatList}
                data={characters}
                renderItem={({item}) => <View style={{...styles.contactItem, width: windowWidth}}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                    }}>
                        <View style={{
                            justifyContent: 'center',
                            paddingLeft: 17,
                            paddingRight: 9,
                            backgroundColor: item.isSensei ?
                                Colors.common.contactListBackgroundDark :
                                Colors.common.contactListBackground,
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
                            backgroundColor: item.isSensei ?
                                Colors.common.contactListBackgroundDark :
                                Colors.common.contactListBackground,
                        }}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: "bold",
                                color: '#46474B',
                            }}>{item.firstName}</Text>
                            <Text style={{
                                fontSize: 17,
                                fontWeight: "bold",
                                color: '#76797E',
                            }}>{item.club}</Text>
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
        alignItems: 'flex-start',
        backgroundColor: Colors.common.contactListBackground,
    },
    contactFlatList: {},
    contactItem: {
        height: 73,
        borderStyle: 'solid',
        borderColor: Colors.common.contactListBackgroundDark,
        borderBottomWidth: 0.1,
    }
});

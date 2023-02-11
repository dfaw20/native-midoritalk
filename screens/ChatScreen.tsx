import {Dimensions, FlatList, StyleSheet} from 'react-native';

import {Image, Text, View} from '../components/Themed';
import i18nSetup from "../translation/TranslateSetup";
import {toText} from "../util/ViewUtil";
import i18next from "i18next";
import {useEffect, useState} from "react";
import {Room, Talk, TalkView} from "../types/Entity";
import {RootStackScreenProps} from "../types";
import Colors from "../constants/Colors";

i18nSetup().then(() => {
})

export default function ChatScreen({route}: RootStackScreenProps<'Chat'>) {
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

    function isOmitCharacter(talk: Talk, beforeTalk: Talk): boolean {
        if (talk.type === 'Message' || talk.type === 'PhotoMessage') {
            if ((beforeTalk.type === 'Message' || beforeTalk.type === 'PhotoMessage')) {
                if (beforeTalk.character.type === 'Sensei' &&
                    talk.character.type === 'Sensei') {
                    return true
                }

                if (beforeTalk.character.type === 'Student' &&
                    talk.character.type === 'Student') {

                    if (beforeTalk.character.id === talk.character.id) {
                        return true
                    }
                }
            }
        }

        return false
    }

    function getBeforeTalk(talk: Talk, index: number, talks: Talk[]): Talk | null {
        const beforeIndex = index - 1;
        if (beforeIndex < 0) return null
        return talks[beforeIndex]
    }

    function toTalkViews(talks: Talk[]): TalkView[] {
        return talks.map((talk, index) => {
            const beforeTalk = getBeforeTalk(talk, index, talks)
            if (beforeTalk === null) {
                return {
                    talk: talk,
                    omitCharacter: false
                }
            }

            return {
                talk: talk,
                omitCharacter: isOmitCharacter(talk, beforeTalk)
            }
        })
    }

    function showTalk(talkView: TalkView): JSX.Element {
        switch (talkView.talk.type) {
            case "Message":
                if (talkView.omitCharacter) {
                    return <>{talkView.talk.text}</>
                } else {
                    return <>
                        <Image
                            style={{
                                width: 55,
                                height: 55,
                            }}
                            source={require('../assets/images/icon.png')}/>
                        {talkView.talk.character.firstName}
                        {talkView.talk.text}
                    </>
                }
            case "PhotoMessage":
                if (talkView.omitCharacter) {
                    return <>
                        <Image
                            style={{
                                width: 55,
                                height: 55,
                            }}
                            source={require('../assets/images/favicon.png')}/>
                    </>
                } else {
                    return <>
                        <Image
                            style={{
                                width: 55,
                                height: 55,
                            }}
                            source={require('../assets/images/icon.png')}/>
                        {talkView.talk.character.firstName}
                        <Image
                            style={{
                                width: 55,
                                height: 55,
                            }}
                            source={require('../assets/images/favicon.png')}/>
                    </>
                }
            case "BondStory":
                return <>
                    {talkView.talk.character.firstName + toText(i18next.t('bond_story_with_student'))}
                </>
            case "Reply":
                return <>
                    {talkView.talk.text}
                </>
        }

        return <></>
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={toTalkViews(room.talks)}
                renderItem={({item}) => <View style={{
                    height: 73,
                    borderStyle: 'solid',
                    borderColor: Colors.common.contactListBackgroundDark,
                    borderBottomWidth: 0.1,
                    width: windowWidth
                }}>
                    {showTalk(item,)}
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

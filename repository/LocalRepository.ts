import {BondStory, Character, Message, PhotoMessage, Reply, Room, Student, Talk, TransText,} from "../types/Entity";
import {CharacterLocalJson, TranslationTextLocalJson} from "../local_json/JsonTypes";

export function loadCharacters(): Character[] {
    return []
}

export function loadRooms(): Room[] {
    const characters = loadCharacters();
    const juri: Character = characters.find((c) => {
        if (c.type === 'Student') return c.firstName.ja === 'ジュリ'
    })!
    const huka: Character = characters.find((c) => {
        if (c.type === 'Student') return c.firstName.ja === 'フウカ'
    })!
    const sensei: Character = characters.find((c) => {
        if (c.type === 'Sensei') return c
    })!

    const textMessage1: Message = {
        type: "Message",
        text: "おはよう",
        character: sensei,
    }
    const textMessage2: Message = {
        type: "Message",
        text: "こんにちは",
        character: huka,
    }
    const photo: PhotoMessage = {
        type: "PhotoMessage",
        character: juri,
    }
    const textMessage3: Message = {
        type: "Message",
        text: "こんばんは",
        character: juri,
    }

    const bondStory: BondStory = {
        type: "BondStory",
        character: huka
    }

    const reply: Reply = {
        type: "Reply",
        text: "朝ごはん食べた？"
    }

    const talks: Talk[] = [
        textMessage1,
        reply,
        textMessage2,
        photo,
        photo,
        photo,
        photo,
        photo,
        textMessage3,
        textMessage3,
        bondStory,
        textMessage3,
        photo,
        textMessage3,
        bondStory,
        bondStory,
        reply
    ]

    const roomA: Room = {
        talks: talks,
        badgeCount: 3,
        members: characters,
        currentAccount: juri,
    }

    return [roomA, roomA]
}
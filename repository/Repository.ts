import {
    BondStory,
    Character,
    Message,
    MessagesSerial,
    Photo,
    Reply,
    Student,
    Room,
    TextMessage,
    Talk,
} from "../types/Entity";

export function loadCharacters(): Character[] {
    return [
        {
            type: "Sensei",
            name: '先生',
        },
        {
            type: "Student",
            lastName: '牛牧',
            firstName: 'ジュリ',
            club: '給食部',
            school: 'ゲヘナ学園',
        },
        {
            type: "Student",
            lastName: '愛清',
            firstName: 'フウカ',
            club: '給食部',
            school: 'ゲヘナ学園',
        },
    ]
}

export function loadRooms(): Room[] {
    const characters = loadCharacters();
    const juri: Character = characters.find((c) => {
        if (c.type === 'Student') return c.firstName === 'ジュリ'
    })!
    const huka: Character = characters.find((c) => {
        if (c.type === 'Student') return c.firstName === 'フウカ'
    })!
    const sensei: Character = characters.find((c) => {
        if (c.type === 'Sensei') return c
    })!

    const textMessage1: TextMessage = {
        type: "TextMessage",
        text: "おはよう"
    }
    const textMessage2: TextMessage = {
        type: "TextMessage",
        text: "こんにちは"
    }
    const photo: Photo = {
        type: "Photo",
    }
    const textMessage3: TextMessage = {
        type: "TextMessage",
        text: "こんばんは"
    }

    const messages: Message[] = [
        textMessage1,
        textMessage2,
        photo,
        textMessage3,
    ]

    const serial: MessagesSerial = {
        type: "MessagesSerial",
        messages: messages,
        speaker: huka
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
        serial,
        bondStory,
        reply
    ]

    const roomA: Room = {
        talks: talks,
        badgeCount: 3,
        characters: characters,
        currentEditor: juri,
    }

    return [roomA]
}
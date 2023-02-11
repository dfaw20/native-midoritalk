import {
    BondStory,
    Character,
    Message,
    Reply,
    Student,
    Room,
    Talk, PhotoMessage,
} from "../types/Entity";

export function loadCharacters(): Character[] {
    return [
        {
            type: "Sensei",
            firstName: '先生',
            club: '連邦捜査部シャーレ'
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

    const textMessage1: Message = {
        type: "Message",
        text: "おはよう",
        character: juri,
    }
    const textMessage2: Message = {
        type: "Message",
        text: "こんにちは",
        character: juri,
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
        textMessage2,
        photo,
        textMessage3,
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
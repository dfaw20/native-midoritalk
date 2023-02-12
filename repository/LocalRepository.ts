import {BondStory, Character, Message, PhotoMessage, Reply, Room, Student, Talk, TransText,} from "../types/Entity";

import clubsJsonFile from '../local_json/clubs.json'
import schoolsJsonFile from '../local_json/schools.json'
import charactersJsonFile from '../local_json/characters.json'
import {CharacterLocalJson, ClubLocalJson, SchoolLocalJson, TranslationTextLocalJson} from "../local_json/JsonTypes";

const characterJson = charactersJsonFile as CharacterLocalJson[]
const schoolJson = schoolsJsonFile as SchoolLocalJson
const clubJson = clubsJsonFile as ClubLocalJson

function toTransText(localJson: TranslationTextLocalJson): TransText {
    return {
        ja: localJson.ja,
        en: localJson.en,
        ko: localJson.ko,
        zhHant: localJson["zh-hant"],
        zhHans: localJson["zh-hans"],
    }
}

function toClubName(localChara: CharacterLocalJson): TransText {
    if (localChara.club === null ||
        localChara.club === undefined ||
        localChara.club.length === 0
    ) return {
        ja: '',
        en: '',
        ko: '',
        zhHant: '',
        zhHans: ''
    }
    const firstClubId = localChara.club[0]

    const clubText = clubJson[firstClubId];
    return toTransText(clubText)
}

function toSchoolName(localChara: CharacterLocalJson): TransText {
    if (localChara.school === null || localChara.school === undefined) return {
        ja: '',
        en: '',
        ko: '',
        zhHant: '',
        zhHans: ''
    }
    return toTransText(schoolJson[localChara.school])
}

export function loadCharacters(): Character[] {
    return characterJson.map((localChara) => {
        const student: Student = {
            student_id: localChara.id,
            type: "Student",
            lastName: toTransText(localChara.name.last_name),
            firstName: toTransText(localChara.name.first_name),
            club: toClubName(localChara),
            school: toSchoolName(localChara)
        }

        return student
    })
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
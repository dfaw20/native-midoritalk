export type Character = Student | Sensei

export type Language = 'ja' | 'en' | 'ko' | 'zhHant' | 'zhHans'

export interface TransText {
    ja: string | null | undefined
    en: string | null | undefined
    ko: string | null | undefined
    'zhHant': string | null | undefined
    'zhHans': string | null | undefined
}

export interface Student {
    student_id: string,
    type: "Student"
    lastName: TransText;
    firstName: TransText;
    club: TransText;
    school: TransText;
}

export interface Sensei {
    type: "Sensei"
    firstName: TransText;
    club: TransText;
}

export interface Room {
    talks: Talk[];
    badgeCount: number;
    members: Character[];
    currentAccount: Character | null;
}

export type Talk = Message | PhotoMessage | BondStory | Reply;

export interface TalkView {
    talk: Talk,
    omitCharacter: boolean,
}

export interface Message {
    type: "Message"
    text: string
    character: Character
}

export interface PhotoMessage {
    type: "PhotoMessage"
    character: Character
}

export interface BondStory {
    type: "BondStory"
    character: Character
}

export interface Reply {
    type: "Reply"
    text: string;
}


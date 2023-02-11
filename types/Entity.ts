export type Character = Student | Sensei

export interface Student {
    id: number,
    type: "Student"
    lastName: string;
    firstName: string;
    club: string;
    school: string;
}

export interface Sensei {
    type: "Sensei"
    firstName: string;
    club: string;
}

export interface Room {
    talks: Talk[];
    badgeCount: number;
    members: Character[];
    currentWriter: Character | null;
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


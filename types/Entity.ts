export type Character = Student | Sensei

export interface Student {
    type: "Student"
    lastName: string;
    firstName: string;
    club: string;
    school: string;
}

export interface Sensei {
    type: "Sensei"
    name: string
}

export interface Room {
    talks: Talk[];
    badgeCount: number;
    characters: Character[];
    currentEditor: Character;
}

export type Talk = MessagesSerial | BondStory | Reply;

export interface MessagesSerial {
    type: "MessagesSerial"
    messages: Message[];
    speaker: Character;
}

export type Message = TextMessage | Photo

export interface TextMessage {
    type: "TextMessage"
    text: string;
}

export interface Photo {
    type: "Photo"
}

export interface BondStory {
    type: "BondStory"
    character: Character
}

export interface Reply {
    type: "Reply"
    text: string;
}


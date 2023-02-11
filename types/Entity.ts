export interface Character {
    lastName: string;
    firstName: string;
    club: string;
    school: string;
    isSensei: boolean;
}

export interface Room {
    events: Event[];
    badgeCount: number;
    characters: Character[];
    speaker: Character;
}

export interface Event {
    item: MessagesSerial | BondStory | Reply;
}

export interface MessagesSerial {
    messages: Message[];
    speaker: Character;
}

export interface Message {
    item: TextMessage | Photo;
}


export interface TextMessage {
    text: string;
}

export interface Photo {
}

export interface BondStory {
    character: Character
}

export interface Reply {
    text: string;
}


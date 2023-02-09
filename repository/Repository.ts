import {Character} from "../types/Entity";

export function loadCharacters(): Character[] {
    return [
        {
            lastName: '',
            firstName: '先生',
            club: '連邦捜査部シャーレ',
            school: '',
            isTeacher: true,
        },
        {
            lastName: '牛牧',
            firstName: 'ジュリ',
            club: '給食部',
            school: 'ゲヘナ学園',
            isTeacher: false,
        },
        {
            lastName: '愛清',
            firstName: 'フウカ',
            club: '給食部',
            school: 'ゲヘナ学園',
            isTeacher: false,
        },
    ]
}
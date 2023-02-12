import i18next from 'i18next';

export default async () => i18next.init({
    lng: 'ja',
    debug: true,
    resources: {
        ja: {
            translation: {
                "site_name": "MidoriTalk",
                "contact": "連絡先",
                "chat": "チャット",
                "general": "全般",
                "bond_story_with_student": "の絆ストーリーへ",
                "choice_account": "アカウントを選ぶ",
                "as_login": "としてログイン中",
            }
        }
    }}
);
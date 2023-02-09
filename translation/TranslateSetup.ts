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
            }
        }
    }}
);
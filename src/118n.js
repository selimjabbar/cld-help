import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import en from "../public/locales/en/translation.json"
import ar from "../public/locales/ar/translation.json"


i18next.use(initReactI18next).use(LanguageDetector).use(Backend).init({
    // supportedLngs: ['ar'],
    fallbackLng: 'en',
    // backend: {
    //     loadPath: `${window.location.pathname}locales/{{lng}}/{{ns}}.json`
    // },
    resources:{
        "en": {translation: en},
        "ar":{translation: ar}
    },
    debug: true, // Konsolda detaylı hata mesajlarını görebilirsiniz
    // detection: {
    //     order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'], // Dil algılama öncelikleri
    //     caches: ['cookie', 'localStorage'], // Tarayıcıda dili saklama yöntemi
    // },
    // fallbackLng: "en",
});

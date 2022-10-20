import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

import enUsLang from './locales/en-US.json'
import zhCnLang from './locales/zh-CN.json'
import zhTwLang from './locales/zh-TW.json'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      'en-US': {
        translation: enUsLang,
      },
      'zh-TW': {
        translation: zhTwLang,
      },
      'zh-CN': {
        translation: zhCnLang,
      },
    },
    lng: 'en-US', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en-US',

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  })

import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import zh from './lang/zh.json';
import en from './lang/en.json';
import jp from './lang/jp.json';
import kr from './lang/kr.json';

i18n.use(initReactI18next).init({
	resources: {
		zh: {
			translation: zh,
		},
		en: {
			translation: en,
		},
		jp: {
			translation: jp,
		},
		kr: {
			translation: kr,
		},
	},
	debug: false,
	fallbackLng: 'zh',
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;

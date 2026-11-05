import { watch } from 'vue'
import { createI18n } from 'vue-i18n'
import en from '@/assets/locales/en.json'
import fr from '@/assets/locales/fr.json'

const stored = localStorage.getItem('locale')
const initial = stored === 'en' || stored === 'fr' ? stored : navigator.language.startsWith('en') ? 'en' : 'fr'
document.documentElement.lang = initial

export const i18n = createI18n({
	legacy: false,
	locale: initial,
	fallbackLocale: 'en',
	messages: { fr, en },
})

const syncTitle = () => {
	document.title = i18n.global.t('views.main.ui.meta')
	document.querySelector('meta[name="description"]')?.setAttribute('content', i18n.global.t('views.main.ui.metaDescription'))
	document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title)
}
syncTitle()
watch(i18n.global.locale, syncTitle)

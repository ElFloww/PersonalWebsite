import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const Vuetify = createVuetify({
	components,
	directives,
	theme: {
		defaultTheme: 'flora',
		themes: {
			flora: {
				dark: false,
				colors: {
					primary: '#4a8f68',
					primaryLight: '#74b291',
					primarySoft: '#e8f4ee',
					surface: '#ffffff',
					background: '#fbfdfb',
					ink: '#0f1d14',
					muted: '#f7faf8',
					line: '#e3efe7',
				},
			},
			floraDark: {
				dark: true,
				colors: {
					primary: '#5cb884',
					primaryLight: '#74b291',
					primarySoft: '#1a2e22',
					surface: '#121212',
					background: '#0a0a0a',
					ink: '#e0e0e0',
					muted: '#1e1e1e',
					line: '#2c2c2c',
				},
			},
		},
	},
})

export default Vuetify

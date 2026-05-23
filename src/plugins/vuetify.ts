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
		},
	},
})

export default Vuetify

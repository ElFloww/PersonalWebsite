import PageNameEnum from '@/core/types/enums/pageNameEnum.ts'
import { i18n } from '../plugins/i18n'

import {
	createRouter,
	createWebHistory,
} from 'vue-router'

const { t } = i18n.global

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: PageNameEnum.MAIN,
			component: () =>
				import(/* webpackChunkName: "main" */ '@/views/Main.vue'),
			meta: {
				name: t('routes.main'),
			},
		},
		{
			path: '/:pathMatch(.*)*',
			name: PageNameEnum.NOTFOUND || 'NotFound',
			redirect: '/',
		},
	],
})

export default router

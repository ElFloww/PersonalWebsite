import PageNameEnum from '@/core/types/enums/pageNameEnum.ts'
import { i18n } from '../plugins/i18n'
import { trackVisit } from '@/services/visitTracker'

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
			path: '/a9f3k2',
			name: PageNameEnum.ADMIN_VISITS,
			component: () =>
				import(/* webpackChunkName: "admin" */ '@/views/AdminVisits.vue'),
			meta: {
				name: 'Admin',
			},
		},
		{
			path: '/:pathMatch(.*)*',
			name: PageNameEnum.NOTFOUND || 'NotFound',
			redirect: '/',
		},
	],
})

// Track visit on first navigation
router.afterEach(() => {
	trackVisit()
})

export default router


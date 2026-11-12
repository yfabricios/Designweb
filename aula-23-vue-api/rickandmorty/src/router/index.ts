import RickAndMortyView from '@/views/RickAndMortyView.vue'
import CepView from '@/views/CepView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'rickandmorty',
			component: RickAndMortyView
		},
		{
			path: '/localidades',
			name: 'localidades',
			component: CepView
		}

	],
})

export default router

import asyncComponent from './modules/AsyncComponent';

const routes = {
	REGISTER: {
		path: '/',
		component: asyncComponent(() => import('../components/views/Register')),
	},
	CATEGORIES: {
		path: '/categories',
		component: asyncComponent(() =>
			import('../components/views/Categories'),
		),
	},
	QUIZ: {
		path: '/quiz/:category/:difficulty',
		component: asyncComponent(() =>
			import('../components/views/Quiz'),
		),
	},
	SUCCESS_QUIZ: {
		path: '/finish',
		component: asyncComponent(() =>
			import('../components/views/FinishQuiz'),
		),
	},
	// ERROR_404: {
	// 	path: '/404',
	// 	component: asyncComponent(() =>
	// 		import('../components/views/Errors/Error404'),
	// 	),
	// },
};
export default routes;
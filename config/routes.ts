export default [
	{ path: '/', component: 'index' },
	{ path: '/plan', component: 'plan' },
	{ path: '/budget', component: 'budget' },
	{ 
	  path: '/admin', 
	  component: 'admin',
	  routes: [
		{ path: '/admin', component: 'admin/index' },
		{ path: '/admin/destinations', component: 'admin/destinations' },
		{ path: '/admin/statistics', component: 'admin/statistics' }
	  ]
	},
	{ path: '*', component: '404' }
  ];
  
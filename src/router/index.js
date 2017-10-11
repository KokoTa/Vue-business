import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import detail from '@/pages/detail'
import mmqlz from '@/components/detail/mmqlz'
import djsy from '@/components/detail/djsy'
import zewg from '@/components/detail/zewg'
import sq from '@/components/detail/sq'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
    	path: '/detail',
    	name: 'detail',
    	component: detail,
    	redirect: '/detail/mmqlz',
    	children: [
    		{
    			path: 'mmqlz',
                name: 'mmqlz',
    			component: mmqlz,
    		},
    		{
    			path: 'djsy',
                name: 'djsy',
    			component: djsy,
    		},
    		{
    			path: 'zewg',
                name: 'zewg',
    			component: zewg,
    		},
    		{
    			path: 'sq',
                name: 'sq',
    			component: sq,
    		}
    	]
    }
  ]
})

import Vue from 'vue';
import Router from 'vue-router';
import fourofour from '@/components/404';
import Home from '@/components/Home';

import About from '@/components/articles/About';
import DungeonRPG from '@/components/articles/DungeonRPG';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/DungeonRPG',
      name: 'Dungeon RPG',
      component: DungeonRPG,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '*',
      name: 'work in progress',
      component: fourofour,
    },
  ],
});

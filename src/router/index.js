import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
});

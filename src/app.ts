import Vue from 'vue';
import VueRouter from 'vue-router';

import './scss/index.scss';

import App from './components/app.vue';

import ThreadPageComponent from './components/thread-page.vue';
import BoardPageComponent from './components/board-page.vue';
import ErrorPageComponent from './components/error-page.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/threads/:threadId', component: ThreadPageComponent, props: true },
    { path: '/', component: BoardPageComponent },
    { path: '*', component: ErrorPageComponent, props: {
      message: 'Page not found',
    } },
  ],
});

document.addEventListener('DOMContentLoaded', e => {
  // Setup Vue root component.
  const app = new Vue({
    el: '#app',
    router,
    render: h => h(App),
  });
});

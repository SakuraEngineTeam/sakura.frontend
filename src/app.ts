import Vue from 'vue';

import App from './components/app.vue';

import './scss/index.scss';

document.addEventListener('DOMContentLoaded', e => {
  // Setup Vue root component.
  const app = new Vue({
    el: '#app',
    render: h => h(App),
  });
});

import Vue from 'vue';

import PostComponent from './post.vue';

export default Vue.extend({
  props: ['thread'],
  computed: {
    date(): string {
      const timestamp = Date.parse(this.thread.createdAt);
      return new Date(timestamp).toLocaleString('ru');
    },
  },
  components: {
    'x-post': PostComponent,
  },
});

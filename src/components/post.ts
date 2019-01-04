import Vue from 'vue';

export default Vue.extend({
  props: ['post'],
  computed: {
    date(): string {
      const timestamp = Date.parse(this.post.createdAt);
      return new Date(timestamp).toLocaleString('ru');
    },
  },
});

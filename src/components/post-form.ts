import Vue from 'vue';

import { Api } from '../ts';
import eventBus from '../ts/eventBus';

export default Vue.extend({
  props: ['threadId'],
  data() {
    return {
      message: '',
    };
  },
  methods: {
    resetForm() {
      this.message = '';
    },
    async onSubmit() {
      if (this.threadId) {
        const id = await Api.createPost(this.threadId, this.message);
        eventBus.$emit('post_created', {id});
      } else {
        const id = await Api.createThread(this.message);
        eventBus.$emit('thread_created', {id});
      }

      this.resetForm();
    },
  },
});

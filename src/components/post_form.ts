import Vue from 'vue';

import {Api} from '../ts';
import eventBus from '../ts/eventBus';

export default Vue.extend({
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
      await Api.createPost(this.message);

      this.resetForm();

      eventBus.$emit('post_created');
    },
  },
});

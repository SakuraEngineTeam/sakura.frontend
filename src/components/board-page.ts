import Vue from 'vue';

import { Api, ThreadPreview } from '../ts';
import eventBus from '../ts/eventBus';

import PostFormComponent from './post-form.vue';
import ThreadPreviewComponent from './thread-preview.vue';

export default Vue.extend({
  data() {
    return {
      threads: new Array<ThreadPreview>(),
    };
  },
  async created() {
    // Navigate to thread page if thread created.
    eventBus.$on('thread_created', ({ id }: { id: string }) =>
      this.$router.push(`/threads/${id}`));

    this.threads = await Api.getThreadPreviews();
  },
  components: {
    'x-post-form': PostFormComponent,
    'x-thread-preview': ThreadPreviewComponent,
  },
});

import Vue from 'vue';

import { Api, Post } from '../ts';
import eventBus from '../ts/eventBus';

import PostComponent from './post.vue';
import PostFormComponent from './post-form.vue';

export default Vue.extend({
  props: ['threadId'],
  data() {
    return {
      posts: new Array<Post>(),
    };
  },
  created() {
    this.updateThread();
    eventBus.$on('post_created', () => this.updateThread());
  },
  methods: {
    async updateThread() {
      // TODO: load only new posts.
      const posts = await Api.getThreadPosts(this.threadId);
      this.posts = posts.reverse();
    },
  },
  computed: {
    opPost(): Post {
      return this.posts[0];
    },
  },
  components: {
    'x-post': PostComponent,
    'x-post-form': PostFormComponent,
  },
});

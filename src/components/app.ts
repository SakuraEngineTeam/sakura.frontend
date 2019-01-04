import Vue from 'vue';

import {Api, Post} from "../ts";
import eventBus from '../ts/eventBus';

import PostComponent from './post.vue';
import PostFormComponent from './post_form.vue';

export default Vue.extend({
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
      this.posts = await Api.getPosts();
    },
  },
  components: {
    'x-post': PostComponent,
    'x-post-form': PostFormComponent,
  }
});

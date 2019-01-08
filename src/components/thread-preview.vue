<template>
  <section class="thread-preview">
    <div class="thread-preview__header">
      <span class="thread-preview__date">{{ date }}</span>
      <span class="thread-preview__id">№{{ thread.viewId }}</span>
      <router-link class="thread-preview__reply-link link"
        v-bind:to="'/threads/' + thread.threadId">Reply</router-link>
    </div>

    <div class="thread-preview__content">
      <div class="thread-preview__message">{{ thread.message }}</div>
    </div>

    <x-post class="thread-preview__post"
      v-for="post in thread.posts" v-if="post.id != thread.id"
      v-bind:key="post.id" v-bind:post="post">
    </x-post>
  </section>
</template>

<script lang="ts" src="./thread-preview.ts"></script>
<style lang="scss" src="./thread-preview.scss"></style>

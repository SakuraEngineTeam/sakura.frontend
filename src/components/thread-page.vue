<template>
  <div class="app">
    <header class="app__header">
      <h1 class="app__title">
        <router-link class="app__title-link link" to="/">Sakura</router-link>
      </h1>
    </header>

    <main class="app__main">
      <article class="app__thread-page thread-page">
        <h2 class="thread-page__title" v-if="opPost">Thread №{{ opPost.viewId }}</h2>

        <x-post class="thread-page__post" v-for="post in posts"
          v-bind:key="post.id" v-bind:post="post">
        </x-post>
      </article>

      <div class="app__post-area">
        <x-post-form class="app__post-form"
          v-bind:threadId="threadId"></x-post-form>
      </div>
    </main>

    <footer class="app__footer">
    </footer>
  </div>
</template>

<script lang="ts" src="./thread-page.ts"></script>
<style lang="scss" src="./thread-page.scss"></style>

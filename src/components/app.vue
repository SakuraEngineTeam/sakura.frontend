<template>
  <div class="app">
    <header class="app__header">
      <h1>Sakura</h1>
    </header>

    <main class="app__main">
      <article class="app__thread">
        <x-post class="app__post" v-for="post in posts" v-bind:key="post.id" v-bind:post="post"></x-post>
      </article>

      <div class="app__post-area">
        <x-post-form class="app__post-form"></x-post-form>
      </div>
    </main>

    <footer class="app__footer">
    </footer>
  </div>
</template>

<script lang="ts" src="./app.ts"></script>
<style lang="scss" src="./app.scss"></style>

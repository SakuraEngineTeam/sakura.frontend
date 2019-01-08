<template>
  <div class="app">
    <header class="app__header">
      <h1 class="app__title">Sakura</h1>
    </header>

    <main class="app__main">
      <div class="app__post-area">
        <x-post-form class="app__post-form"></x-post-form>
      </div>

      <article class="app__board-page board-page">
        <x-thread-preview class="board-page__thread-preview"
          v-for="thread in threads"
          v-bind:key="thread.threadId" v-bind:thread="thread">
        </x-thread-preview>
      </article>
    </main>

    <footer class="app__footer">
    </footer>
  </div>
</template>

<script lang="ts" src="./board-page.ts"></script>
<style lang="scss" src="./board-page.scss"></style>

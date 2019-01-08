<template>
  <div class="app">
    <header class="app__header">
      <h1 class="app__title">
        <router-link class="app__title-link link" to="/">Sakura</router-link>
      </h1>
    </header>

    <main class="app__main">
      <article class="app__error-page error-page">
        <h2 class="error-page__message">{{ message }}</h2>
      </article>
    </main>

    <footer class="app__footer">
    </footer>
  </div>
</template>

<script lang="ts" src="./error-page.ts"></script>
<style lang="scss" src="./error-page.scss"></style>

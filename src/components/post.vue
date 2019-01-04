<template>
  <section class="post">
    <div class="post__header">
      <span class="post__date">{{ date }}</span>
      <span class="post__id">№{{ post.id }}</span>
    </div>

    <div class="post__content">
      <div class="post__message">{{ post.message }}</div>
    </div>
  </section>
</template>

<script lang="ts" src="./post.ts"></script>
<style lang="scss" src="./post.scss"></style>

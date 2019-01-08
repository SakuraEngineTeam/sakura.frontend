<template>
  <div class="post-form">
    <div class="post-form__header">
      <span class="post-form__title">{{
        threadId ? 'Reply to thread' : 'Create thread'
      }}</span>
    </div>

    <div class="post-form__content">
      <form v-on:submit.prevent="onSubmit">
        <div class="post-form__row">
          <textarea class="post-form__message input" name="message" placeholder="Message"
            v-model="message"></textarea>
        </div>

        <div class="post-form__row post-form__row--rigth">
          <button type="submit" class="button">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" src="./post-form.ts"></script>
<style lang="scss" src="./post-form.scss"></style>

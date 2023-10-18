<script setup>
const user = useUser();

definePageMeta({
  layout: "plain",
});
</script>

<template>
  <h1>Login</h1>
  <form @submit.prevent="user.login">
    <label for="username">username <input id="username" type="text" /></label>
    <label for="password"
      >password <input id="password" type="password"
    /></label>
    <button>Login</button>
  </form>
</template>

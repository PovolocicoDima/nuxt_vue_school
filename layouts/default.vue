<script setup>
const user = useUser();
</script>

<template>
  <nav style="display: flex; gap: 10px">
    <NuxtLink to="/" active-class="red">Home</NuxtLink>
    <NuxtLink to="/movies" active-class="red">Movies</NuxtLink>
    <NuxtLink to="https://google.com/" target="_blank" active-class="red"
      >Google</NuxtLink
    >
    <NuxtLink v-if="!user.isLoggedIn" to="/login">Login</NuxtLink>
    <a v-if="user.isLoggedIn" href="#" @click.prevent="user.isLoggedIn = false"
      >Logout</a
    >
  </nav>
  <slot />
</template>

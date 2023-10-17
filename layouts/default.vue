<template>
  <nav style="display: flex; gap: 10px">
    <NuxtLink to="/" active-class="red">Home</NuxtLink>
    <NuxtLink to="/movies" active-class="red">Movies</NuxtLink>
    <NuxtLink to="https://google.com/" target="_blank" active-class="red"
      >Google</NuxtLink
    >
    Test
  </nav>
  <slot />
</template>

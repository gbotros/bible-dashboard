<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/book">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

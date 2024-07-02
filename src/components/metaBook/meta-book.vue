<script setup lang="ts">
import { type IBibleBookMeta } from '@/data/bibleBookMeta'

defineProps<{
  book: IBibleBookMeta
}>()
</script>

<template>

  <h1> {{ book.name }} </h1>
  <h2> abbreviation: {{ book.abbreviation }} </h2>
  <h2> division: {{ book.division }} </h2>
  <h2> chronologicalOrder: {{ book.chronologicalOrder }} </h2>

  <div>
    Color : {{ book.color }}
    <div class="book-color-square" :style="{ backgroundColor: book.color }"> </div>
  </div>
</template>

<style scoped>
.book-color-square {
  min-height: 30px;
  min-width: 30px;
}
</style>

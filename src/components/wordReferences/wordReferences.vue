<script setup lang="ts">
import { MetaBibleBooksDictionary } from '@/data/bibleBookMeta'
import type { IVerse } from '@/data/iBible'

defineProps<{
  wordVerses: IVerse[]
}>()
</script>

<template>
  <div v-for="verse in wordVerses" :key="`${verse.bookName}-${verse.chapter}-${verse.verse}`" class="verse-container">
    <div class="verse-side-bar" :style="{ backgroundColor: MetaBibleBooksDictionary[verse.bookName].color() }"></div>
    <div class="verse-text">
      <div class="button book-ref">
        <RouterLink :to="{ name: 'book', params: { bookName: verse.bookName } }" class="bold">
          {{ verse.bookName }} {{ verse.chapter }}:{{ verse.verse }}
        </RouterLink>
      </div>
      <div class="text">
        {{ verse.text }}
      </div>

    </div>
  </div>
</template>

<style scoped>
.verse-container {
  display: flex;
  border: 2px solid rgba(100, 100, 100, 1);
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 5px;
  align-items: center;
}

.verse-side-bar {
  flex: 0 0 auto;
  min-height: 1px;
  width: 1rem;
  margin-right: 10px;
  align-self: stretch;
}

.verse-text {
  flex: 1;
  display: flex;
  align-items: start;
}

.book-ref {
  margin-right: 10px;
}
</style>

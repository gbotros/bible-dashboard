<script setup lang="ts">
import { MetaBibleBooksDictionary } from '@/data/bibleBookMeta'
import type { IVerse } from '@/data/iBible'

defineProps<{
  wordVerses: IVerse[]
}>()
</script>

<template>
  <div v-for="verse in wordVerses" :key="verse.text" class="verse-container">
    <div class="verse-side-bar" :style="{ backgroundColor: MetaBibleBooksDictionary[verse.bookName].color }"></div>
    <div class="verse-text">
      <div class="reference">
        <RouterLink :to="{ name: 'book', params: { bookName: verse.bookName } }">
          {{ verse.bookName }}
        </RouterLink> {{ verse.chapter }}:{{ verse.verse }}
      </div>
      <div class="text">{{ verse.text }}</div>
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
}

.verse-side-bar {
  min-height: 1px;
  width: 10px;
  margin-right: 10px;
}

.verse-text {
  flex: 1;
}

.reference {
  font-weight: bold;
}
</style>

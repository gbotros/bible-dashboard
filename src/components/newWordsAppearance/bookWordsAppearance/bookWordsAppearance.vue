<script setup lang="ts">

import { RouterLink } from "vue-router";
import type { WordsAppearanceBookModel } from "../newWordsAppearanceModel";

const props = defineProps<{
  bookWordsAppearanceModel: WordsAppearanceBookModel
}>()



</script>

<template>


  <h1>
    <div class="button book-name">
      <RouterLink :to="{ name: 'book', params: { bookName: bookWordsAppearanceModel.name } }">
        {{ bookWordsAppearanceModel.name }}
      </RouterLink>
    </div>
  </h1>

  <div v-if="bookWordsAppearanceModel.uniqueWords.length > 0">
    <h2>{{ bookWordsAppearanceModel.uniqueWords.length }} Unique Words </h2>
    <div class="words-container">
      <div v-for="wordEntry in bookWordsAppearanceModel.uniqueWords" :key="wordEntry.word" class="button">
        <RouterLink :to="{ name: 'home', params: { word: wordEntry.word } }">
          {{ wordEntry.word }} : {{ wordEntry.count }}
        </RouterLink>
      </div>
    </div>
  </div>

  <div v-if="bookWordsAppearanceModel.newWords.length > 0">
    <h2>{{ bookWordsAppearanceModel.newWords.length }} New Words </h2>
    <div class="words-container">
      <div v-for="wordEntry in bookWordsAppearanceModel.newWords" :key="wordEntry.word" class="button word">
        <RouterLink :to="{ name: 'home', params: { word: wordEntry.word } }">
          {{ wordEntry.word }} : {{ wordEntry.count }}
        </RouterLink>
      </div>
    </div>
  </div>

</template>

<style scoped>
.book {
  margin: 10px 5px;
  padding: 10px;
  border: 1px;
  border-radius: 5px;
  border-style: solid;
  border-color: var(--vt-c-white);

}

.words-container {
  display: flex;
  flex-wrap: wrap;
}

.book-name {
  text-align: start;
  background-color: var(--color-background-soft);
}
</style>

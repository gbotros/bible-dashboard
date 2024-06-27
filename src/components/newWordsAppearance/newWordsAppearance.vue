<script setup lang="ts">
import { MetaBibleBooksOrderedChronologically } from "@/data/bibleBookMeta";
import { WordsAppearanceModel } from "./newWordsAppearanceModel";

const props = defineProps<{
  newWordsAppearanceModel: WordsAppearanceModel
}>()



</script>

<template>

  <div v-for="(bookModel, bookName) in newWordsAppearanceModel.data" :key="bookName" class="book">

    <h1>{{ bookName }} {{ bookModel.uniqueWords.length + bookModel.newWords.length }}</h1>

    <div v-if="bookModel.uniqueWords.length > 0">
      <h2>{{ bookModel.uniqueWords.length }} Unique Words </h2>
      <div class="words-container">
        <span v-for="word in bookModel.uniqueWords" :key="word" class="word">
          <router-link :to="{ name: 'home', params: { word: word } }">
            {{ word }}
          </router-link>
        </span>
      </div>
    </div>

    <div v-if="bookModel.newWords.length > 0">
      <h2>{{ bookModel.newWords.length }} New Words </h2>
      <div class="words-container">
        <span v-for="word in bookModel.newWords" :key="word" class="word">
          <router-link :to="{ name: 'home', params: { word: word } }">
            {{ word }}
          </router-link>
        </span>
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

.word {
  flex: 1;
  text-align: center;
  margin: 2px;
  padding: 3px;
  border: 1px;
  border-radius: 5px;
  border-style: solid;
  border-color: var(--vt-c-black-mute);
  background-color: var(--vt-c-black);
  cursor: pointer;
}
</style>

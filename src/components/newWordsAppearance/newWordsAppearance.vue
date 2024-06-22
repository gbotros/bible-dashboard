<script setup lang="ts">
import { WordsAppearanceModel } from "./newWordsAppearanceModel";
import BookWordsAppearance from '@/components/newWordsAppearance/bookWordsAppearance/bookWordsAppearance.vue';

const props = defineProps<{
  newWordsAppearanceModel: WordsAppearanceModel
}>()



</script>

<template>

  <div v-for="(bookModel, bookName) in newWordsAppearanceModel.data" :key="bookName" class="book">
    <BookWordsAppearance :book-words-appearance-model="bookModel"></BookWordsAppearance>
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
</style>

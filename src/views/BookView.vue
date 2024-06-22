<script setup lang="ts">
import BookWordsAppearance from '@/components/newWordsAppearance/bookWordsAppearance/bookWordsAppearance.vue';
import type { BookWordsPieFactory } from '@/components/bookWordsPie/bookWordPieFactory';
import BookWordsPie from '@/components/bookWordsPie/bookWordsPie.vue';
import MetaBook from '@/components/metaBook/meta-book.vue';
import type { NewWordsAppearanceFactory } from '@/components/newWordsAppearance/newWordsAppearanceFactory';
import { Genesis, MetaBibleBooksDictionary } from '@/data/bibleBookMeta';
import { BookWordsPieFactoryKey, NewWordsAppearanceFactoryKey } from '@/injectionKeys';
import { inject, ref } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()
const bookName: string = route.params.bookName as string;
const book = ref(MetaBibleBooksDictionary[bookName] ?? Genesis)

const bookWordsPieFactory = inject(BookWordsPieFactoryKey) as BookWordsPieFactory
const newWordsAppearanceFactory = inject(NewWordsAppearanceFactoryKey) as NewWordsAppearanceFactory

const model = bookWordsPieFactory.getModelFor(bookName)
const bookWordsPieModel = ref(model)

const newWordsAppearanceModel = newWordsAppearanceFactory.getModel()
const bookWordsAppearanceModel = ref(newWordsAppearanceModel.data[bookName]);

</script>

<template>
  <main>
    <div>
      <RouterLink to="/" class="button bold">Go to Home</RouterLink>
      <MetaBook :book="book"></MetaBook>
    </div>
    <div>
      <BookWordsPie :book-words-pie-model="bookWordsPieModel"></BookWordsPie>

      <BookWordsAppearance :book-words-appearance-model="bookWordsAppearanceModel"></BookWordsAppearance>
    </div>
  </main>
</template>

<style scoped></style>

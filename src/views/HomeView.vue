<script setup lang="ts">
import { computed, inject, ref, watch } from 'vue'
import {
  BibleLoaderServiceKey,
  NewWordsAppearanceFactoryKey,
  WordGospelsRadarFactoryKey,
  WordParPerBookChronologicalyFactoryKey,
  WordPiePerBookFactoryKey,
  WordPiePerTestamentFactoryKey,
  WordReferencesFactoryKey
} from '@/injectionKeys'
import WordsFilter from '@/components/WordsList.vue'
import WordPiePerTestament from '@/components/wordPiePerTestament/wordPiePerTestament.vue'
import WordPiePerBook from '@/components/wordPiePerBook/wordPiePerBook.vue'
import WordGospelsRadar from '@/components/wordGospelsRadar/wordGospelsRadar.vue'
import WordFilterInput from '@/components/wordFilterInput.vue'
import WordReferences from '@/components/wordReferences/wordReferences.vue'
import { WordPiePerTestamentModel } from '@/components/wordPiePerTestament/wordPiePerTestamentModel'
import { WordPiePerBookModel } from '@/components/wordPiePerBook/wordPiePerBookModel'
import type { WordPiePerBookFactory } from '@/components/wordPiePerBook/wordPiePerBookFactory'
import type { WordReferencesFactory } from '@/components/wordReferences/wordReferencesFactory'
import { WordPiePerTestamentFactory } from '@/components/wordPiePerTestament/wordPiePerTestamentFactory'
import type { BibleLoaderService } from '@/data/bibleLoader'
import type { IVerse } from '@/data/iBible'
import { Testament } from '@/data/bibleBookMeta'
import { NewWordsAppearanceFactory } from '@/components/newWordsAppearance/newWordsAppearanceFactory'
import type { WordGospelsRadarFactory } from '@/components/wordGospelsRadar/wordGospelsRadarFactory'
import { WordGospelsRadarModel } from '@/components/wordGospelsRadar/wordGospelsRadarModel'
import { useRoute } from 'vue-router'
import WordParPerBookChronologicaly from '@/components/wordBarPerBookChronologicaly/wordBarPerBookChronologicaly.vue'
import type { WordBarPerBookChronologicalyFactory } from '@/components/wordBarPerBookChronologicaly/wordBarPerBookChronologicalyFactory'
import { WordBarPerBookChronologicalyModel } from '@/components/wordBarPerBookChronologicaly/wordBarPerBookChronologicalyModel'

const wordPiePerTestamentFactory = inject(
  WordPiePerTestamentFactoryKey
) as WordPiePerTestamentFactory

const bibleLoaderService = inject(BibleLoaderServiceKey) as BibleLoaderService
const wordPiePerBookFactory = inject(WordPiePerBookFactoryKey) as WordPiePerBookFactory
const wordParPerBookChronologicalyFactory = inject(WordParPerBookChronologicalyFactoryKey) as WordBarPerBookChronologicalyFactory
const wordReferencesFactory = inject(WordReferencesFactoryKey) as WordReferencesFactory
const newWordsAppearanceFactory = inject(NewWordsAppearanceFactoryKey) as NewWordsAppearanceFactory
const wordGospelsRadarFactory = inject(WordGospelsRadarFactoryKey) as WordGospelsRadarFactory

// intialize
const route = useRoute()
const defaultSearch = 'god';
bibleLoaderService.getTheBible()
const searchTerm = ref(<string>route.params.word ?? defaultSearch)
const selectedWord = ref(<string>route.params.word ?? defaultSearch)
const vs: IVerse[] = []
const wordVerses = ref(vs)
const wordPiePerTestamentModel = ref(new WordPiePerTestamentModel())
const wordPiePerBookModel = ref(new WordPiePerBookModel())
const wordParPerBookChronologicalyModel = ref(new WordBarPerBookChronologicalyModel())
const wordGospelsRadarModel = ref(new WordGospelsRadarModel())

const testamentFilter = ref(undefined as Testament | undefined)
const bookNameFilter = ref(undefined as string | undefined)

updateFactories()

function searchTermUpdated(search: string): void {
  searchTerm.value = search
}

function wordSelected(word: string): void {
  selectedWord.value = word
  updateFactories()
}

function testamentSelected(testament: Testament | undefined): void {
  if (testament != testamentFilter.value) {
    testamentFilter.value = testament
    clearBookNameFilter()
    updateWordReferences()
    updateWordPiePerBookFactory()
  }
}

function bookSelected(bookName: string | undefined): void {
  bookNameFilter.value = bookName
  updateWordReferences()
}

function updateFactories(): void {
  updateWordPiePerTestamentFactory()
  updateWordPiePerBookFactory()
  updateWordReferences()
  updateGospelsRadarFactory()
  updateWordParPerBookChronologicalyFactory();

  // expermental component
  newWordsAppearanceFactory.getModel()
}

function updateWordPiePerTestamentFactory(): void {
  wordPiePerTestamentModel.value = wordPiePerTestamentFactory.getModelFor(selectedWord.value)
}

function updateWordPiePerBookFactory(): void {
  wordPiePerBookModel.value = wordPiePerBookFactory.getModelFor(
    selectedWord.value,
    testamentFilter.value
  )
}

function updateWordParPerBookChronologicalyFactory(): void {
  wordParPerBookChronologicalyModel.value = wordParPerBookChronologicalyFactory.getModelFor(
    selectedWord.value
  )
}

function updateWordReferences(): void {
  wordVerses.value = wordReferencesFactory.getModelFor(
    selectedWord.value,
    testamentFilter.value,
    bookNameFilter.value
  )
}

function updateGospelsRadarFactory(): void {
  wordGospelsRadarModel.value = wordGospelsRadarFactory.getModelFor(
    selectedWord.value
  )
}

function clearTestamentFilter(): void {
  testamentFilter.value = undefined
  updateWordPiePerBookFactory()
  updateWordReferences()
}

function clearBookNameFilter(): void {
  bookNameFilter.value = undefined
  updateWordReferences()
}

const testamentFilterString = computed(() => {
  if (testamentFilter.value === undefined) {
    return ''
  }

  return Testament[testamentFilter.value]
})

const bookNameFilterString = computed(() => {
  if (bookNameFilter.value === undefined) {
    return ''
  }

  return bookNameFilter
})
</script>

<template>
  <div>

    <div class="header">
      <h1>The Bible word analysis</h1>

      <RouterLink to="/new-words" class="button bold">View new words appearance on books</RouterLink>
    </div>

    <div class="filter-header">
      <WordFilterInput @update-search-term="searchTermUpdated" :search="searchTerm" />
    </div>

    <div class="words-list">
      <WordsFilter :search="searchTerm" @word-selected="wordSelected" />
    </div>

    <div class="selected-word">Selected word: {{ selectedWord }}</div>

    <div class="word-graphs">
      <div class="word-graph">
        <WordPiePerTestament :wordPiePerTestamentModel="wordPiePerTestamentModel"
          @testament-selected="testamentSelected" />
      </div>

      <div class="word-graph">
        <WordPiePerBook :wordPiePerBookModel="wordPiePerBookModel" @book-selected="bookSelected" />
      </div>

      <div class="word-graph" v-if="wordGospelsRadarModel.show">
        <WordGospelsRadar :word-gospels-radar-model="wordGospelsRadarModel" />
      </div>
    </div>

    <div class="word-graphs">
      <div class="word-graph">
        <WordParPerBookChronologicaly :word-par-per-book-chronologicaly-model="wordParPerBookChronologicalyModel" />
      </div>
    </div>

    <div class="filters">
      <div class="filter-item" v-if="testamentFilterString">
        <div>
          {{ testamentFilterString }}
        </div>
        <div class="clear-filter">
          <button @click="clearTestamentFilter">X</button>
        </div>
      </div>
      <div class="filter-item" v-if="bookNameFilterString">
        <div>
          {{ bookNameFilterString }}
        </div>
        <div class="clear-filter">
          <button @click="clearBookNameFilter">X</button>
        </div>
      </div>
    </div>

    <div class="word-verses">
      <WordReferences :word-verses="wordVerses" />
    </div>

    <div class="license-note">
      “The Scriptures quoted are from the NET Bible® https://netbible.com copyright ©1996, 2019
      used with permission from Biblical Studies Press, L.L.C. All rights reserved”.
    </div>
  </div>
</template>

<style scoped>
.header {
  margin-bottom: 10px;
}

.filter-header {
  margin-bottom: 10px;
}

.words-list {
  margin-bottom: 10px;
}

.selected-word {
  text-align: center;
  margin-bottom: 10px;
  font-size: 4rem;
}

.word-graphs {
  display: flex;
  margin-bottom: 10px;
}

.word-graph {
  flex: 1 0 0;
  align-content: center;
}

.filters {
  margin-bottom: 10px;
  display: flex;
  justify-content: start;
}

.filter-item {
  margin-right: 10px;
  border-radius: 5px;
  background-color: #24252d;
  flex: none;
  display: flex;
  padding: 10px;
}

.clear-filter {
  margin-left: 5px;
}

.word-verses {
  margin-bottom: 10px;
}

.license-note {
  background-color: #24252d;
  padding: 1em 3em;
  border-radius: 5px;
  font-size: medium;
}
</style>

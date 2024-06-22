import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { BibleLoaderService } from './data/bibleLoader'
import {
  BibleLoaderServiceKey,
  WordPiePerBookFactoryKey,
  WordPiePerTestamentFactoryKey,
  WordReferencesFactoryKey,
  NewWordsAppearanceFactoryKey,
  WordGospelsRadarFactoryKey,
  WordParPerBookChronologicalyFactoryKey,
  BookWordsPieFactoryKey
} from './injectionKeys'
import { WordPiePerTestamentFactory } from './components/wordPiePerTestament/wordPiePerTestamentFactory'
import VueApexCharts from 'vue3-apexcharts'
import { WordPiePerBookFactory } from './components/wordPiePerBook/wordPiePerBookFactory'
import { WordReferencesFactory } from './components/wordReferences/wordReferencesFactory'
import { NewWordsAppearanceFactory } from './components/newWordsAppearance/newWordsAppearanceFactory'
import { WordGospelsRadarFactory } from './components/wordGospelsRadar/wordGospelsRadarFactory'
import { WordBarPerBookChronologicalyFactory } from './components/wordBarPerBookChronologicaly/wordBarPerBookChronologicalyFactory'
import { BookWordsPieFactory } from './components/bookWordsPie/bookWordPieFactory'

const app = createApp(App)

const bibleLoaderService = new BibleLoaderService()
app.provide(BibleLoaderServiceKey, bibleLoaderService)
app.provide(WordPiePerTestamentFactoryKey, new WordPiePerTestamentFactory(bibleLoaderService))
app.provide(WordPiePerBookFactoryKey, new WordPiePerBookFactory(bibleLoaderService))
app.provide(WordParPerBookChronologicalyFactoryKey, new WordBarPerBookChronologicalyFactory(bibleLoaderService))
app.provide(WordReferencesFactoryKey, new WordReferencesFactory(bibleLoaderService))
app.provide(NewWordsAppearanceFactoryKey, new NewWordsAppearanceFactory(bibleLoaderService))
app.provide(WordGospelsRadarFactoryKey, new WordGospelsRadarFactory(bibleLoaderService))
app.provide(BookWordsPieFactoryKey, new BookWordsPieFactory(bibleLoaderService))

app.use(router)
app.use(VueApexCharts)

app.mount('#app')

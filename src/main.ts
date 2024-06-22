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
  NewWordsAppearanceFactoryKey
} from './injectionKeys'
import { WordPiePerTestamentFactory } from './components/wordPiePerTestament/wordPiePerTestamentFactory'
import VueApexCharts from 'vue3-apexcharts'
import { WordPiePerBookFactory } from './components/wordPiePerBook/wordPiePerBookFactory'
import { WordReferencesFactory } from './components/wordReferences/wordReferencesFactory'
import { NewWordsAppearanceFactory } from './components/newWordsAppearance/newWordsAppearanceFactory'

const app = createApp(App)

const bibleLoaderService = new BibleLoaderService()
app.provide(BibleLoaderServiceKey, bibleLoaderService)
app.provide(WordPiePerTestamentFactoryKey, new WordPiePerTestamentFactory(bibleLoaderService))
app.provide(WordPiePerBookFactoryKey, new WordPiePerBookFactory(bibleLoaderService))
app.provide(WordReferencesFactoryKey, new WordReferencesFactory(bibleLoaderService))
app.provide(NewWordsAppearanceFactoryKey, new NewWordsAppearanceFactory(bibleLoaderService))

app.use(router)
app.use(VueApexCharts)

app.mount('#app')
